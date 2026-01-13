# SetupService: Utility Features

## Level 1 Nodes

### `TheHdw.Utility` Features

| Node | Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `EnableUtilityBitsReset` | `bool` | `{ get; set; }`| boolean flag | :question: |
| `Reset` | `void` | `Method`| () | :question: |
| `Threshold` | `double` | `{ get; set; }`| double | :question: |
| `Pins` | `tlDriverUtilityPins` | `Method`| sub-node | :mechanic: |

## Level 2 Nodes

### `TheHdw.Utility.Pins` Features

| Node| Type | Access | Implementation | MS status |
| --- | --- | --- | --- | --- |
| `State` | `tlUtilBitState` | `{ set; }` | enum | :heavy_check_mark: |
| `States` | `IPinListData` | `Method` | enum | :question: |

