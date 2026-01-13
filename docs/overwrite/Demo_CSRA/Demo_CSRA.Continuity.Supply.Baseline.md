---
uid: Demo_CSRA.Continuity.Supply.Baseline(Teradyne.Igxl.Interfaces.Public.PinList,System.Double,System.Double,System.Double,System.String)
custom_details: *content
---

##### Test Technique

- to be added

##### Implementation

The **PreBody** section applies levels and timing from the test instance context. Optionally, applies the specified `config`. For all pins specified in the `pinList` it disconnects any pin electronics, connects the dc path and turns on the gate.

The **Body** section applies a force `forceVoltage` condition on all pins and performs a current measurement on all pins in parallel after the specified `waitTime`.

The **PostBody** section restores the pin electronics connection for digital pins after gating off and disconnecting the dc path. Finally, a parametric datalog is logged.

##### Platform Specifics

Supports stepping capability for PreBody/Body/PostBody.

##### Pre Conditions

- none

##### Post Conditions

- any dc paths from pins in `pinList`are disconnected

##### Limitations

- support for non-uniform (mixed) instrument types in pinList not yet available

##### Code Reference

[!code-csharp[](../../../src/Demo/Demo_CSRA/Continuity/Supply.cs?name=Baseline)]
