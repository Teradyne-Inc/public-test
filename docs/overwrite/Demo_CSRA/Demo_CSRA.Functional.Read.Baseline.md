---
uid: Demo_CSRA.Functional.Read.Baseline(Teradyne.Igxl.Interfaces.Public.Pattern,Teradyne.Igxl.Interfaces.Public.PinList,System.Int32,System.Int32,System.Int32,System.Boolean,System.Boolean,System.Boolean,System.String)
custom_details: *content
---

##### Test Technique

- to be added

##### Implementation

The **Validation** section validates the test method inputs and creates the `pattern` and `pins` objects.

The **PreBody** section applies levels and timing from the test instance context. Optionally, applies a specified `config`.

The **Body** section sets up the capture, executes the `pattern`, retrieves the functional results and data read back from the device.

The **PostBody** optionally logs the functional and parametric test records.

##### Platform Specifics

Supports stepping capability for PreBody/Body/PostBody. Uses the HRAM for setup and capture.

##### Pre Conditions

- none

##### Post Conditions

- none

##### Limitations

- Only performs reads on digital pins.

##### Code Reference

[!code-csharp[](../../../src/Demo/Demo_CSRA/Functional/Read.cs?name=Baseline)]
