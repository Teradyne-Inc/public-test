---
uid: Demo_CSRA.Resistance.RdsOn.Baseline(Teradyne.Igxl.Interfaces.Public.PinList,System.String,System.Double,System.Double,System.Double,System.String,System.String)
custom_details: *content
---

##### Test Technique

- to be added

##### Implementation

The **PreBody** section applies levels and timing from the test instance context. Optionally, applies the specified `config`. For all pins specified in the `forcePin` it disconnects any pin electronics, connects the dc path and turns on the gate.

The **Body** section applies a force current or voltage depending on the `forceMode`, sets the meter block and performs a voltage or current measurement on all pins specified in the `forcePin` in parallel after the specified `waitTime`. Finally, the resistance is calculated according to the forced and measured value. Optionally, resistance value can be calculated using the label of a reference voltage from a previously stored measurement `labelOfStoredVoltage`.

The **PostBody** section restores the pin electronics connection for digital pins after gating off and disconnecting the dc path. Finally, a parametric datalog is logged.

##### Platform Specifics

Supports stepping capability for PreBody/Body/PostBody.

##### Pre Conditions

- none

##### Post Conditions

- any dc paths from pins in `forcePin` are disconnected

##### Limitations

- support for non-uniform (mixed) instrument types in pinList not yet available

##### Code Reference

[!code-csharp[](../../../src/Demo/Demo_CSRA/Resistance/RdsOn.cs?name=Baseline)]
