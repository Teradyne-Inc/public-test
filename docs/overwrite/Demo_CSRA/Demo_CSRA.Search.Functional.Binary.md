---
uid: Demo_CSRA.Search.Functional.Binary(Teradyne.Igxl.Interfaces.Public.Pattern,Teradyne.Igxl.Interfaces.Public.PinList,System.Double,System.Double,System.Double,System.Boolean,System.Double,System.String)
custom_details: *content
---

##### Test Technique

- to be added

##### Implementation

The **PreBody** section applies levels and timing from the test instance context. Optionally, applies the specified `setup`. For the force pin, specified in `forcePins`, it disconnects any pin electronics and connects the DC path.

The **Body** section performs a binary search (via Vih for the Digital pin, voltage for DCVI/DCVS/PPMU pin) until it determines the device input condition for which the pattern passes. Finally, it returns the input value that produces a passing pattern result. If no such value is found, the function returns `-999` as a failure indicator.

The **PostBody** section restores the pin electronics connection for digital pins after gating off and disconnecting the dc path. Finally, logs a parametric datalog.

##### Platform Specifics

Supports stepping capability for PreBody/Body/PostBody.

##### Pre Conditions

- none

##### Post Conditions

- none

##### Limitations

Pin features supporting DCVI, DCVS, PPMU, and Digital, note that PPMU must be used in combination with either DCVI or DCVS to function.

##### Code Reference

[!code-csharp[](../../../src/Demo/Demo_CSRA/Search/Functional.cs?name=Binary)]
