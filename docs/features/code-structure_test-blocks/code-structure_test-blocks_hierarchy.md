# TheLib

## Acquire

- Dc
    - `public PinSite<double> Measure(Pins pins, Measure? meterMode = null)`
    - `public PinSite<double> Measure(Pins pins, int sampleSize, double? sampleRate = null, Measure? meterMode = null)`
    - `public PinSite<Samples<double>> MeasureSamples(Pins pins, int sampleSize, double? sampleRate = null, Measure? meterMode = null)`
    - `public PinSite<double> ReadCaptured(Pins pins, string signalName)`
    - `public PinSite<Samples<double>> ReadCapturedSamples(Pins pins, string signalName)`
    - `public PinSite<double> ReadMeasured(Pins pins, int sampleSize, double? sampleRate = null)`
    - `public PinSite<Samples<double>> ReadMeasuredSamples(Pins pins, int sampleSize, double? sampleRate = null)`
    - `public void Strobe(Pins pins)`
    - `public void StrobeSamples(Pins pins, int sampleSize, double? sampleRate = null)`
- Digital
    - `public Site<bool> PatternResults()`
    - `public PinSite<Samples<int>> Read(Pins pins, int startIndex = 0, int cycle = 0)`
    - `public PinSite<Samples<int>> ReadWords(Pins pins, int startIndex, int length, int wordSize, tlBitOrder bitOrder)`

## Datalog

- `public void TestParametric(Site<int> result, double forceValue = 0, string forceUnit = "")`
- `public void TestParametric(Site<double> result, double forceValue = 0, string forceUnit = "")`
- `public void TestParametric(PinSite<int> result, double forceValue = 0, string forceUnit = "")`
- `public void TestParametric(PinSite<double> result, double forceValue = 0, string forceUnit = "")`
- `public void TestParametric(Site<Samples<int>> result, double forceValue = 0, string forceUnit = "", bool sameLimitForAllSamples = false)`
- `public void TestParametric(Site<Samples<double>> result, double forceValue = 0, string forceUnit = "", bool sameLimitForAllSamples = false)`
- `public void TestParametric(PinSite<Samples<int>> result, double forceValue = 0, string forceUnit = "", bool sameLimitForAllSamples = false)`
- `public void TestParametric(PinSite<Samples<double>> result, double forceValue = 0, string forceUnit = "", bool sameLimitForAllSamples = false)`
- `public void TestFunctional(Site<bool> result, string pattern = "")`

## Execute

- Dc
    - `public PinSite<double> CalcResistance(PinSite<double> voltage, PinSite<double> current)`
    - `public PinSite<double> CalcResistance(PinSite<double> voltage, PinSite<double> current, PinSite<double> voltage2)`
    - `public PinSite<double> CalcResistance(PinSite<double> voltage1, PinSite<double> current1, PinSite<double> voltage2, PinSite<double> current2)`
- Digital
    - `public void StartPattern(PatternInfo patternInfo)`
    - `public void StartPattern(SiteVariant sitePatterns)`
    - `public void RunPattern(PatternInfo patternInfo)`
    - `public void RunPattern(SiteVariant sitePatterns)`
    - `public void WaitPatternDone(PatternInfo patternInfo)`
    - `public void ForcePatternHalt(PatternInfo patternInfo)`
    - `public void ForcePatternHalt()`
    - `public List<PinSite<double>> RunPatternConditionalStop(PatternInfo pattern, int numberOfStops, Func<PatternInfo, int, List<PinSite<double>>> func)`
    - `public void ContinueToConditionalStop(PatternInfo pattern, Action action)`
- `public void Wait(double time, bool staticWait = false, double timeout = 100 * ms)`
- `public void CallByName(string name, string args)`

## Setup

- Ac
    - `public void Connect(string pins)`
    - `public void Disconnect(string pins)`
- Dc
    - `public void ConnectAllPins()`
    - `public void Connect(Pins pins, bool? gateOn = null)`
    - `public void Disconnect(Pins pins, bool? gateOn = null)`
    - `public void Force(string pins, TLibOutputMode mode, double forceValue, double forceRange, double clampValue)`
    - `public void ForceI(Pins pins, double forceCurrent, double? clampVoltage = null)`
    - `public void ForceI(Pins pins, double forceCurrent, double clampVoltage, double currentRange, TLibOutputMode? outputMode = null, double? voltageRange = null)`
    - `public void ForceV(Pins pins, double forceVoltage)`
    - `public void ForceV(Pins pins, double forceVoltage, double voltageRange, double currentRange)`
    - `public void ForceV(Pins pins, double forceVoltage, double voltageRange, double currentRange, double? currentClamp = null, TLibOutputMode? outputMode = null)`
    - `public void ForceHiZ(Pins pins, double? clampValue = null)`
    - `public void SetMeter(Pins pins, Measure meterMode, double rangeValue, double? filterValue = null, double? hardwareAverage = null, double? outputRangeValue = null)`
- Digital
    - `public void Connect(Pins pins)`
    - `public void Disconnect(Pins pins)`
    - `public void ReadAll()`
    - `public void ReadFails()`
    - `public void ReadStoredVectors()`
    - `public void ReadHram(int captureLimit, CaptType captureType, TrigType triggerType, bool waitForEvent, int preTriggerCycleCount)`
- Rf
    - `public void Connect(string pins)`
    - `public void Disconnect(string pins)`
- `public void ApplyLevelsTiming()`

## Validation

- `public Func<PatternInfo, int, List<PinSite<double>>> SetStopAction(string name)`

