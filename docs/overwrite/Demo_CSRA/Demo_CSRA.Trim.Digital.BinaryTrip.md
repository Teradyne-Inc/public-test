---
uid: Demo_CSRA.Trim.Digital.BinaryTrip(Teradyne.Igxl.Interfaces.Public.Pattern,System.Int32,System.Int32,System.Int32,System.Boolean,System.String)
custom_details: *content
---

##### Test Technique

- to be added

##### Implementation

The **PreBody** section applies levels and timing from the test instance context. Optionally, applies the specified `setup`.

The **Body** section performs a binary search on a hardcoded pattern (8 pins) file with 255 modules. Each pattern module simulates the DUT response, and the search continues until it finds input condition that make the test results to transition from fail to pass. If no such value is found, the function returns `-999` as a failure indicator.

The **PostBody** section logs a parametric datalog.

##### Platform Specifics

Supports stepping capability for PreBody/Body/PostBody.

##### Pre Conditions

- none

##### Post Conditions

- none

##### Limitations

- none

##### Code Reference

[!code-csharp[](../../../src/Demo/Demo_CSRA/Trim/Digital.cs?name=BinaryTrip)]
