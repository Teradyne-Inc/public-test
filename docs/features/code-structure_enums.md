# Code Structure - Enums

Enums are value types assign speaking names to distinct states, categories, or options. Both, the individual members, as well as whether an option is available in a collection or not conveys important information.

As such, they help offering an intuitive use model, and any changes in versions need to be reflected there.

**Public enums are offered and exclusively used in a versioned flavors where exposed to users. They map to internal superset enums used by the implementation, which addresses any compatibility tasks.**

## Implementation

On the API side, the enum is defined on the - versioned - interface. XML documentation provides context information for the user.

```cs
namespace Csra.V1 {

    /// <summary>
    /// The available output targets for Alert Service messages.
    /// </summary>
    [Flags]
    public enum AlertOutputTarget { OutputWindow = 1, Datalog = 2, File = 4 }
```

To avoid a direct dependency, the enum is defined again on the implementation side:

```cs
namespace Csra.Implementations.Services.Alert {

    [Flags]
    public enum AlertOutputTarget { OutputWindow = 1, Datalog = 2, File = 4 }
```

Here, it needs to be a superset of features to match implementation also covering common functionality for all supported versions. Over time, these enums may drift apart, and careful design needs to make sure to avoid ambiguities or mismatches. Bi-directional explicit conversion in the API provide robust and type-safe translation:

```cs
public AlertOutputTarget LogTarget {
    get => (AlertOutputTarget)Implementations.Services.Alert.AlertService.LogTarget;
    set => Implementations.Services.Alert.AlertService.LogTarget = (Implementations.Services.Alert.AlertOutputTarget)value;
}
```

The cast here is fast, as no data conversion is involved. There is also no data check, so implementation has to provide safe default cases for seemingly non-existing enums - they might appear in the future and then break the code.

Overall however, this approach provided dedicated enum values per version without constraining incompatible changes (additions, removals and name changes) in case they become required.

Private enums, used only inside implementation without exposure to the user can be normally defined and used.