# Feature Modularity

In order to avoid overloaded and bulky implementations, an opt-in approach is chosen for features where possible. Have our templates in `Template.xla` already been unhandy, imagine how they would look like if all the power of .NET would also be crammed in there.

To allow for low entry barrier and to let users decide which features they need and want, a modular approach is followed. The exact model varies for the different features, but in general, users should be able to mix and match.

The idea is explained at the example of a simple test method, opting in to debug and argument validation functionality.

## A Simple Test Method

The following code shows a minimum implementation of a basic continuity test. The [test abstraction](test-abstraction.md) methodology is used for concide code:

```cs
using static Demo.TestLib;

[TestMethod]
public void SimpleContinuity(string digPins, string powerPins, double forceCurrent) {

    // setup
    string allPins = Utils.MergePinLists(digPins, powerPins);
    Connect(allPins);
    Setup.ForceV(powerPins, 0 * V);
    Setup.ForceI(digPins, forceCurrent, Measure.Voltage, 2 * V, forceCurrent);
    Setup.Gate(allPins, true);

    // measure
    TheHdw.Wait(1 * ms);
    PinSite<double> meas = Acquire.ReadMeter(digPins);

    // reset
    Setup.Gate(allPins, false);
    DisConnect(allPins);

    // datalog
    Datalog.TestParametric(meas, "V");
}
```

### Example: Add Pre- / Body / Post Stepping Capability

If desired, the concept of steppable test methods can be easily added. The code would only require slight modifications:

```cs
[TestMethod, Steppable]
public void SimpleContinuityWithStepping(string digPins, string powerPins, double forceCurrent) {

    string allPins = Utils.MergePinLists(digPins, powerPins);
    PinSite<double> meas = null;

    if (ShouldRunPreBody) PreBody();
    if (ShouldRunBody) Body();
    if (ShouldRunPostBody) PostBody();

    void PreBody() {
        Connect(allPins);
        Setup.ForceV(powerPins, 0 * V);
        Setup.ForceI(digPins, forceCurrent, Measure.Voltage, 2 * V, forceCurrent);
        Setup.Gate(allPins, true);
    }

    void Body() {
        TheHdw.Wait(1 * ms);
        meas = Acquire.ReadMeter(digPins);
    }

    void PostBody() {
        Setup.Gate(allPins, false);
        DisConnect(allPins);
        Datalog.TestParametric(meas, "V");
    }
}
```
The stepping feature allows compliant test instances to have three distinct parts, which can be individually stepped through with Flow Breakpoints. The code for Three local methods are added, with each covering the code parts specific for the individual steps. Called from the flow controller 3 consecutive times, this test method branches into the corresponding Pre / Body / Post part via a central `if` structure at the top.

> [!TIP]
> [Local functions](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/local-functions) have access to the arguments and local variables of the hosting member. It's not needed to hand these through via arguments. The compiler takes care of that, resulting in a cleaner code with less errors.

### Example: Add Argument Validation Capability

To offer more convenience to the users of this generic test method, it may offer argument validation. Also that functionality can be added in a modular fashion, leaving the rest of the code structure untouched.

```cs
[TestMethod, Steppable, CustomValidation]
public void SimpleContinuityWithValidation(string digPins, string powerPins, double forceCurrent) {

    string allPins = Utils.MergePinLists(digPins, powerPins);
    PinSite<double> meas = null;

    if (TheExec.Flow.IsValidating) ValidateArgs();
    if (ShouldRunPreBody()) PreBody();
    if (ShouldRunBody()) Body();
    if (ShouldRunPostBody()) PostBody();

    void ValidateArgs() {
        Validate.IsInRange(forceCurrent, -200 * uA, 200 * uA, $"Force Currrent too large.");
    }

    void PreBody() {
        Connect(allPins);
        Setup.ForceV(powerPins, 0 * V);
        Setup.ForceI(digPins, forceCurrent, Measure.Voltage, 2 * V, forceCurrent);
        Setup.Gate(allPins, true);
    }

    void Body() {
        TheHdw.Wait(1 * ms);
        meas = Acquire.ReadMeter(digPins);
    }

    void PostBody() {
        Setup.Gate(allPins, false);
        DisConnect(allPins);
        Datalog.TestParametric(meas, "V");
    }
```

The validation part is also encapsulated in a local function, called from the high-level selector part at the top. 