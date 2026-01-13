# Csra

## Adc

- Ramp
    - Baseline
- Histogram
    - Baseline
- Dynamic
    - Baseline

## Characterization

## Continuity

- Parametric
    - ✅ `Parallel(string pinList, double current, double clampVoltage, double voltageRange, double waitTime, string config = "")`
    - ❌ Serial
- Functional
    - ❌ Baseline
- Supply
    - ✅ `Baseline(string pinList, double forceVoltage, double currentRange, double waitTime, string config = "")`
- Kelvin
    - ❌ Baseline

## Dac

- Ramp
    - ❌ Baseline
- Histogram
    - ❌ Baseline
- Dynamic
    - ❌ Baseline

## Functional

- Pattern
    - ✅ `Baseline(string pattern, string config = "")`
- Read
    - ✅ `Baseline(string pattern, string readPins, int startIndex, int bitLength, int wordLength, bool msbFirst, bool testFunctional, bool testValues, string config = "")`
- Scan

## Leakage

- Parallel
    - ✅ `Baseline(string pinList, double voltage, double currentRange, double waitTime, string config = "")`
    - ✅ `Preconditioning(string pattern, string measurePins, double voltage, double currentRange, double waitTime, string configAction = "")`

## Memory

- Mbist
    - ❌ Baseline
    - ❌ Stress
- Repair
    - ❌ Baseline
- Retention
    - ❌ Baseline

## OneTimeProgramming

## Parametric

- SingleCondition
    - ❌ Baseline
    - ❌ PreconditionPattern
    - ❌ PatternHandshake
- MultiCondition
    - ❌ Baseline
    - ❌ PreconditionPattern
    - ❌ PatternHandshake

## Resistance

- Contact
    - ✅ `OnePinDeltaForceDeltaMeasure(string forcePin, string forceMode, double forceFirstValue, double forceSecondValue, double clampValueOfForcePin, double measureFirstRange, double measureSecondRange, double waitTime = 0.0, string config = "")`
- RdsOn
    - ✅ `OnePinOneForceMeasure(string forcePin, string forceMode, double forceValue, double measureRange, double waitTime = 0, string labelOfStoredVoltage = "", string config = "")`
    - ✅ `TwoPinsOneForceOneMeasure(string forcePin, string forceMode, double forceValue, double clampValueOfForcePin, string measurePin, double measureRange, double waitTime = 0, string labelOfStoredVoltage = "", string config = "")`
    - ✅ `TwoPinsDeltaForceDeltaMeasure(string forcePin, string forceMode, double forceFirstValue, double forceSecondValue, double clampValueOfForcePin, string measurePin, double measureFirstRange, double measureSecondRange, double waitTime = 0, string config = "")`
    - ✅ `ThreePinsOneForceTwoMeasure(string forcePin, double forceCurrentPin, double clampValueOfForcePin, string measureFirstPin, double measureRangeFirstPin, string measureSecondPin, double measureRangeSecondPin, double waitTime = 0, string config = "")`
    - ✅ `FourPinsTwoForceTwoMeasure(string forceFirstPin, double forceValueFirstPin, double clampValueOfForceFirstPin, string forceSecondPin, double forceValueSecondPin, double clampValueOfForceSecondPin, string measureFirstPin, string measureSecondPin, double measureRangeFirstPin, double measureRangeSecondPin, double waitTime = 0, string config = "")`

## Rf

- Power
- Noise
- Imd
- Modulation

## Search

## SupplyCurrent

- Dynamic
    - ✅ `Baseline(string pinList, double forceValue, double measureRange, double clampValue, double waitTime, string pattern, int stops, string config = "")`
- Static
    - ✅ `Baseline(string pinList, double forceValue, double measureRange, double clampValue, double waitTime, string config = "")`

## Timing

- Jitter
- PropagationDelay
- Frequency
    - ❌ Baseline
- EdgeSearch
- RiseFallTime
- EdgeCount

## Trim