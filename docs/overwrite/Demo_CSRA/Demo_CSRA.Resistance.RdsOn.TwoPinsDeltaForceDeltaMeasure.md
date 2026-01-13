---
uid: Demo_CSRA.Resistance.RdsOn.TwoPinsDeltaForceDeltaMeasure(Teradyne.Igxl.Interfaces.Public.PinList,System.String,System.Double,System.Double,System.Double,Teradyne.Igxl.Interfaces.Public.PinList,System.Double,System.Double,System.Double,System.String)
custom_details: *content
---

##### Test Technique

- to be added

##### Implementation

The **PreBody** section applies levels and timing from the test instance context. Optionally, applies the specified `config`. For all pins specified in the `forcePin` and `measurePin` it disconnects any pin electronics, connects the dc path and turns on the gate.

The **Body** section applies a force current or voltage depending on the `forceMode`. Configures High Impedance mode, initializes the meter block, and performs a voltage or current measurement on all pins in parallel specified in the `measurePin` after the specified `waitTime`. Settings are applied twice serially to achieve the delta between measurements. Finally, the resistance is calculated according to the forced values ​​and the measured values.

The **PostBody** section restores the pin electronics connection for digital pins after gating off and disconnecting the dc path. Finally, a parametric datalog is logged.

##### Platform Specifics

Supports stepping capability for PreBody/Body/PostBody.

##### Pre Conditions

- none

##### Post Conditions

- any dc paths from pins in `forcePin` and `measurePin` are disconnected

##### Limitations

- support for non-uniform (mixed) instrument types in pinList not yet available

##### Code Reference

[!code-csharp[](../../../src/Demo/Demo_CSRA/Resistance/RdsOn.cs?name=TwoPinsDeltaForceDeltaMeasure)]
