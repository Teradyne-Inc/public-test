---
uid: Demo_CSRA.Resistance.RdsOn.ThreePinsOneForceTwoMeasure(Teradyne.Igxl.Interfaces.Public.PinList,System.Double,System.Double,Teradyne.Igxl.Interfaces.Public.PinList,System.Double,Teradyne.Igxl.Interfaces.Public.PinList,System.Double,System.Double,System.String)
custom_details: *content
---

##### Test Technique

- to be added

##### Implementation

The **PreBody** section applies levels and timing from the test instance context. Optionally, applies the specified `config`. For all pins specified in the `forcePin`,`measureFirstPin` and `measureSecondPin` it disconnects any pin electronics, connects the dc path and turns on the gate.

The **Body** section applies a force current on all pins specified in the `forcePin`. Configures High Impedance mode, initializes the meter block, and performs a voltage measurement on all pins in parallel specified in `measureFirstPin` and in `measureSecondPin` after the specified `waitTime`. Finally, the resistance is calculated according to the forced value ​​and the measured values.

The **PostBody** section restores the pin electronics connection for digital pins after gating off and disconnecting the dc path. Finally, a parametric datalog is logged.

##### Platform Specifics

Supports stepping capability for PreBody/Body/PostBody.

##### Pre Conditions

- none

##### Post Conditions

- any dc paths from pins in `forcePin`, `measureFirstPin` and `measureSecondPin` are disconnected

##### Limitations

- support for non-uniform (mixed) instrument types in pinList not yet available

##### Code Reference

[!code-csharp[](../../../src/Demo/Demo_CSRA/Resistance/RdsOn.cs?name=ThreePinsOneForceTwoMeasure)]
