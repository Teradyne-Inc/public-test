---
uid: Demo_CSRA.SupplyCurrent.Dynamic.Baseline(Teradyne.Igxl.Interfaces.Public.PinList,System.Double,System.Double,System.Double,System.Double,Teradyne.Igxl.Interfaces.Public.Pattern,System.Int32,System.String)
custom_details: *content
---

##### Test Technique

- to be added

##### Implementation

The **PreBody** section applies levels and timing from the test instance context. Optionally, applies the specified `config`. For all pins specified in the `pinList` it disconnects any pin electronics, connects the dc path and turns on the gate.

The **Body** section applies a `forceVoltage` condition on all pins, sets the measurement mode, starts the pattern and performs a predefined number of current measurements synchronized by a Flag stop. Sets of measurements are made after Flag stop at the specified `waitTime`.

The **PostBody** section restores the pin electronics connection for digital pins after gating off and disconnecting the dc path. Finally, a parametric datalog is logged.

##### Platform Specifics

Supports stepping capability for PreBody/Body/PostBody.

##### Pre Conditions

- none

##### Post Conditions

- any dc paths from pins in `pinList` are disconnected

##### Limitations

- support for non-uniform (mixed) instrument types in pinList not yet available

##### Code Reference

[!code-csharp[](../../../src/Demo/Demo_CSRA/SupplyCurrent/Dynamic.cs?name=Baseline)]
