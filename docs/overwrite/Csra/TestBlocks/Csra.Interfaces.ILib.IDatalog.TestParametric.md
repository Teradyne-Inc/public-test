<!-- public void TestParametric* -->
---
uid: Csra.Interfaces.ILib.IDatalog.TestParametric*
custom_overview: *content
---

<!-- Platform agnostic -->
Uses test number, test name, limits, units and similar information as defined in the test program. Writes a Parametric Test Record (PTR) into STDF if enabled. Performs a limit comparison and applies the according binning to sites.

<!-- Platform specific -->
##### Platform Specifics

Assumes the use of limits in the flow or limit sets. Uses `TheExec.Flow.TestLimit()` on UltraFLEXplus and UltraFLEX. 

<!-- public void TestParametric(PinSite<double> result, double forceValue = 0, string forceUnit = "") -->

---
uid: Csra.Interfaces.ILib.IDatalog.TestParametric(Teradyne.Igxl.Interfaces.Public.PinSite{System.Double},System.Double,System.String)
custom_examples: *content
---

This code performs a `PinSite<double>` measurement on a DC instrument and datalogs the result.

[!code-csharp[](../../../../src/UT/V1_UT/TheLib_UT/Datalog_UT/TestParametric_Snippet.cs?name=snippet-01)]

<!-- public void TestParametric(PinSite<int> result, double forceValue = 0, string forceUnit = "") -->

---
uid: Csra.Interfaces.ILib.IDatalog.TestParametric(Teradyne.Igxl.Interfaces.Public.PinSite{System.Int32},System.Double,System.String)
custom_examples: *content
---

This code performs a `PinSite<int>` measurement on a DC instrument and datalogs the result.
