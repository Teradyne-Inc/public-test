---
uid: Demo_CSRA.Timing.Frequency.Baseline(Teradyne.Igxl.Interfaces.Public.Pattern,Teradyne.Igxl.Interfaces.Public.PinList,System.Double,System.Double,System.String,System.String,System.String)
custom_details: *content
---

##### Test Technique

- to be added

##### Implementation

The **validation** section creates the `pins` and `pattern` objects.

The **PreBody** section applies levels and timing from the test instance context. Optionally, applies the specified `setup`.
For all pins specified in the `pinList` it connects the dc path and leaves the gate as it is.

The **Body** section configures the `measurePins` for a frequency read, starts the `pattern`, measures the frequency on the `measurePins` after the specified `wait` and then forces the `pattern` to halt. The pattern must be long enough for the specified `wait` plus the `measureWindow` and will be forced to halt immediately after the measurement is taken. This halt allows for the `pattern` to be implemented as an infinite loop or as a standard vector sequence, but does not allow for additional device configuration or processing after the frequency is measured.

The **PostBody** section datalogs the measured frequency.

##### Platform Specifics

Utilizes the frequency counter for the measurements.
Supports stepping capability for PreBody/Body/PostBody.

##### Pre Conditions

- none

##### Post Conditions

- none

##### Limitations

- Only digital channels supported.

##### Code Reference

[!code-csharp[](../../../src/Demo/Demo_CSRA/Timing/Frequency.cs?name=Baseline)]
