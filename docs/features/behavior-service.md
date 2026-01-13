# Behavior Service

Test programs often reflect a wide range of expectations, habits, and preferences — varying not only between teams, but sometimes even between individuals. What feels "right" for one group might be suboptimal or even undesirable for another. There isn’t always a single "correct" or "preferred" way — sometimes, the only solution is to support multiple flavors.

Such behaviors typically have a global scope: they remain consistent throughout the lifetime of a test program. They should be configurable from the outside, without requiring changes to source code — both to protect against unintended side effects and to comply with qualification and auditing standards. Think of a behavior selection as a kind of "Run Mode Option" or "User Preference" — chosen once, respected throughout, and changed only when explicitly stated.

[A list of all implemented **BehaviorService** features can be found here.](behavior-service/behavior-service_features.md)

## IG-XL Options

IG-XL does not natively provide a single, central & common behavior chooser model. Settings - even system-wide - are distributed in multiple different places:

- language APIs (`PinListData.GlobalSort`, ...)
- assembly attributes (`[assembly: RunDspGenerateLegacy]`, ...)
- turd files (`*.dlex`, ...)
- RunOptions (DoAll, ...)
- IG-XL Settings (Waveform Display defaults, ...)
- Oasis (Offline Response Engine, ...)
- EnableWords (for custom, runtime only settings)
- ...

None of these options provide a satisfying model for C#RA specific behavior selection, as they are either not user-extensible or sufficiently capable for the requirements.

## Use Cases

As the C#RA and it's user base grows, requests for alternative use models are voiced. To date, the following have been captured:

- Parametric Datalogging: use offline readings from drivers vs. send always passing (halfway between limits) values
- FlowLimits vs. LimitSets
- PortBridge vs. no PortBridge
- the use of PatternTags
- AuditMode for SetupService
- Profiling data collection
- Telemetry data collection

It is expected that the BehaviorService can help in all of these cases. In some areas however, additional functionality may be required, specifically when there's design-time dependencies that need to be respected, like the conditional referencing for external libraries like PortBridge.

## Use model

As all the other Services in C#RA BehaviorService is centrally available for all test code to interact with stored information. To facilitate Behavior selection the service allows specific **values** to be stored, updated and retrieved for arbitrary **features**. These features can be considered the keys in a dictionary, which supports a strictly typed use model for an exclusive (but extensible) list of data types.

### Coupling / Dependencies & Defaults

The proposed use model limits coupling to a minimum and avoids dependencies by using string based keys for the features. 

```cs
Services.Behavior.SetFeature("MaxRetries", 5);
Services.Behavior.SetFeature("Timeout", 30.0);
Services.Behavior.SetFeature("EnableLogging", true);
Services.Behavior.SetFeature("ApiEndpoint", "https://api.example.com");
```

> [!Note]
> Using the `.SetFeature()` method will add that feature entry if it didn't exist, or overwrite the previously stored value. To find out if a certain feature has already been defined, use the `IEnumerable Features` property, which allows to access the entire collection of keys with LINQ methods like `.Contains()`, `.Count()` and more.

All clients of the BehaviorService must implement the concept of a preferred default, which is used if a feature is not defined. The service will in that case return the default for the data type, which must be correctly handled.

```cs
Console.WriteLine($"max retries: {Services.Behavior.GetFeature<int>("MaxRetries")}");
Console.WriteLine($"hallway lights on: {Services.Behavior.GetFeature<bool>("HallwayLightsOn")}");

// max retries: 5
// hallway lights on: False
```

### Data Types

The following data types are supported. Extension is possible but the list is on purpose limited to an exclusive set for robustness and a simple use model:

- `int`
- `double`
- `bool`
- `string`

The BehaviorService is strictly typed, and will retain the original data type for storage and retrieval. Attempts to store a non-supported type, or to read back into a different type than what was used for storage will result in an exception.

### File Export / Import

For test program external definitions, the BehaviorService supports file import and export capability using the following syntax:

- one line per **feature**, format `<feature>|<type>|<value>`
- **feature** names can be arbitrary strings, including white space, but not the character `|`
- **type** is the system type name (not the language type)
- **value** can be any content, including empty or `|` characters, but obviously no line breaks
- **value** is parsed to the target type, an exception is thrown in case that fails
- string **values** can't be `null` and are trimmed on storage and retrieval

```
MaxRetries|Int32|5
Timeout|Double|30
EnableLogging|Boolean|True
ApiEndpoint|String|https://api.example.com
```

File import works incremental, thus only overwrites (sets) the features found. To make sure previous definitions are cleared, use the `.Reset()` method.

```cs
Services.Behavior.FilePath = "c:\\temp\\behavior.txt";
Services.Behavior.Export();
Services.Behavior.Reset();
Services.Behavior.Import();
```

### Feature Naming & Scoping

Although this can't be enforced by the SetupService, it's strongly recommended to use a wise naming scheme for the features. With a global scope, special attention should be given to avoid ambiguity or context issues for users. Features named `TimeOut` or `Logging` are very likely too generic and not indicative enough for users what specific behavior is actually controlled (namespace pollution).

To avoid that, a dot notation hierarchy is proposed, with the domain at the beginning and more specifics separated with `.` characters:

- `ParametricDatalog.Limits`: `FlowLimits` / `LimitSets` ( type `string`)
- `ParametricDatalog.OfflinePassValues`: `false` / `true` (type `bool`)
- `Services.Setup.AuditMode`: `false` / `true` (type `bool`)

## Alternatives Considered

### Standard File Format

The use of XML or JSON file formats was considered for the import / export capability. However, these don't (natively) support generics with type information, so that data readback can be done in a specifically typed way. Instead, everything would be `object` or `string`. Attempting to determine the type from the data would be ambiguous for like `3` which would be interpreted as `string`, `int` or `double`. Specifying the type could be done in JSON or XML, but would then require custom parsers, neglecting the benefits of a standard file format.

### Support Custom Defaults for the Features

A generic **BehaviorService** can't both be independent from the client's use cases AND support feature specific defaults at the same time. The avoidance of close coupling is considered critical given how C#RA is planned to extend into areas like RF, optional library extensions (PortBridge), SSN, ...

The defaults are identical to the type's default. Changing that globally, for instance to support the case of pattern threading from `false` to `true` might address the desire for one, but cause headaches for others. Carefully estimating, 50% of the users would be unhappy regardless ...

There are two ways to solve this, probably more after careful consideration. Specifically in this example - the idea is generic - the following could be done:

- invert the logic - call the behavior feature `SharedPatgen`
- use the `string` type with speaking titles for either option and freely define how `"" `is interpreted