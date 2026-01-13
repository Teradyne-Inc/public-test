# SetupService: PPMU Features

The PPMU is a moderately complex instrument, with language nested in multiple levels.

## Level 1 Nodes

### `TheHdw.PPMU` Features

| Node | Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `AllowPPMUFuncRelayConnection` | `void` | `Method`| bool | :question: |
| `HighAccuracyMeasureVoltage` | `DriverPPMUHighAccuracyMeasureVoltage` | `{ get; }` | sub-node | :question: |
| `MinimizeTransitionEnergy` | `bool` | `{ get; set; }` | boolean flag | :question: |
| `Pins` | `tlDriverPPMUPins` | `Method` | sub-node | :mechanic: |
| `SetClampsVHi` | `void` | `Method` | double | :question: |
| `SetClampsVLo` | `void` | `Method` | double | :question: |
| `UseFlowLimits` | `bool` | `{ get; set; }` | boolean flag | :question: |

## Level 2 Nodes

### `TheHdw.PPMU.HighAccuracyMeasureVoltage` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `Enabled`| `bool` | `{ get; set; }` | boolean flag | :question: |
| `SettlingTime`| `double` | `{ get; set; }` | double | :question: |

### `TheHdw.PPMU.Pins()` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `ClampVHi`| `IContinuousValue` | `{ get; }` | IContinuousValue | :question: |
| `ClampVLo`| `IContinuousValue` | `{ get; }` | IContinuousValue | :question: |
| `Connect`| `void` | `Method` | boolean flag | :heavy_check_mark:  |
| `Current`| `IPPMUCurrentContinuousValue` | `{ get; }` | IContinuousValue | :question: |
| `Disconnect`| `void` | `Method` | () | :heavy_check_mark: |
| `ForceCurrentRange`| `IPPMUForceCurrentRangeDiscreteAutoValue` | `{ get; }` | IDiscreteAutoValue | :question: |
| `ForceI`| `void` | `Method` | (params) | :question: |
| `ForceV`| `void` | `Method` | (params) | :question: |
| `ForceVMeasureV`| `void` | `Method` | (params) | :question: |
| `Gate`| `tlOnOff` | `{ get; set; }` | enum | :heavy_check_mark:  |
| `IsConnected`| `bool` | `{ get; }` | boolean flag | :heavy_check_mark: |
| `MeasureCurrentRange`| `PPMUMeasureCurrentRangeDiscreteAutoValue` | `{ get; }` | IDiscreteAutoValue | :question: |
| `Mode`| `tlPPMUMode` | `{ get; }` | enum | :question: |
| `Voltage`| `IPPMUVoltageContinuousValue` | `{ get; }` | IContinuousValue | :question: |
