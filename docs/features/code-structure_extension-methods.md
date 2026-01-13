# Code Structure - Extension Methods

Extension Methods are methods that add new functionality to existing types without modifying their original implementation. 

**Extension Methods are offered and exclusively used in a versioned flavor where exposed to users. They map to internal superset extensions used by the implementation, which address any compatibility tasks.**

## Implementation

On the API side, the extension is defined on the - versioned - interface. XML documentation provides context information for the user.

```cs
namespace Csra.V1 {

    /// <summary>
    /// Returns the single element of a sequence, or the element at the specified index if the sequence contains more than one element.
    /// </summary>
    [DebuggerStepThrough]
    public static T SingleOrAt<T>(this T[] values, int index) => Implementations.Extensions.SingleOrAt(values, index);
```

To avoid a direct dependency, the extension is defined again on the implementation side:

```cs
namespace Csra.Implementations {

    internal static T SingleOrAt<T>(this T[] values, int index) => values.Length == 1 ? values[0] : values[index];
```

Mocking extension methods directly is not possible because they are static methods. Most mocking frameworks, including Moq, do not support mocking static methods, which limits the ability to mock extension methods directly.