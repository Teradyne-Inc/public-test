---
uid: Demo_CSRA.Continuity.Parametric.Serial(Teradyne.Igxl.Interfaces.Public.PinList,System.Double,System.Double,System.Double,System.Double,System.String)
custom_details: *content
---

The **PreBody** section applies levels and timing from the test instance context. Optionally, applies the specified `config`. For all pins specified in the `pinList` it disconnects any pin electronics, connects the dc path.

The **Body** section applies a force 0V condition on all pins, then sequentially—for each pin—applies a force `current` condition, performs a voltage measurement after the specified `waitTime`, and resets the pin to force 0V. 

The **PostBody** section restores the pin electronics connection for digital pins after gating off and disconnecting the dc path. Finally, a parametric datalog is logged. 

##### UltraFLEXplus, UltraFLEX

Supports stepping capability for PreBody/Body/PostBody. 

##### Pre Conditions

- none

##### Post Conditions

- digital pins in `pinList` have pin electronics connected
- any dc paths from pins in `pinList` are disconnected

##### Implementation

[!code-csharp[](../../../src/Demo/Demo_CSRA/Continuity/Parametric.cs?name=Serial)]

##### Limitations

- support for non-uniform (mixed) instrument types in pinList not yet available
