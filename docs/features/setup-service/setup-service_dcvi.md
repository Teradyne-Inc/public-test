# SetupService: DCVI Features

The DCVI is a relatively complex instrument, with language nested in multiple levels.

## Level 1 Nodes

### `TheHdw.Dcvi` Features

| Node | Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `EnableLevelSequence` | `bool` | `{ get; set; }` | boolean flag | :question: |
| `HighVoltageComplianceRangeEnabled`| `bool` | `{ get; set; }` | boolean flag | :question: |
| `PatternRestartOptimizationEnabled`| `bool` | `{ get; set; }` | boolean flag | :question: |
| `Pins(string)`| `DriverDCVIPins` | `{ get; }` | sub-node | :mechanic: |

## Level 2 Nodes

### `TheHdw.Dcvi.Pins()` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `Alarm[tlDCVIAlarm]`| `IDCVIAlarmIndexer` | `{ get; set; }` | enum | :question: |
| `BleederResistor`| `DriverDCVIBleederResistor` | `{ get; }` | sub-node | :heavy_check_mark: |
| `ComplianceRange_Positive`| `IDiscreteValue`| `{ get; }` | :double: | :heavy_check_mark: |
| `ComplianceRange_Negative`| `IDiscreteValue`| `{ get; }` | :double: | :heavy_check_mark: |
| `Calibration`| `DriverDCVICalibration` | `{ get; }` | :question: | :question: |
| `Capture`| `DriverDCVICapture` | `{ get; }` | sub-node | :question: |
| `Connect(tlDCVIConnectWhat)`| `void` | `Method` | enum | :heavy_check_mark:  |
| `Connected`| `tlDCVIConnectWhat` | `{ get; }` | enum | :heavy_check_mark:  |
| `Current`| `IDoublePerSite` | `{ get; }` | IDoublePerSite | :heavy_check_mark:  |
| `CurrentRange`| `IDiscreteAutoValue` | `{ get; }` | IDiscreteAutoValue | :heavy_check_mark: |
| `ExternalModulationInput`| `bool` | `{ get; set; }` | bool | :question: |
| `FoldCurrentLimit`| `DriverDCVIFoldCurrentLimt` | `{ get; }` | sub-node | :heavy_check_mark: |
| `Gate`| `tlDCVIGate` | `{ get; set; }` | enum | :heavy_check_mark:  |
| `KelvinAlarm(tlDCVIKelvinAlarm)`| `DriverDCVIKelvinAlarm` | Method | :question: | :question: |
| `Meter`| `DriverDCVIMeter` | `{ get; } ` | sub-node | :question: |
| `Mode`| `tlDCVIMode` | `{ get; set; }` | enum | :heavy_check_mark:  |
| `NominalBandwidth`| `DriverDCVINominalBandWidth` | `{ get; }` | quantified float | :heavy_check_mark: |
| `PSets`| `DriverDCVIPSetCollection` | `{ get; }` | :question:  | :question: |
| `PulsedPower`| `DriverDCVIPulsedPower` | `{ get; }` | sub-node  | :lock: |
| `Reset`| `void` | `Method` | :question:  | :question: |
| `Snubber`| `DriverDCVISnubber` | `{ get; }` | :question:  | :question: |
| `SoftKelvin`| `DriverDCVISoftKelvin` | `{ get; }` | :question:  | :question: |
| `Source`| `DriverDCVISource` | `{ get; }` | sub-node | :question: |
| `SpikeCheck`| `DriverDCVISpikeCheck` | `{ get; }` | :question: | :question: |
| `Voltage`| `IDoublePerSite` | `{ get; }` | IDoublePerSite | :heavy_check_mark:  |
| `VoltageRange`| `IDiscreteAutoValue` | `{ get; }` | IDiscreteAutoValue | :heavy_check_mark: |

## Level 3 Nodes

### `TheHdw.Dcvi.Pins().BleederResistor` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `Mode`| `tlDCVIBleederResistor` | `{ get; set; }` | enum | :heavy_check_mark: |
| `CurrentLoad`| `double` | `{ get; set; }` | double | :heavy_check_mark: |

### `TheHdw.Dcvi.Pins().FoldCurrentLimit` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `Behavior`| `tlDCVIFolderCurrentLimitBehavior` | `{ get; set; }` | enum | :heavy_check_mark: |
| `Timeout`| `IContinuousValue` | `{ get; }` | `IContinuousValue` | :heavy_check_mark: |

### `TheHdw.Dcvi.Pins().PulsedPower` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `PulseVoltage`| `IContinuousValue` | `{ get; set; }` | double | :lock: |
| `PulseCurrent`| `IContinuousValue` | `{ get; set; }` | double | :lock: |
| `PulseDelay`| `IContinuousValue` | `{ get; set; }` | double | :lock: |
| `PulseDuration`| `IContinuousValue` | `{ get; set; }` | double | :lock: |

### `TheHdw.Dcvi.Pins().Capture` Features

### `TheHdw.Dcvi.Pins().Meter` Features

### `TheHdw.Dcvi.Pins().Source` Features
