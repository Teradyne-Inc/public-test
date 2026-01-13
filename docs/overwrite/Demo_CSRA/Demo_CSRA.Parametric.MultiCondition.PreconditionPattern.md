---
uid: Demo_CSRA.Parametric.MultiCondition.PreconditionPattern(Teradyne.Igxl.Interfaces.Public.PinList,System.String,System.String,System.String,Teradyne.Igxl.Interfaces.Public.Pattern,System.String,System.String,System.String,Teradyne.Igxl.Interfaces.Public.PinList,System.Double,System.String)
custom_details: *content
---

##### Test Technique

- to be added

##### Implementation

The **Validation** section creates the `Pins` and `PatternInfo` objects, converts the comma separated value (CSV) lists into cached value arrays, and determines force & measure modes and confirms valid combinations.

The **PreBody** section applies levels and timing from the test instance context. Optionally, applies the specified `setup`.
The preconditioning pattern is executed.For all pins specified in the `pinList` it disconnects any pin electronics, connects the dc path and turns on the gate.

The **Body** section applies the force condition(s) on all pins, sets the measurement mode(s) and performs the measurement on all pins in parallel after the specified `waitTime`.

The **PostBody** section restores the pin electronics connection for digital pins after gating off and disconnecting the dc path. Finally, a parametric datalog is logged.

##### Platform Specifics

Supports stepping capability for PreBody/Body/PostBody.

##### Pre Conditions

- none

##### Post Conditions

- none

##### Limitations

- support for non-uniform (mixed) instrument types in pinList not yet available

##### Code Reference

[!code-csharp[](../../../src/Demo/Demo_CSRA/Parametric/MultiCondition.cs?name=Preconditioning)]
