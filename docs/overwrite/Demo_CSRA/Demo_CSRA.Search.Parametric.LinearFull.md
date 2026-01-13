---
uid: Demo_CSRA.Search.Parametric.LinearFull(Teradyne.Igxl.Interfaces.Public.PinList,Teradyne.Igxl.Interfaces.Public.PinList,System.Double,System.Double,System.Int32,System.Double,System.Double,System.Double,System.String)
custom_details: *content
---

##### Test Technique

- to be added

##### Implementation

The **PreBody** section applies levels and timing from the test instance context. Optionally, applies the specified `setup`. For the force pin and the measure pin, specified in `forcePins` and `measurePin`, it disconnects any pin electronics and connects the DC path.

The **Body** section applies a voltage force of the `start` value and turns on the gate for `forcePins`, sets the measurement block for `measurePin`, and performs an unconditional linear search up to the `stop` value with a step count of `step`. Finally, it returns the input value that results in an output closest to the voltage `threshold` point.

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

[!code-csharp[](../../../src/Demo/Demo_CSRA/Search/Parametric.cs?name=LinearFull)]
