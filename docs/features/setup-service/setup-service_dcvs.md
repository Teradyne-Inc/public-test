# SetupService: DCVS Features

The DCVS is a relatively complex instrument, with language nested in multiple levels.

## Level 1 Nodes

### `TheHdw.Dcvs` Features

| Node | Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `EnableUndefinedPSetsCheckInPattern` | `bool` | `{ get; set; }` | boolean flag | :question: |
| `Pins` | `DriverDCVSPins` | { get; } | sub-node | :mechanic: |

## Level 2 Nodes

### `TheHdw.Dcvs.Pins()` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `BandwidthSetting`| `IDiscreteValue` | `{ get; }` | IDiscreteValue (quantified) | :question: |
| `BleederResistor`| `tlDCVSOnOffAuto` | `{ get; set; }` | enum | :heavy_check_mark: |
| `Capture`| `DriverDCVSCapture` | `{ get; }` | sub-node | :question: |
| `Connect` | `void` | `Method` | enum | :heavy_check_mark: |
| `Connected` | `tlDCVSConnectWhat` | `{ get; }` | enum | :heavy_check_mark: |
| `CurrentLimit` | `DriverDCVSCurrentLimit` | `{ get; }` | sub-node | :mechanic: |
| `CurrentRange` | `IDiscreteValue` | `{ get; }` | IDiscreteValue (quantified) | :heavy_check_mark: |
| `Disconnect` | `void` | `Method` | enum | :heavy_check_mark: |
| `Gate` | `bool` | ` { get; set; }` | bool | :heavy_check_mark: |
| `get_KelvinAlarm(tlDCVSWhat)` | `DriverDCVSKelvinAlarm` | Method | :question: | :question: |
| `Meter` | `DriverDCVSMeter` | `{ get; }` | sub-node | :question: |
| `Mode` | `tlDCVSMode` | `{ get; set; }` | enum | :heavy_check_mark: |
| `PSets` | `DriverDCVSPSetCollection` | `{ get; }` | :question:  | :question: |
| `Reset` | `void` | `Method` | enum | :question: |
| `Source` | `DriverDCVSSource` | `{ get; }` | sub-node | :question: |
| `SpikeCheck` | `DriverDCVSSpikeCheck` | `{ get; }` | :question:  | :question: |
| `Voltage` | `DriverDCVSVoltage` | `{ get; }` | ? | :heavy_check_mark: |
| `VoltageRange` | `IDiscreteAutoValue` | `{ get; }` | IDiscreteAutoValue (quantified) | :heavy_check_mark: |

## Level 3 Nodes

### `TheHdw.Dcvs.Pins().Capture` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `SampleRate`| `IContinuousValue` | `{ get; }` | IContinousValue | :question: |
| `SampleSize`| `IContinuousValue` | `{ get; }` | IContinousValue | :question: |

### `TheHdw.Dcvs.Pins().CurrentLimit` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `Sink`| `DriverDCVSCurrentLimitSink` | `{ get; }` | sub-node | :question: |
| `Source`| `DriverDCVSCurrentLimitSource` | `{ get; }` | sub-node | :mechanic: |

### `TheHdw.Dcvs.Pins().Meter` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `CurrentRange`| `IDiscreteValue` | `{ get; }` | IDiscreteValue | :question: |
| `Filter`| `IDiscreteFilterValue` | `{ get; }` | IDiscreteFilterValue | :question: |
| `Mode`| `tlDCVSMeterMode` | `{ get; set; }` | enum | :question: |

### `TheHdw.Dcvs.Pins().PSets` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `xxx`| `xxx` | `xxx` | :question:  | :question: |

### `TheHdw.Dcvs.Pins().Source` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `SampleRate`| `IContinousValue` | `{ get; }` | IContinousValue | :question: |

## Level 4 Nodes

### `TheHdw.Dcvs.Pins().CurrentLimit.Sink` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `FoldLimit`| `DriverDCVSCurrentLimitSinkFold` | `{ get; }` | sub-node | :question: |
| `OverloadLimit`| `DriverDCVSCurrentLimitSinkOverload` | `{ get; }` | sub-node | :question: |
| `SetLimitLevels`| `void` | `Method` | double | :question: |
| `SetLimitTimeouts`| `void` | `Method` | double | :question: |

### `TheHdw.Dcvs.Pins().CurrentLimit.Source` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `FoldLimit`| `DriverDCVSCurrentLimitSourceFold` | `{ get; }` | sub-node | :mechanic: |
| `OverloadLimit`| `DriverDCVSCurrentLimitSourceOverload` | `{ get; }` | sub-node | :mechanic: |
| `SetLimitLevels`| `void` | `Method` | double | :question: |
| `SetLimitTimeouts`| `void` | `Method` | double | :question: |

## Level 5 Nodes

### `TheHdw.Dcvs.Pins().CurrentLimit.Source.FoldLimit` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `Behavior`| `tlDCVSCurrentLimitBehavior` | `{ get; set; }` | enum | :question: |
| `Level`| `IContinousValuePerSite` | `{ get; }` | IContinousValuePerSite | :heavy_check_mark: |
| `Timeout`| `IContinousValue` | `{ get; }` | IContinousValue | :question: |

### `TheHdw.Dcvs.Pins().CurrentLimit.Source.OverloadLimit` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `Behavior`| `tlDCVSCurrentLimitBehavior` | `{ get; set; }` | enum | :question: |
| `Level`| `IContinousValuePerSite` | `{ get; }` | IContinousValuePerSite | :heavy_check_mark: |
| `Timeout`| `IContinousValue` | `{ get; }` | IContinousValue | :question: |

### `TheHdw.Dcvs.Pins().CurrentLimit.Sink.FoldLimit` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `Behavior`| `tlDCVSCurrentLimitBehavior` | `{ get; set; }` | enum | :question: |
| `Level`| `IContinousValuePerSite` | `{ get; }` | IContinousValuePerSite | :heavy_check_mark: |
| `Timeout`| `IContinousValue` | `{ get; }` | IContinousValue | :question: |

### `TheHdw.Dcvs.Pins().CurrentLimit.Sink.OverloadLimit` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `Behavior`| `tlDCVSCurrentLimitBehavior` | `{ get; set; }` | enum | :question: |
| `Level`| `IContinousValuePerSite` | `{ get; }` | IContinousValuePerSite | :heavy_check_mark: |
| `Timeout`| `IContinousValue` | `{ get; }` | IContinousValue | :question: |