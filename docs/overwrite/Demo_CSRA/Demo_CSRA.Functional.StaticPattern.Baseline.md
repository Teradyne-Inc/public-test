---
uid: Demo_CSRA.Functional.StaticPattern.Baseline(Teradyne.Igxl.Interfaces.Public.Pattern,System.Boolean,System.String)
custom_details: *content
---

##### Test Technique

- to be added

##### Implementation

The **Validation** section creates the `pattern` object.

The **PreBody** section applies levels and timing from the test instance context. Optionally, applies the specified `config`.

The **Body** section executes the `pattern` and retrieves the results.

The **PostBody** optionally logs a functional test record.

##### Platform Specifics

Supports stepping capability for PreBody/Body/PostBody.

##### Pre Conditions

- none

##### Post Conditions

- none

##### Limitations

- none

##### Code Reference

[!code-csharp[](../../../src/Demo/Demo_CSRA/Functional/StaticPattern.cs?name=Baseline)]
