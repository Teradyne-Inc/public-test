# SetupService: Digital (PinElectronics) Features

The PE is a relatively complex instrument, with language nested in multiple levels.

## Level 1 Nodes

### `TheHdw.Digital` Features

| Node | Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `Pins` | `DriverDigitalPins` | `Method` | sub-node | :heavy_check_mark: |

## Level 2 Nodes

### `TheHdw.Digital.Pins()` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `Connect`| `void` | `Method` | () | :heavy_check_mark: |
| `Connected`| `bool` | `{ get; }` | boolean flag | :heavy_check_mark: |
| `Disconnect`| `void` | `Method` | () | :heavy_check_mark: |
| `InitState`| `ChInitState` | `{ get; set; }` | enum | :heavy_check_mark: |
| `Levels`| `DriverDigPinsLevels` | `{ get; }` | sub-node | :heavy_check_mark: |
| `StartState`| `ChStartState` | `{ get; set; }` | enum | :heavy_check_mark: |

## Level 3 Nodes

### `TheHdw.Digital.Pins().Levels` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `DriverMode`| `tlDriverMode` | `{ get; set; }` | enum | :heavy_check_mark: |
| `Value` | `IDigitalPinsValueIndexer` | `{ get; set; }` | sub-node | :heavy_check_mark: |

## Level 4 Nodes

### `TheHdw.Digital.Pins().Levels.Value` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `Value_Vih` | `double` | `{ get; set; }` | double | :heavy_check_mark: |
| `Value_Vil` | `double` | `{ get; set; }` | double | :heavy_check_mark: |
| `Value_Vt` | `double` | `{ get; set; }` | double | :heavy_check_mark: |
| `Value_Vcl` | `double` | `{ get; set; }` | double | :heavy_check_mark: |
| `Value_Vch` | `double` | `{ get; set; }` | double | :heavy_check_mark: |
| `Value_Ioh` | `double` | `{ get; set; }` | double | :heavy_check_mark: |
| `Value_Iol` | `double` | `{ get; set; }` | double | :heavy_check_mark: |
| `Value_Voh` | `double` | `{ get; set; }` | double | :heavy_check_mark: |
| `Value_Vol` | `double` | `{ get; set; }` | double | :heavy_check_mark: |