# SetupService: Setting Types

To fulfill the requirements for the **SetupService**, each data type is implemented as a specifically typed `Setting<T>`.

The table below lists all types needed for the implementation of DCVI, DCVS, PPMU, Digital and Utility as currently defined (commit #5164760dff54efec76ef2cfc2823a08b9177ea04).

## Base Types

| Type | ImplementationName | MS status |
| --- | --- | --- |
| `double` | `SettingDouble` | :heavy_check_mark: |
| `int` | `SettingInt` | :heavy_check_mark: |
| `bool` | `SettingBool` | :heavy_check_mark: |
| `enum` | Table Enums | :heavy_check_mark: |

## Enums
| EnumType | ImplementationName | MS status |
| --- | --- | --- |
| `tlUtilityBitState` | `SettingUtilityBitState` | :heavy_check_mark: |
| `tlOnOff` | `SettingOnOff` | :heavy_check_mark: |
| `ChInitState` | `SettingChInitState` | :heavy_check_mark: |
| `ChStartState` | `SettingChStartState` | :heavy_check_mark: |
| `tlDriverMode` | `SettingDriverMode` | :heavy_check_mark: |
| `tlPPMUMode` | `SettingPPMUMode` | :heavy_check_mark: |
| `tlDCVIConnectWhat` | `SettingDCVIConnectWhat` | :heavy_check_mark: |
| `tlDCVGate` | `SettingDCVGate` | :heavy_check_mark: |
| `tlDCVIMode` | `SettingDCVIMode` | :heavy_check_mark: |
| `tlDCVIBleederResistor` | `SettingDCVIBleederResistor` | :heavy_check_mark: |
| `tlDCVIFoldCurrentLimitBehavior` | `SettingDCVIFoldCurrentLimitBehavior` | :heavy_check_mark: |
| `tlDCVSOnOffAuto` | `SettingDCVSOnOffAuto` | :heavy_check_mark: |
| `tlDCVSConnectWhat` | `SettingDCVSConnectWhat` | :heavy_check_mark: |
| `tlDCVSMode` | `SettingDCVSMode` | :heavy_check_mark: |
| `tlDCVSMeterMode` | `SettingDCVSMeterMode` | :heavy_check_mark: |
| `tlDCVSCurrentLimitBehavior` | `SettingDCVSCurrentLimitBehavior` | :heavy_check_mark: |


