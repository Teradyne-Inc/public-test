# Code Structure - Test Blocks

Test Blocks are the main feature of this project, providing an abstraction layer in how users interact with the IG-XL based (future also other!) testers. They introduce a whole new use model with a learning curve users have to master first in order to become productive customizing and crafting their own test methods.

That experience and any created work can not be jeopardized by frequent, incompatible changes. Compatibility is a concern and is addressed so that existing code doesn't break, but updates and improvements are possible once the user understands and embraces rework requirements.

The goal for the Test Block API is a structured and user-friendly tree model similar to nested static classes. The main objectives are to ensure that the API is mockable, extendable, and easy to use.

A key requirement is the ability to support multiple API versions. This feature maintains backward compatibility while allowing users to adopt new functionality without affecting existing implementations.

**Test Blocks fully implement [versioned interfaces](backwards-compatibility.md) and are exclusively called through these. Previous versions are part of the release package and can keep being called. Implementation is kept common as far as possible.**

> [!Important]
> Because of their purely functional and stateless nature, test blocks may be called from other test blocks. This can be to avoid code duplication as well if there are superset designs, and may be required if private support methods are not sufficient. Also in the case of calling test block from other test blocks, calls are being made through their (versioned) interface. Once a new (incompatible) version is introduced, the C#RA team commits to do due diligence and update all calls to the then-newest version.

## Language Hierarchy

The test block calling syntax is designed to be both intuitive and self-documenting. The language object conveys user intent — from broad, high-level domains to detailed, specific instructions — which makes the flow and sequence of code within a test method easy to follow. This clarity not only helps readers understand other's code but also assists developers in navigating a large and potentially unfamiliar API. The level depth adapts to the complexity of the branch or the specificity of the block method:

1. **Entry point**: `TheLib`
2. **Action** category: `Setup`, `Acquire`, `Execute`, `Datalog` ...
3. **Domain** category: `Dc`, `Digital`, `Ac`, `Rf` ... or test block methods
4. Further category - or test block methods
5. ...

## Code Architecture

Two architectural approaches are considered: a static tree structure and a tree of multiple singletons. In both cases, the API tree is separated from the method implementations. The API consists of branches that reference a separate implementation section, keeping the API structure distinct from its functional logic. This separation improves modularity and maintainability.

The findings, the reasoning behind the chosen approach, and the key design trade-offs are listed here.

### Static Approach

The static approach is pretty straight forward. It is possible to place all of the API in a single class file or separate into multiple files with partial classes.

```c#
namespace Csra.V1 {
    public static partial class TheLib {
        public static partial class Acquire {
            public static void Meter() => Implementation.AcquireBlocks.Meter();
        }
        public static partial class Setup {
            public static partial class Dc {
                public static void Connect(string pins, bool gate) => Implementation.Setup.DcBlocks.Connect(pins, gate);
                public static void ForceI(string pins, double current) => Implementation.Setup.DcBlocks.ForceI(pins, current);
                public static void ForceV(string pins, double voltage) => Implementation.Setup.DcBlocks.ForceV(pins, voltage);
            }
            public static void ApplyLevelsTiming() => Implementation.SetupBlocks.ApplyLevelsTiming();
        }
    }
}
```

### Singleton Approach

The singleton approach is a bit more complicated. The singleton approach uses nested interfaces that are declared in a separate file. In the next chapter the two approaches will be compared.

```c#
namespace Csra.V1 {

    public static class Api {
        private static ILib _theLib = null;

        public static void MockInjection(ILib mockedObject) => _theLib = mockedObject;

        public static ILib TheLib => _theLib ??= new TheLib_();
        public static ILib.ISetup Setup => TheLib.Setup;
        public static ILib.IAcquire Acquire => TheLib.Acquire;

        private class TheLib_ : ILib {

            private static Setup_ _setup = null;
            private static Acquire_ _acquire = null;

            public ILib.ISetup Setup => _setup ??= new Setup_();

            public ILib.IAcquire Acquire => _acquire ??= new Acquire_();

            private sealed class Setup_ : ILib.ISetup {
                private static Dc_ _dc = null;
                public ILib.ISetup.IDc Dc => _dc ??= new Dc_();
                public void ApplyLevelsTiming() => Implementations.TestBlocks.SetupBlocks.ApplyLevelsTiming();
                private sealed class Dc_ : ILib.ISetup.IDc {
                    public void Connect(string pins, bool gate) => Implementations.TestBlocks.Setup.DcBlocks.Connect(pins, gate);
                    public void ForceI(string pins, double current) => Implementations.TestBlocks.Setup.DcBlocks.ForceI(pins, current);
                    public void ForceV(string pins, double voltage) => Implementations.TestBlocks.Setup.DcBlocks.ForceV(pins, voltage);
                }
            }
            private class Acquire_ : ILib.IAcquire {
                public void Meter() => Implementations.TestBlocks.AcquireBlocks.Meter();
            }
        }
    } 
}
```

```c#
namespace Csra.Interfaces {

    public interface ILib {
        public ISetup Setup { get; }
        public IAcquire Acquire { get; }
        public interface ISetup {
            public IDc Dc { get; }
            public void ApplyLevelsTiming();
            public interface IDc {
                public void Connect(string pins, bool gate);
                public void ForceV(string pins, double voltage);
                public void ForceI(string pins, double current);
            }
        }
        public interface IAcquire {
            public void Meter();
        }
    }
}
```

### Comparison Goals

To effectively compare the two architectural approaches, I established several key goals that the API must meet:

- **Easy to Use** - The API should support efficient traversal of the object tree, allowing users to navigate through the hierarchical structure with ease.

- **Namespace Versioning Concept** - Different version of the API can coexist and be selected as needed. Without having too much overhead.

- **Extensible** - The API should be designed to allow for easy extension, like Extension-Methods.

- **Mockable** - The API should be easily mockable to facilitate unit testing and ensure that different components can be tested in isolation.

#### Easy to Use

Both approaches allow a nice way of calling methods in the API tree. The debugging experience is exactly the same for both approaches. The entry node of the singleton approach is the only difference.

```c#
# static
TheLib.Setup.Dc.ForceV("dig", 2.9);

# singleton
Api.TheLib.Setup.Dc.ForceV("dig", 2.9);
```

To overcome this syntax issue, it is possible to use static import, it allows you to access static members of a class without needing to qualify them with the class name.

```c#
# singleton with static import
using static Csra.Api;
...
TheLib.Setup.Dc.ForceV("dig", 2.9);
```

#### Namespace Versioning Concept

Both approaches are again very similar to achieve the goal of namespace versioning. It is quite easy to select between versions, by file or even by line of code.

```c#
# static
using Csra; // selects the default version for the file
...
TheLib.Setup.Dc.ForceV("dig", 2.9); // executes ForceV of V1
...
Csra.V2.TheLib.Setup.Dc.ForceV("dig", 2.9); // executes ForceV of V2
```

```c#
# singleton
using static Csra.Api; // selects the default version for the file
...
TheLib.Setup.Dc.ForceV("dig", 2.9); // executes ForceV of V1
...
Csra.V2.Api.TheLib.Setup.Dc.ForceV("dig", 2.9); // executes ForceV of V2
```

#### Extensible

If a customer wants to extend the capability of the C# Reference Architecture, it should be far easy to extend methods. The static approach allows you to write custom methods in a separate file **but** inside the cs-reference-architecture project. There could be issues when trying to update cs-reference-architecture in the future.

```c#
# static
## Needs to be in the same project as the API, but not in the same file
namespace Csra.V1 {
    public static partial class TestBlock {
        public static partial class Setup {
            public static partial class Dc {
                public static void CustomMethod(string pins) {
                    // This is doing custom things
                }
            }
        }
    }
}

## it can be used like
TestBlock.Setup.Dc.CustomMethod("hi");
```

Using ExtensionMethods adds the ability to define those methods in a separate project but make it accessible through the API.

```c#
# singleton
## can be in the customer project
public static class Extensions {
    public static void CustomMethod(this Csra.Interfaces.ILib.ISetup.IDc dc, string pins) {
        // This is doing custom things
    }
}

## it can be used like
using static Csra.Api;
...
TheLib.Setup.Dc.CustomMethod("hi");
```

#### Mockable

The cs-reference-architecture is unit-tested, a customer will use those Test Blocks in their custom code. User written unit-test code should not depend on the C# Reference Architecture and therefore mocking those calls is required.

While the static approach does not support to be mocked, the singleton approach supports those almost out of the box. The MSTest project needs to import `Moq` to mock C# Reference Architecture.

```c#
#singleton
#CustomerCode
public void DoWhatYouWant(string pins, bool gate) {
    if (gate) {
        // do custom things
    }
    TheLib.Setup.Dc.Connect(pins, gate);
    if (TheHdw.DCVS.Pins(pins).Gate) {
        // do other things
    }
}
...
#MSTest
[TestMethod]
public void TestDcConnectMock() {
    Mock<Csra.Interfaces.ILib> mockTestBlock = new Mock<Csra.Interfaces.ILib>() { DefaultValue = DefaultValue.Mock };
    MockInjection(mockTestBlock.Object); // Inject the mocked object, so TestBlock is using the mocked object instead of the real deal
    DoWhatYouWant("dig", false);
    mockTestBlock.Verify(x => x.Setup.Dc.Connect("dig", false), Times.Once); // make sure that Setup.Dc.Connect was called with these arguments
    // Assert custom things
    // Assert other things
    MockInjection(null); // cleanup mocking after the TestMethod
}
```

This gives the user the ability to test their custom code isolated from the C# Reference Architecture.

### Conclusion on Architecture

The singleton approach has the capability of mocking which the static does not have and supports way nicer extension methods. The versioning and object tree traversal are fairly similar. Consequently, the singleton approach is selected.

## Instrument Independence & Feature Tolerance

Instead of programming instrument features directly, test blocks use a `TheLib.Action.Domain` notation, with the domain relating to generic instrument capabilities rather than types. For example most of the instrument have some basic DC capability, and that way this can be controlled commonly with a single call.

Inside the block, driver calls have to be routed to the specific instrument language nodes in IG-XL, and the `Pins` type helps extracting the relevant pins for these in an efficient way.

### Principles for Test Blocks

1. Test Blocks tolerate pins that don't offer the feature required. They will extract the sub-pin list required to program the hardware and quietly ignore others. This allows for simpler and instrument / platform agnostic code at the test method level. Not requiring runtime checks for "any pins left over" improves execution performance.

2. Test Method authors are advised to make use of validation to check that the provided pins support the expected type and no pins of unsupported types are provided. C#RA provided Test Methods lead by example and implement that.

3. Because correct parameter validation can't be guaranteed in user code, test blocks issue an `Services.Alert.Warning` if the provided pin list doesn't contain any supported pins. This would result in quietly performing no action at all, which is considered an untypical and potentially dangerous case which should be highlighted. This check can be implemented in test blocks at little execution time cost.

4. Scenarios that do require this case may suppress the warning with a conditional call of the test block. The `if (_pins.ContainsFeature(Pins.Feature.Digital)) TheLib.Setup.Digital.Disconnect(_pins)` both prevents that warning and documents the intention in the code. The concept is similar to the `pragma` compiler statements, only that these don't apply to run-time.

### Implementation

A block only supporting a single instrument type would extract the relevant pins to perform a driver call and issue the warning in the `else` path:

```cs
internal static void Connect(Pins pins) {
    if (pins.ContainsFeature(Pins.Feature.Digital, out string pinList)) {
        TheHdw.Digital.Pins(pinList).Connect();
    } else {
        Services.Alert.Warning("None of the pins contain 'Digital' features - no action performed", "Setup");
    }
}
```

Blocks supporting different instrument types need a little extra logic to determine that case:

```cs
internal static void ForceV(Pins pins, double forceVoltage) {
    bool noAction = true;
    if (pins.ContainsFeature(Pins.Feature.Ppmu, out string ppmuPins)) {
        TheHdw.PPMU.Pins(ppmuPins).ForceV(forceVoltage);
        noAction = false;
    }
    if (pins.ContainsFeature(Pins.Feature.Dcvi, out string dcviPins)) {
        TheHdw.DCVI.Pins(dcviPins).Voltage.Value = forceVoltage;
        noAction = false;
    }
    if (pins.ContainsFeature(Pins.Feature.Dcvs, out string dcvsPins)) {
        TheHdw.DCVS.Pins(dcvsPins).Voltage.Value = forceVoltage;
        noAction = false;
    }
    if(noAction) {
        Services.Alert.Warning("None of the pins contain 'DC' features - no action performed", "Setup");
    }
}
```

The code for Test Methods remains simple but adds explicit highlighting of (legitimate) scenarios where no-action test blocks are supported:

```cs
[TestClass(Creation.TestInstance)]
[Serializable]
public class Parallel : TestCodeBase {

    private Pins _pins;
    private PinSite<double> _meas;
    private PatternInfo _pattern;
    private bool _digitalPresent;

    /// <summary>
    /// Measures the current at the bias voltage applied to the pins of a device.
    /// </summary>
    /// <param name="pinList">List of pin or pin group names to measure.</param>
    /// <param name="voltage">The force voltage value.</param>
    /// <param name="currentRange">The current range for measurement.</param>
    /// <param name="waitTime">The wait time after forcing.</param>
    /// <param name="setup">The name of the setup set to be applied through the setup service.</param>
    #region Baseline
    [TestMethod, Steppable, CustomValidation]
    public void Baseline(PinList pinList, double voltage, double currentRange, double waitTime, string setup = "") {

        if (TheExec.Flow.IsValidating) {
            _pins ??= new Pins(pinList);
            _digitalPresent = _pins.ContainsFeature(Pins.Feature.Digital);
            // add validation to check if any of the pins support DC
        }

        if (ShouldRunPreBody) {
            TheLib.Setup.ApplyLevelsTiming();
            Services.Setup.Apply(setup);
            if (_digitalPresent) TheLib.Setup.Digital.Disconnect(_pins);
            TheLib.Setup.Dc.Connect(_pins, true);
        }

        if (ShouldRunBody) {
            TheLib.Setup.Dc.ForceV(_pins, voltage, voltage, currentRange);
            TheLib.Execute.Wait(waitTime);
            _meas = TheLib.Acquire.Dc.Measure(_pins);
        }

        if (ShouldRunPostBody) {
            TheLib.Setup.Dc.Disconnect(_pins, false);
            if (_digitalPresent) TheLib.Setup.Digital.Connect(_pins);
            TheLib.Datalog.TestParametric(_meas, voltage);
        }
    }
}
```

> [!Note]
> The flag `_digitalPresent` may be determined at validation time, but isn't expensive even if called at run time. The pins type uses cached information on pin types and features, and may even internally cache this information going forward if profiling results indicate a benefit.


Validation checks are making sure the test method isn't called with pins it does not support (exact syntax to be determined).