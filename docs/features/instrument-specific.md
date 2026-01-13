# Instrument Specific Features

The C# reference architecture introduces a unified conceptual model for managing data associated with one or multiple conditions applicable to pins and pin groups. This methodological approach facilitates a level of abstraction comparable to that found in single-condition scenarios, thereby contributing to process optimization and simplifying user interaction with the system. Eliminating friction and redundancies from the workflow is a key objective of this architecture, ensuring an efficient and intuitive framework for application development.

However, in practice, the need arises to implement specific settings for certain instruments, where configuration parameters can no longer be considered common values across all instances of the process. This diversity in technical requirements may lead to increased complexity in function structure and an overload of user calls. As a result, it is necessary to develop a solution that systematically and intelligibly manages these variables.

The proposed concept aims to address this challenge through a well-structured methodology that allows the definition and application of non-uniform configuration parameters in an intuitive and efficient manner. The implementation of a coherent mechanism for managing these variables contributes to error reduction, improved maintenance, and increased accessibility in the use of instruments integrated into the C# reference architecture. This approach not only optimizes technical processes but also strengthens the system’s flexibility and scalability, providing developers with a robust framework for managing data in variable conditions.

## The Concept of Implementation

The implementation of the concept requires a structured approach to ensure that parameterization is managed efficiently and in a scalable manner. This involves defining a dedicated class that contains all the necessary parameters for the process, ensuring a clear separation between configuration logic and test execution. In this paradigm, parameter invocation is performed via an instantiated object of the class, utilized during the validation phase of the test block.

This methodology offers several fundamental advantages. Firstly, it ensures data integrity and organization in a coherent manner, preventing uncontrolled access to internal settings and reducing the risk of errors during implementation. Secondly, the proposed solution facilitates the expansion and adaptability of the architecture, allowing the addition of new parameters without disrupting the existing structure. This aspect is essential for maintaining system flexibility, particularly in scenarios where configuration requirements evolve with the integration of new instruments.

Through this approach, the goal is to optimize user interaction with the system and reduce operational complexity, providing a robust framework for developing scalable solutions that can be easily integrated into the existing architecture. Thus, the implementation of the concept enhances the organization and management of parameters from the perspective of the future development of the technical infrastructure.

## User Interface

The analysis of settings and their applicability represents a fundamental element in optimizing the interaction between the user and the system. In this context, the table presented below serves to provide a clear correlation between the parameters existing in the user interface and the configurations applied at the instrument level, thus ensuring precise alignment with the initialization process of each variable.

A systematic approach to these settings not only enables efficient utilization of available resources but also standardizes how variables are manipulated and integrated into operational processes. By identifying the relationships between configuration parameters and their impact on the functioning of the instruments, a robust optimization methodology can be developed, thereby reducing error risks and enhancing system reliability.

Therefore, the structure of the presented table not only offers a concise description but also serves as a reference point for users in the configuration process, contributing to a clear and coherent experience.

### Table for Setup.Dc

| Property             | Type             | PPMU | DCVI | DCVS | Purpose                                                      | Observations |
|----------------------|-----------------|------|------|------|--------------------------------------------------------------|--------------|
| Gate                | bool             | ✓    | ✓    | ✓    | Sets the gate for the specified pins.                        |              |
| Mode                | TLibOutputMode   | ✓    | ✓    | ✓    | Sets the operating mode for the specified pins.              |              |
| Voltage             | double           | ✓    | ✓    | ✓    | Sets the output voltage for the specified pins.              |              |
| VoltageAlt          | double           |      |      | ✓    | Sets the alternate output voltage for the specified pins.    |              |
| Current             | double           | ✓    | ✓    | ✓    | Sets the output current for the specified pins.              | For DCVS, the 'current' option includes both source and sink for Foldlimit. |
| VoltageRange        | double           |      | ✓    | ✓    | Sets the voltage range for the specified pins.               |              |
| CurrentRange        | double           | ✓    | ✓    | ✓    | Sets the current range for the specified pins.               |              |
| ForceBandwidth      | double           |      | ✓    | ✓    | Sets the output compensation bandwidth for the specified pins. |              |
| MeterMode          | Measure          | ✓    | ✓    | ✓    | Sets the meter mode for the specified pins.                  |              |
| MeterVoltageRange   | double           |      | ✓    | ✓    | Sets the meter voltage range for the specified pins.         |              |
| MeterCurrentRange   | double           | ✓    | ✓    | ✓    | Sets the meter current range for the specified pins.         |              |
| MeterBandwidth      | double           |      | ✓    | ✓    | Sets the meter filter for the specified pins.                |              |
| SourceFoldLimit     | double           |      |      | ✓    | Sets the source fold limit for the specified pins.           |              |
| SinkFoldLimit       | double           |      |      | ✓    | Sets the sink fold limit for the specified pins.             |              |
| SourceOverloadLimit | double           |      |      | ✓    | Sets the source overload limit for the specified pins.       |              |
| SinkOverloadLimit   | double           |      |      | ✓    | Sets the sink overload limit for the specified pins.         |              |
| VoltageAltOutput    | bool             |      |      | ✓    | Sets the output DAC used to force voltage (true for alternate or false for main). |              |
| BleederResistor     | bool             |      | ✓    |      | Sets the bleeder resistor’s connection state for the specified pins. |              |
| ComplianceBoth      | double           |      | ✓    |      | Sets both compliance ranges for the specified pins.          |              |
| CompliancePositive  | double           |      | ✓    |      | Sets the positive compliance range for the specified pins.   | Both can be set through the variable 'ComplianceBoth'. |
| ComplianceNegative  | double           |      | ✓    |      | Sets the negative compliance range for the specified pins.   |              |
| ClampHiV           | double           | ✓    |      |      | Sets the high voltage clamp value for the specified pins.    |              |
| ClampLoV           | double           | ✓    |      |      | Sets the low voltage clamp value for the specified pins.     |              |
| HighAccuracy       | bool             | ✓    |      |      | Sets the enabled state of the high accuracy measure voltage. |              |
| SettlingTime       | double           | ✓    |      |      | Sets the required additional settling time for the high accuracy measure voltage mode. |              |
| HardwareAverage    | double           |      | ✓    |      | Sets the meter hardware average value for the specified pins. |              |

### Table for Setup.Digital

#### Table for Setup.Digital.ModifyPins()
| Property                | Type            | Support | Purpose                                                                   | Observations                              | API Endpoint                             |
| ----------------------- | --------------- | ------- | ------------------------------------------------------------------------- | ----------------------------------------- | ---------------------------------------- |
| AlarmType               | tlHSDMAlarm     | ✓       | Sets the alarm type for the specified pins.                               | Should be set together with AlarmBehavior | TheHdw.Digital.Pins(PinList)             |
| AlarmBehavior           | tlAlarmBehavior | ✓       | Sets the alarm behavior for the specified pins.                           | Should be set together with AlarmType     | TheHdw.Digital.Pins(PinList)             |
| DisableCompare          | bool            | ✓       | Disables the comparators for the specified pins                                                                      || TheHdw.Digital.Pins(PinList)             |
| DisableDrive            | bool            | ✓       | Disables the drivers for the specified pins                                                                          || TheHdw.Digital.Pins(PinList)             |
| InitState               | ChInitState     | ✓       | Sets the initial state of the pins                                                                                   || TheHdw.Digital.Pins(PinList)             |
| StartState              | ChStartState    | ✓       | Sets the start state of the pins                                                                                     || TheHdw.Digital.Pins(PinList)             |
| CalibrationExcluded     | bool            | ✓       | Sets the specified pins to be excluded from job dependent calibration                                                || TheHdw.Digital.Pins(PinList).Calibration |
| CalibrationHighAccuracy | bool            | ✓       | Enables or disables calibration high accuracy mode for the specified pins                                            || TheHdw.Digital.Pins(PinList).Calibration |

#### Table for Setup.Digital.ModifyPinsLevels()
| Property                     | Type                         | Support | Purpose                                                                                     | Observations                                             | API Endpoint                                    |
| ---------------------------- | ---------------------------- | ------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------- |
| DifferentialLevelsType       | ChDiffPinLevel               | ✓       | Sets the differential levels type for the specified pins                                    | Should be set together with DifferentialLevelsValue      | TheHdw.Digital.Pins(PinList).DifferentialLevels |
| DifferentialLevelsValue      | double                       | ✓       | Sets the specified differential pin level type for the specified pins                       | Should be set together with DifferentialLevelsType       | TheHdw.Digital.Pins(PinList).DifferentialLevels |
| DifferentialLevelsValuesType | **==TLibDiffLvlValType[]==** | ✓       | Sets the differential levels values type for the specified pins                             | Should be set together with DifferentialLevelsValues     | TheHdw.Digital.Pins(PinList).DifferentialLevels |
| DifferentialLevelsValues     | double[]                     | ✓       | Sets the specified differential pin levels values type for the specified pins               | Should be set together with DifferentialLevelsValuesType | TheHdw.Digital.Pins(PinList).DifferentialLevels |
| LevelsDriverMode             | tlDriverMode                 | ✓       | Sets the driver mode for the specified pins                                                                                                           || TheHdw.Digital.Pins(PinList).Levels             |
| LevelsType                   | ChPinLevel                   | ✓       | Sets the level type for the specified pins                                                                                                            || TheHdw.Digital.Pins(PinList).Levels             |
| LevelsValue                  | double                       | ✓       | Sets the value for the specified level type on the specified pins                           | Should be set together with LevelsType                   | TheHdw.Digital.Pins(PinList).Levels             |
| LevelsValuePerSite           | SiteDouble                   | ✓       | Sets the value for the specified level type for the specified pins on each site             | Should be set together with LevelsType                   | TheHdw.Digital.Pins(PinList).Levels             |
| LevelsValues                 | PinListData                  | ✓       | Sets the value for the specified level value for each specified site and each specified pin | Should be set together with LevelsType                   | TheHdw.Digital.Pins(PinList).Levels             |

#### Table for Setup.Digital.ModifyPinsTiming()
| Property                       | Type                 | Support | Purpose                                                                                                                                               | Observations                                                    | API Endpoint                                  |
| ------------------------------ | -------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------- |
| TimingClockOffset              | double               | ✓       | Sets the offset value between a DQS bus and a DUT clock in a DDR Protocol Aware test program for the specified pins                                                                                                    || TheHdw.Digital.Pins(PinList).Timing           |
| TimingClockPeriod              | double               | ✓       | Sets the current value for the period for the specified clock pins                                                                                                                                                     || TheHdw.Digital.Pins(PinList).Timing           |
| TimingDisableAllEdges          | bool                 | ✓       | Disables all edges (drive and compare) for the specified pins                                                                                                                                                          || TheHdw.Digital.Pins(PinList).Timing           |
| TimingEdgeSet                  | string               | ✓       | Sets the edgeset name for the specified pins                                                                                                                                                                           || TheHdw.Digital.Pins(PinList).Timing           |
| TimingEdgeVal                  | chEdge               | ✓       | Sets the timing edge for the specified pins                                                                                                                                                                            || TheHdw.Digital.Pins(PinList).Timing           |
| TimingEdgeEnabled              | bool                 | ✓       | Sets the enabled state for the specified pins and timing edge                                                                                         | Should be set together with TimingEdgeEdgeSet and TimingEdgeVal | TheHdw.Digital.Pins(PinList).Timing           |
| TimingEdgeTime                 | double               | ✓       | Sets the edge value for the specified pins and timing edge                                                                                            | Should be set together with TimingEdgeEdgeSet and TimingEdgeVal | TheHdw.Digital.Pins(PinList).Timing           |
| TimingRefOffset                | double               | ✓       | Sets the offset value between the specified source synchronous reference (clock) pin and its data pins                                                                                                                 || TheHdw.Digital.Pins(PinList).Timing           |
| TimingSetup1xDiagnosticCapture | string               | ✓       | Sets up special dual-bit diagnostic capture in CMEM fail capture (LFVM) memory using the 1X pin setup for the specified pins and Time Sets sheet name                                                                  || TheHdw.Digital.Pins(PinList).Timing           |
| TimingSrcSyncDataDelay         | double               | ✓       | Sets the strobe reference data delay for individual source synchronous data pins                                                                                                                                       || TheHdw.Digital.Pins(PinList).Timing           |
| TimingOffsetType               | tlOffsetType         | ✓       | Sets the timing offset type for the specified pins                                                                                                                                                                     || TheHdw.Digital.Pins(PinList).Timing           |
| TimingOffsetValue              | double               | ✓       | Sets the timing offset value for the specified pins                                                                                                   | Should be set together with TimingOffsetType                    | TheHdw.Digital.Pins(PinList).Timing           |
| TimingOffsetEnabled            | bool                 | ✓       | Sets the timing offset enabled state for the specified pins                                                                                           | Should be set together with TimingOffsetType                    | TheHdw.Digital.Pins(PinList).Timing           |
| TimingOffsetSelectedPerSite    | SiteLong             | ✓       | Sets the active offset index value for the specified pins on each site                                                                                | Should be set together with TimingOffsetType                    | TheHdw.Digital.Pins(PinList).Timing           |
| TimingOffsetValuePerSiteIndex  | int                  | ✓       | Set the timing offset index value. The valid index range is 0-7                                                                                       | Should be set together with TimingOffsetType and TimingOffsetValuePerSiteValue       | TheHdw.Digital.Pins(PinList).Timing           |
| TimingOffsetValuePerSiteValue  | SiteDouble           | ✓       | Sets the current value for the offset at a specific index location that is to be applied to the timing values for the specified pins on each site     | Should be set together with TimingOffsetType and TimingOffsetValuePerSiteIndex       | TheHdw.Digital.Pins(PinList).Timing           |
| AutoStrobeEnabled              | AutoStrobeEnableSel  | ✓       | Enable state of the AutoStrobe engine for the specified pins                                                                                                                                                           || TheHdw.Digital.Pins(PinList).AutoStrobe       |
| AutoStrobeNumSteps             | int                  | ✓       | Sets the number of steps on the AutoStrobe engines for the specified pins                                                                                                                                              || TheHdw.Digital.Pins(PinList).AutoStrobe       |
| AutoStrobeSamplesPerStep       | int                  | ✓       | Sets the number of samples per step on the AutoStrobe engines for the specified pins                                                                                                                                   || TheHdw.Digital.Pins(PinList).AutoStrobe       |
| AutoStrobeStartTime            | double               | ✓       | Sets the start time on the AutoStrobe engines for the specified pins                                                                                                                                                   || TheHdw.Digital.Pins(PinList).AutoStrobe       |
| AutoStrobeStepTime             | double               | ✓       | Sets the step time on the AutoStrobe engines for the specified pins                                                                                                                                                    || TheHdw.Digital.Pins(PinList).AutoStrobe       |
| FreeRunningClockEnabled        | bool                 | ✓       | Sets the enable state of the free-running clock for the specified pins                                                                                                                                                 || TheHdw.Digital.Pins(PinList).FreeRunningClock |
| FreeRunningClockFrequency      | double               | ✓       | Sets the frequency of the free-running clock for the specified pins                                                                                                                                                    || TheHdw.Digital.Pins(PinList).FreeRunningClock |
| FreqCtrEnable                  | FreqCtrEnableSel     | ✓       | Sets the frequency counter’s enable state for the specified pins                                                                                                                                                       || TheHdw.Digital.Pins(PinList).FreqCtr          |
| FreqCtrEventSlope              | FreqCtrEventSlopeSel | ✓       | Sets the frequency counter’s event slope for the specified pins                                                                                                                                                        || TheHdw.Digital.Pins(PinList).FreqCtr          |
| FreqCtrEventSource             | FreqCtrEventSrcSel   | ✓       | Sets the frequency counter’s event source for the specified pins                                                                                                                                                       || TheHdw.Digital.Pins(PinList).FreqCtr          |
| FreqCtrInterval                | double               | ✓       | Sets the duration of time to capture the frequency counter data for the specified pins                                                                                                                                 || TheHdw.Digital.Pins(PinList).FreqCtr          |


#### Not Offered for Setup.Digital.ModifyPins
Irrelevant commands are filtered out based on these criteria:
 - The API must be compatible with **UltraPin2200**.
 - The API must fit the "setup" definition (like read-only ones, which more like "acquire").
 - The API cannot be no return value actions like `.Start()`, `.Stop()`, `.Save()`, `.Restore()` and so on ("execution" commands).
 - The API commands' parameters are too complex, cannot support currently, like pattern data modify commands.

##### Table for not offered for Setup.Digital.ModifyPins
| Property                   | Observations                                                                                                | API Endpoint                                                       |
| -------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| ClearFail                  | Action command                                                                                              | TheHdw.Digital.Pins(PinList)                                       |
| Connect                    | Action command                                                                                              | TheHdw.Digital.Pins(PinList)                                       |
| Connected                  | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList)                                       |
| Disconnect                 | Action command                                                                                              | TheHdw.Digital.Pins(PinList)                                       |
| FailCount                  | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList)                                       |
| FailCountLimit             | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList)                                       |
| FailCountLimitReached      | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList)                                       |
| FailCountOnly              | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList)                                       |
| Failed                     | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList)                                       |
| FailedPerSiteArray         | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList)                                       |
| GetFailCountArray          | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList)                                       |
| LockState                  | used only on the UltraPin4000 and HPM                                                                       | TheHdw.Digital.Pins(PinList)                                       |
| put_FailCountLimit         | used only on the UltraPin4000 and HPM                                                                       | TheHdw.Digital.Pins(PinList)                                       |
| FindEdge                   | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).AutoStrobe                            |
| Exclude                    | "Avoid using this method when creating test programs using the UltraPin2200 on an UltraFLEXplus." -- MyInfo | TheHdw.Digital.Pins(PinList).Calibration                           |
| Trace                      | "Avoid using this method when creating test programs using the UltraPin2200 on an UltraFLEXplus." -- MyInfo | TheHdw.Digital.Pins(PinList).Calibration.DIB                       |
| Data                       | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).CMEM                                  |
| FailIndexList              | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).CMEM                                  |
| ModuleCycleData            | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).CMEM                                  |
| StoredCycleData            | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).CMEM                                  |
| StoredFailCount            | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).CMEM                                  |
| PeakingMode                | used only on the UltraPin4000 and HPM                                                                       | TheHdw.Digital.Pins(PinList).DifferentialLevels                    |
| Restore                    | Action command                                                                                              | TheHdw.Digital.Pins(PinList).DifferentialLevels                    |
| Save                       | Action command                                                                                              | TheHdw.Digital.Pins(PinList).DifferentialLevels                    |
| TerminationMode            | used only on the UltraPin4000 and HPM                                                                       | TheHdw.Digital.Pins(PinList).DifferentialLevels                    |
| IsRunning                  | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).FreeRunningClock                      |
| Start                      | Action command                                                                                              | TheHdw.Digital.Pins(PinList).FreeRunningClock                      |
| Stop                       | Action command                                                                                              | TheHdw.Digital.Pins(PinList).FreeRunningClock                      |
| Clear                      | Action command                                                                                              | TheHdw.Digital.Pins(PinList).FreqCtr                               |
| MeasureFrequency           | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).FreqCtr                               |
| Read                       | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).FreqCtr                               |
| SetupFreqCounter           | used only on the UltraPin1600                                                                               | TheHdw.Digital.Pins(PinList).FreqCtr                               |
| Start                      | Action command                                                                                              | TheHdw.Digital.Pins(PinList).FreqCtr                               |
| CapturedFailCycleInfo      | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).HRAM                                  |
| PatData                    | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).HRAM                                  |
| PinData                    | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).HRAM                                  |
| PinPF                      | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).HRAM                                  |
| ReadDataBits               | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).HRAM                                  |
| ReadDataWord               | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).HRAM                                  |
| Move                       | not used with the UltraPin1600 and UltraPin2200                                                             | TheHdw.Digital.Pins(PinList).Jitter                                |
| DifferentialModeEnabled    | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).Levels                                |
| PeakingMode                | used only on the UltraPin4000 and HPM                                                                       | TheHdw.Digital.Pins(PinList).Levels                                |
| Restore                    | Action command                                                                                              | TheHdw.Digital.Pins(PinList).Levels                                |
| Save                       | Action command                                                                                              | TheHdw.Digital.Pins(PinList).Levels                                |
| TerminationMode            | used only on the UltraPin4000 and HPM                                                                       | TheHdw.Digital.Pins(PinList).Levels                                |
| GetVectorData              | Too complex, not support currently                                                                          | TheHdw.Digital.Pins(PinList).Patterns(PatName)                     |
| GetVectorScanData          | Too complex, not support currently                                                                          | TheHdw.Digital.Pins(PinList).Patterns(PatName)                     |
| GetVectorState             | Too complex, not support currently                                                                          | TheHdw.Digital.Pins(PinList).Patterns(PatName)                     |
| ModifyVectorBlockData      | Too complex, not support currently                                                                          | TheHdw.Digital.Pins(PinList).Patterns(PatName)                     |
| ModifyVectorBlockDataNSite | Too complex, not support currently                                                                          | TheHdw.Digital.Pins(PinList).Patterns(PatName)                     |
| ModifyVectorData           | Too complex, not support currently                                                                          | TheHdw.Digital.Pins(PinList).Patterns(PatName)                     |
| ModifyVectorDataNSite      | Too complex, not support currently                                                                          | TheHdw.Digital.Pins(PinList).Patterns(PatName)                     |
| ModifyVectorScanData       | Too complex, not support currently                                                                          | TheHdw.Digital.Pins(PinList).Patterns(PatName)                     |
| ModifyVectorScanDataNSite  | Too complex, not support currently                                                                          | TheHdw.Digital.Pins(PinList).Patterns(PatName)                     |
| SetDataWords               | Too complex, not support currently                                                                          | TheHdw.Digital.Pins(PinList).Patterns(PatName)                     |
| SetDataWordsPerSite        | Too complex, not support currently                                                                          | TheHdw.Digital.Pins(PinList).Patterns(PatName)                     |
| SetVectorData              | Too complex, not support currently                                                                          | TheHdw.Digital.Pins(PinList).Patterns(PatName)                     |
| SetVectorScanData          | Too complex, not support currently                                                                          | TheHdw.Digital.Pins(PinList).Patterns(PatName)                     |
| SetVectorState             | Too complex, not support currently                                                                          | TheHdw.Digital.Pins(PinList).Patterns(PatName)                     |
| AllocateScanOffset         | Too complex, not support currently                                                                          | TheHdw.Digital.Pins(PinList).Patterns(PatName).NonContiguousModify |
| AllocateVectorOffset       | Too complex, not support currently                                                                          | TheHdw.Digital.Pins(PinList).Patterns(PatName).NonContiguousModify |
| Deallocate                 | Action command                                                                                              | TheHdw.Digital.Pins(PinList).Patterns(PatName).NonContiguousModify |
| IsAllocated                | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).Patterns(PatName).NonContiguousModify |
| ModifyScanData             | Too complex, not support currently                                                                          | TheHdw.Digital.Pins(PinList).Patterns(PatName).NonContiguousModify |
| ModifyVectorData           | Too complex, not support currently                                                                          | TheHdw.Digital.Pins(PinList).Patterns(PatName).NonContiguousModify |
| DataPins                   | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).SourceSync                            |
| PinType                    | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).SourceSync                            |
| ReferencePin               | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).SourceSync                            |
| EdgeSet                    | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).Timing                                |
| LateExpect                 | used only on the HPM                                                                                        | TheHdw.Digital.Pins(PinList).Timing                                |
| RestoreCMEMFailCaptureMap  | Action command                                                                                              | TheHdw.Digital.Pins(PinList).Timing                                |
| StrobeRefSetupName         | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).Timing                                |
| Amplitude                  | used only on the HPM                                                                                        | TheHdw.Digital.Pins(PinList).Timing.Jitter.Insertion               |
| Mode                       | used only on the HPM                                                                                        | TheHdw.Digital.Pins(PinList).Timing.Jitter.Insertion               |
| Period                     | used only on the HPM                                                                                        | TheHdw.Digital.Pins(PinList).Timing.Jitter.Insertion               |
| Max                        | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).Timing.Offset                         |
| Min                        | Read-only                                                                                                   | TheHdw.Digital.Pins(PinList).Timing.Offset                         |
| DefineSetup                | used only on the UltraPin4000 and HPM                                                                       | TheHdw.Digital.Pins.Tracker                                        |
| Offset                     | used only on the UltraPin4000 and HPM                                                                       | TheHdw.Digital.Pins.Tracker                                        |
| Reset                      | used only on the UltraPin4000 and HPM                                                                       | TheHdw.Digital.Pins.Tracker                                        |
| Status                     | used only on the UltraPin4000 and HPM                                                                       | TheHdw.Digital.Pins.Tracker                                        |
| Data                       | used only on the UltraPin4000 and HPM                                                                       | TheHdw.Digital.Pins(PinList).Tracker.History                       |
| MaxVal                     | used only on the UltraPin4000 and HPM                                                                       | TheHdw.Digital.Pins(PinList).Tracker.History                       |
| MinVal                     | used only on the UltraPin4000 and HPM                                                                       | TheHdw.Digital.Pins(PinList).Tracker.History                       |


From the user's perspective, the instantiation process is optimized to include only the necessary settings, thereby avoiding system overload with unnecessary parameters. This approach not only improves resource management but also facilitates a more intuitive interaction with the infrastructure. After instantiation, the parameter is transferred via the function, ensuring a clear and coherent organization of the process.

Example of the user interface

```cs
    private DcParameters _modifySettings;

    [TestMethod, Steppable, CustomValidation]
    public void Baseline(PinList pinList,..., double clampHi, double clampLo, double bandwidthSetting) {

        if (TheExec.Flow.IsValidating) {
            _modifySettings = new DcParameters() {
                ClampHiV = clampHi,
                ClampLoV = clampLo,
                ForceBandwidth = bandwidthSetting
            };
        }

        if (ShouldRunBody) {
            TheLib.Setup.Dc.Modify(_pins, _modifySettings);
        }
    }
```

```cs
    private DigitalParameters _digModifySettings;

    [TestMethod, Steppable, CustomValidation]
    public void Baseline(PinList pinList,..., bool disableDrive, ChInitState initState, ChStartState startState) {

        if (TheExec.Flow.IsValidating) {
            _digModifySettings = new DigitalParameters() {
                disableDrive = false,
                initState = ChInitState.Hi,
                startState = ChStartState.Hi
            };
        }

        if (ShouldRunBody) {
            TheLib.Setup.Digital.Modify(_pins, _digModifySettings);
        }
    }
```

## Implementation

In this context, parameter definition is carried out within a dedicated class that serves as a container for the settings required by each individual instrument. This approach enables a clear separation between data retrieval and configuration logic or test execution functionality, thereby contributing to an optimized process management.

In the context of calling method Modify, the code execution process involves verifying the specific setting associated with the instrument, thereby ensuring strict compliance with predefined configuration requirements. This verification serves as a control mechanism, determining whether the necessary parameter has been defined to allow its modification within the instrument's functionality.

```cs
    // Setup.Dc
    internal static void Modify(Pins pins, DcParameters parameters) {
        if (pins.ContainsFeature(InstrumentFeature.Ppmu, out string ppmuPins)) {
            ModifyPpmu(ppmuPins, parameters);
        }
        if (pins.ContainsFeature(InstrumentFeature.Dcvi, out string dcviPins)) {
            ModifyDcvi(dcviPins, parameters);
        }
        if (pins.ContainsFeature(InstrumentFeature.Dcvs, out string dcvsPins)) {
            ModifyDcvs(dcvsPins, parameters);
        }
    }

    private static void ModifyPpmu(string pins, DcParameters ppmuParameters) {
        if (ppmuParameters.ClampHiV.HasValue) ppmu.ClampVHi.Value = ppmuParameters.ClampHiV.Value;
        if (ppmuParameters.ClampLoV.HasValue) ppmu.ClampVLo.Value = ppmuParameters.ClampLoV.Value;
    }


    private static void ModifyDcvi(string pins, DcParameters dcviParameters) {
        if (dcviParameters.ForceBandwidth.HasValue) dcvi.NominalBandwidth.Value = dcviParameters.ForceBandwidth.Value;
    }

    private static void ModifyDcvs(string pins, DcParameters dcvsParameters) {
        if (dcvsParameters.ForceBandwidth.HasValue) dcvs.BandwidthSetting.Value = dcvsParameters.ForceBandwidth.Value;
    }
```

```cs
    // Setup.Digital
    internal static void Modify(Pins pins, DigitalParameters parameters) => TheLib.Setup.Digital.Modify(pins,..., 
        parameters.disableDrive, parameters.initState, parameters.startState);
    internal static void Modify(Pins pins,..., bool disableDrive, ChInitState initState, ChStartState startState) {
        if (pins.ContainsFeature(InstrumentFeature.Digital, out string digitalPins)) {
            if (initState.HasValue) TheHdw.Digital.Pins(digitalPins).InitialState = initState.Value;
            if (startState.HasValue) TheHdw.Digital.Pins(digitalPins).StartState = startState.Value;
        }
    }
```
