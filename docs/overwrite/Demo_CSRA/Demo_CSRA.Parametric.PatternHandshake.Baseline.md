---
uid: Demo_CSRA.Parametric.PatternHandshake.Baseline(Teradyne.Igxl.Interfaces.Public.Pattern,System.Int32,System.Int32,System.String,System.Boolean,System.String)
custom_details: *content
---

##### Test Technique

- to be added

##### Implementation

The **Validation** section instantiates the `pattern` object and converts the `stopAction` parameter into a delegate that can be called. In order for this
conversion to occur, there must be a function in the loaded dll's that is the same name as the `stopAction` parameter and has the prototype:
```cs
public static List<PinSite<double>> name(PatternInfo pattern, int stops);
```

The **PreBody** section applies levels and timing from the test instance context. Optionally, applies the specified `config`.

The **Body** section executes the RunPatternConditionalStop method and stores the results in values. The RunPatternConditionalStop method performs the following:
1.  Starts the `pattern`
2.  Waits for the cpu flag condition to occur defined by the `stopFlag` parameter
3.  Executes the `stopAction` delegate function, passing in the `pattern` and the current stop index.
4.  Adds the results returned from the `stopAction` delegate to its return value
5.  Continues to the next pattern stop by clearing the `stopFlag`
6.  Repeat steps 2-5 for each stop in the `pattern`

All cpu flags that are present in the pattern must be properly handled during the RunPatternConditionalStop method or the patgen will hit a timeout. It is 
possible to have different flag conditions for each stop. These can be updated by the `stopAction` delegate through the `pattern` SetFlag parameter.

The **PostBody** conditionally logs the functional test record and logs each parametric result returned by the `stopAction` delegate.

##### Platform Specifics

Supports stepping capability for PreBody/Body/PostBody.

##### Pre Conditions

- none

##### Post Conditions

- none

##### Limitations

- none

##### Code Reference

[!code-csharp[](../../../src/Demo/Demo_CSRA/Parametric/PatternHandshake.cs?name=Baseline)]
