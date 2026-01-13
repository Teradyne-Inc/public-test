# Backwards Compatibility

Compatibility is a sensitive topic for libraries that are widely used. The cost and effort to handle incompatible updates quickly scale with broad adoption, hence compatibility requirements need to be managed well.

Unfortunately, there is no perfect one-fits-all approach, and every solution comes with tradeoffs. Here's the model C#RA has selected, along with the logic chain why this is considered the best option.

## Compatibility Philosophy

C#RA aims to minimize breaking changes while maintaining the flexibility to improve the library when necessary. The approach balances stability for existing users with the ability to deliver better solutions for new and evolving requirements.

### Compatible Changes

The following types of changes are considered compatible and can be made in minor version updates:

- **Bug fixes** that correct unintended behavior without affecting legitimate use cases
- **Additional functionality** through new test blocks, test methods, or services
- **Additional overloads** for existing methods to support new use cases
- **Additional optional parameters** on existing methods with sensible defaults

These changes preserve existing code behavior and require no modifications to test programs using previous versions of the library.

### Incompatible Changes

While the strong preference is to avoid them, incompatible changes may be necessary when:

- Original design choices prove inadequate for real-world requirements
- New requirements emerge that cannot be satisfied within the existing API structure
- Maintaining compatibility would compromise the quality or usability of the solution

When incompatible changes are required, they result in a new major version. The goal is to minimize such changes and introduce them only when the benefits clearly outweigh the migration effort for users.

## Version Numbering

C#RA uses a `Major.Minor` version numbering scheme:

- **Minor version increments** (e.g., 1.0 → 1.1) indicate compatible additions: new features, bug fixes, and enhancements that do not break existing code.
- **Major version increments** (e.g., 1.5 → 2.0) indicate incompatible changes that may require code modifications in test programs.

Every release receives a version number. There are no unofficial versions, patches, or updates to existing releases. Each version is clearly identified through:

- Git tags in the repository
- Assembly attributes in the compiled code
- File names in release packages
- API methods that return the version information

Major version updates have no predefined schedule. They are introduced only when necessary, with the goal of keeping them rare.

## Development Model

Development always targets the latest version of C#RA. There are no separate release branches, and features or fixes are not back-ported to previous releases.

This approach keeps the development effort focused and avoids the complexity of maintaining multiple active versions. Because C#RA is distributed as source code, users with specific requirements can apply changes to their local copy if needed.

## Impact on Test Programs

The compatibility model is designed around how test programs actually use C#RA.

### Version Independence

Test programs include a specific version of C#RA, typically the latest available when the project starts. Each test program operates independently with its own copy of the library.

There is no global installation of C#RA that affects multiple test programs. Different test programs can use different C#RA versions without conflict.

### Update Strategy

Released test programs running in production do not require updates to C#RA as long as they function correctly. Updates can be considered when:

- The test program needs modification for other reasons
- New C#RA features would provide significant value
- Bug fixes in C#RA address issues affecting the test program

This means that incompatible C#RA updates have a limited scope. Only test programs that choose to upgrade are affected. Legacy programs continue to work with their embedded C#RA version.

### Migration Effort

When a test program does upgrade to a major version with incompatible changes:

- The update is deliberate and controlled by the test program team
- Only the specific test program being updated is affected
- The scope of changes is typically smaller than in IG-XL platform updates
- Test program source code provides full visibility into required modifications

This makes the compatibility challenge more manageable compared to platform-level updates where all programs must adapt simultaneously.

## Key Differences from the Previous Model

C#RA previously used a versioned interface approach where multiple API versions (V1, V2, etc.) existed side-by-side within the same release. This model has been replaced with the simpler approach described above.

### What Remains the Same

- Version numbers (`Major.Minor`) continue to be used
- Major version increments still indicate incompatible changes
- Minor version increments still indicate compatible additions
- The commitment to minimize breaking changes continues

### What Has Changed

The versioned interface indirection (V1, V2 namespaces) has been removed:

- **Previous approach:** Multiple API versions shipped together, accessed via `using Library_v1;` or `using Library_v2;`
- **Current approach:** Single API version per release, with incompatible changes delivered through new major versions

This change simplifies the library structure and reduces maintenance overhead without sacrificing compatibility for users. Test programs still work with their specific C#RA version, but the implementation is more straightforward.

### Implications

- Users will encounter incompatible updates when upgrading to new major versions
- There will not be different release branches - development follows a single path forward
- The migration effort is manageable because test programs control when and if they upgrade
- The problem is less complex than IG-XL platform updates where all programs must adapt simultaneously

The new model trades the ability to run multiple API versions in a single program for simplicity in library structure and maintenance. Since test programs embed specific C#RA versions and rarely need to mix API generations, this tradeoff favors practical usability.

# THE PREVIOUS MODEL

> Client code that was written for a previous revision of the C#RA library will keep running, even if a newer version of the library is installed. This is guaranteed by design and confirmed through auto tests.
> 
> ## General Concept
> 
> - "language compatibility" - code that was written for a previous version keeps running
> - "functional compatibility" - functionality is added, but not taken away, even in incompatible updates
> - no "binary compatibility" exists - source code only
> - use a `major.minor` version number scheme
> - major version number is compatibility indicator
>     - different major version => result of compatibility breaking need
>     - same major version => backwards compatible
>         - interface & functionally compatible
>         - binary compatibility is not applicable - we don't ship assemblies 
>         - additional features may be added (optional args, overloads, new nodes, remove error messages)
> - all previous versions are delivered in the product
>     - test programs specify the version they use, so existing jobs keep running even with an updated, incompatible version
>     - all versions are unit tested
> - new feature developments typically go into latest version
>     - can be down-ported if customers require and no compatibility impact
> - bug fixes should be applied to all versions
> - implementation code is shared as far as possible
> 
> ### Example Code
> 
> Consider the following library code:
> 
> ```cs
> namespace Library_v1 {
> 
>     public static class TheLib {
> 
>         public static void Feature1() => Library.Implementation.F1();
>         public static void Feature2() => Library.Implementation.F2();
>     }
> }
> ```
> 
> It has two features implemented, exposed in the object tree structure under `TheLib`. Test code consuming those features would specify a using directive for `Library_v1` to directly access the entry point node:
> 
> ```cs
> using Library_v1; // place a using with the intended Library version for this specific file
> 
> namespace TestProgram {
> 
>     [TestClass]
>     public class TestClass {
> 
>         [TestMethod]
>         public void TestMethod() {
>             // normal access to the features in the version stated in using directive at the top of the file
>             TheLib.Feature1();
>         }
>     }
> }
> ```
> Now, if an incompatible change becomes necessary, v2 of the library is created:
> 
> ```cs
> namespace Library_v2 {
> 
>     public static class TheLib {
> 
>         public static void Feature1() => Library.Implementation.F1();
>         public static void Feature2() => Library.Implementation.F2_new(); // this replaces functionality that existed before
>         public static void Feature3() => Library.Implementation.F3(); // this node is added in V2
>     }
> }
> ```
> This version provides a new & incompatible implementation of `Feature2` and adds an additional `Feature3`. The API for `Library_v2` is added in addition to the existing `Library_v1`. However, the now obsolete implementation of `Feature2` is marked with the `[Obsolete]` attribute:
> 
> ```cs
> namespace Library_v1 {
> 
>     public static class TheLib {
> 
>         public static void Feature1() => Library.Implementation.F1();
>         [Obsolete("message describing what has changed")] // nodes which receive incompatible updates in newer releases are marked [Obsolete] in previous ones
>         public static void Feature2() => Library.Implementation.F2();
>     }
> }
> ```
> 
> It's a gentle reminder to avoid this functionality, because it has been replaced with a better implementation for a reason. `Feature2` can still be used, but the Visual Studio IDE provides clear feedback with a strike-through marking and a compiler warning:
> 
> ![Visual Studio IDE screenshot showing obsolete attribute usage with strikethrough text formatting and compiler warning indicating deprecated functionality](media/obsolete.png)
> 
> At this point, it's a decision for the consumer of the library to determine the risk for new or existing code. The supplier of the library should clearly indicate > support policies for obsolete interfaces, giving the consumers enough time to react.
> 
> Feature implementations from other major versions available in the package, but not referenced in the file header `using` statements can easily be accessed through > their fully qualified name:
> 
> ```cs
> using Library_v1; // place a using with the intended Library version for this specific file
> 
> namespace TestProgram {
> 
>     [TestClass]
>     public class TestClass {
> 
>         [TestMethod]
>         public void TestMethod() {
>             // normal access to the features in the version stated in using directive at the top of the file
>             TheLib.Feature1();
>             
>             // other versions can be accessed by using fully qualified name
>             Library_v2.TheLib.Feature3();
>         }
>     }
> }
> 
> ```
> 
> Despite the API versioning requiring code duplication, implementation can still share the same code. In fact, by separating both, it's easy to support reuse and modular use of common functionality:
> 
> ```cs
> public static class Implementation {
>     public static void F1() { }
>     public static void F2() { }
>     public static void F2_new() { }
>     public static void F3() { }
> }
> ```
> 
> ## Specific Implementation
> 
> Applying this versioning concept to the C# Reference Architecture requires careful design for intuitive use and bug-free implementation. Any levels of complexity and indirection added must be vetted for the costs and benefits actually added.
> 
> The following strategies are followed for the C#RA components:
> 
> | C#RA Entity | Compatibility Strategy |
> |---|---|
> | Test Blocks | :heavy_check_mark: Use versioned interfaces and are exclusively accessed via these (including internal access). Previous versions remain accessible. |
> | Test Methods | :x: Don't offer versioning, releases contain the latest and greatest. Users can copy previous versions into custom user code. |
> | Services | :heavy_check_mark: Use versioned interfaces and are exclusively accessed via these (including internal access). Previous versions remain accessible. |
> | Public Types | :x: Don't offer versioning, careful initial design and extension only updates maintain backwards compatibility. |
> | Public Enums | :heavy_check_mark: Use versioned versions mapping to internal, implementation supersets. Previous versions remain accessible. |
> 
> ## Alternatives considered
> 
> ### Explicit `Vlatest`
> 
> It was considered to offer a dedicated latest version in addition to explicit `V1`, `V2` ... so that test blocks and test methods can opt to follow the latest and greatest per version. However:
> 
> - C# does not allow a way to serve interfaces in two namespaces, so this would result in yet another copy of all interfaces to be maintained, unit tested, and carried along.
> - The C#RA provided test methods and test blocks showcase recommended practice as role model for users' custom implementations. Because of the strong motivation to keep our code up-to-date and use the latest features, the use of `Vlatest` would make sense - any functional issues resulting from incompatible changes could and would have to be addressed before release.<br><br>Broad use of `Vlatest` however would suggest this use model also for customers leaning their designs on the reference code. Then, their designs would also be susceptible to breaking for major version upgrading, so they are forced to edit code or resign from updating. Which was exactly what the introduction of versioned interfaces was trying to avoid.
> 
> The concept of offering an explicit `Vlatest` is not pursued.
> 