# `PatternInfo` Class

The `PatternInfo` class is a record type that stores basic information about how to run a given pattern. `PatternInfo` instances are used as input to `TestLib.Execute.Digital`'s methods.

By default, patterns will not use threading unless the optional `threading` parameter in the constructor is set to true. If threading is set to true, validation may fail if the pattern is not setup properly for threading.

## Definition
```cs
public class PatternInfo {
    public string Name;
    public string TimeDomain
    public readonly bool ThreadingEnabled;
    PatternInfo(string patternName, bool threading) {...}
}
```


## Test Method Level
```cs
[TestClass]
public class PatternInfoPrototype : TestCodeBase {

    private PatternInfo _patternInfo;

    [TestMethod]
    public void TestMethod(string pattern) {
        _patternInfo = new(pattern, true);
        TestLib.Execute.Digital.RunPattern(_patternInfo);
        Site<bool> patResult = Acquire.Digital.PatternResults();
    }
}
```