---
uid: Demo_CSRA.Trim.Digital.LinearFullTarget(Teradyne.Igxl.Interfaces.Public.Pattern,Teradyne.Igxl.Interfaces.Public.PinList,System.Int32,System.Int32,System.Int32,System.Int32,System.String)
custom_details: *content
---

##### Test Technique

- to be added

##### Implementation

The **PreBody** section applies levels and timing from the test instance context. Optionally, applies the specified `setup`.

The **Body** section performs a full linear search with target value on a hardcoded pattern (single pin) file with 255 modules. Each pattern module simulates the DUT response, and once the search is completed, it finds HRAM capture data that closest to the target. If no such value is found, the function returns `-999` as a failure indicator.

The **PostBody** section restores the HRAM setup, and logs a parametric datalog.

##### Platform Specifics

Supports stepping capability for PreBody/Body/PostBody.

##### Pre Conditions

- none

##### Post Conditions

- none

##### Limitations

- none

##### Code Reference

[!code-csharp[](../../../src/Demo/Demo_CSRA/Trim/Digital.cs?name=LinearFullTarget)]
