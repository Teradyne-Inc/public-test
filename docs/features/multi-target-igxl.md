# Multi-Target Support for Different IG-XL Versions

As more internal and external users adopt the C#RA, limiting development to a single IG-XL version has become increasingly impractical:

- New IG-XL features requested for the C#RA project remain inaccessible unless the entire team upgrades to a newer version.
- Ideally, such features should be verified as soon as they’re implemented—to provide early feedback to the designers and reduce technical debt promptly.
- Without official support for multiple IG-XL versions, everyone must migrate simultaneously:
    - All collaborators and contributors
    - All users who want to continue receiving updates
    - IG-XL Test Harness (which must match the version)
    - Self-hosted runners
    - Online testers

Since we can't always dictate when users switch IG-XL versions—or whether they switch at all—C#RA must support targeting multiple IG-XL versions concurrently.

## Strategy

Official support for any version essentially means testing that it works as expected. While this shouldn't require significant extra functionality, a support claim without a verification proof is meaningless.

As a result, all supported IG-XL versions must receive equivalent test coverage. Although development may focus on a specific version, test automation should run across all supported versions, ideally in parallel to maintain short cycle times. The same applies to online testing and performance profiling to ensure full confidence.

### Compiler Directives

Incompatible API changes require conditional compilation to ensure successful builds. The simplest solution is using compiler directives (#if) to enable or disable code blocks based on preprocessor symbols:

```cs
#if IGXL_10_60_01_uflx
    TheExec.AddOutput("important message", ColorConstants.vbRed, true);
#else
    TheExec.AddOutput("important message", ColorConstants.Red, true);
#endif
```

This structure enables the legacy syntax (`ColorConstants.vbRed`) for IG-XL 10.60.01 and uses the new one (`ColorConstants.Red`) for all other versions. Since IG-XL 10.60.01 is the only pre-11.00 version still in use, this is a safe approach here. Other scenarios might require finer granularity for different versions.

### IG-XL Version-Specific Preprocessor Symbols

IG-XL does not natively provide version-based preprocessor symbols in its test and DSP code templates, but this can be added manually in the `.csproj` files:

```xml
  <!-- This section is added for multi-target support of IG-XL versions. It'll create a preprocessor symbol to allow wrapping incompatible IG-XL code within #if directives -->
  <PropertyGroup>
    <RawPath>$(IGXLROOT)</RawPath> <!-- Get the environment variable -->
  </PropertyGroup>
  <PropertyGroup Condition="'$(RawPath)' != ''"> <!-- Only run the symbol-building logic if IGXLROOT is defined -->
    <LastSegment>$([System.IO.Path]::GetFileName($(RawPath)))</LastSegment> <!-- Get the last segment of the path (e.g., 10.60.01_uflx) -->
    <CleanVersion>$([System.String]::Copy('$(LastSegment)').Replace('.', '_'))</CleanVersion> <!-- Replace dots with underscores -->
    <SymbolName>IGXL_$(CleanVersion)</SymbolName> <!-- Construct the symbol name -->
    <DefineConstants>$(DefineConstants);$(SymbolName)</DefineConstants> <!-- Append the new symbol to DefineConstants -->
  </PropertyGroup>  
```

This injects a version-specific symbol like `IGXL_10_60_01_uflx`, which can be used in `#if` directives. In case a symbol is not defined (= a different version is currently installed), the wrapped code is ignored.

Logical operators such as `&&`, `||`, and `!` can be used to build flexible branching logic.

If this approach proves reliable and beneficial, IG-XL may consider incorporating it into its templates. For now, all relevant C# project files in C#RA have been updated manually.

### Cleaning Up Outdated Versions

As development shifts to newer IG-XL versions, support for outdated ones should be removed promptly. Eliminating obsolete code paths keeps the codebase clean, maintainable, and easier to navigate.

### Unit Testing

Unit Testing with the IG-XL Test Harness is based on the idea that IG-XL does not need to be installed on the target machine. That however means that the `IGXLROOT` environment variable wouldn't defined either.

To make the above mechanics usable in this scenario, a version compatible `IGXLROOT` environment variable must be created before launching the unit tests. Then, the same mechanism can be used to control version divergent code execution flows also in the tests.

## Costs & Effort

The effort to implement and maintain multi-version support can be grouped into the following categories:

- Duplicate logic or implementation for version-specific features
- Increased friction during development and verification
- Maintenance of more complex code structures and cluttered language
- Setup of additional VDIs for alternate IG-XL versions for all team members
- Duplication of offline unit test runs
- Duplication of online regression test handling
- Version-specific performance and result analysis
- Structural documentation updates to support version differences

Many of these costs can be mitigated through automation and process improvements. It's an upfront investment in one milestone that quickly pays off with a smoother workflow moving forward.

> [!Important]
> Even with solid tooling and automation, every officially supported IG-XL version adds recurring cost and maintenance overhead. New versions should be added cautiously, and outdated versions dropped as soon as feasible.

## Alternatives Considered

### Separate Projects

Duplicating the entire code base for what is expected to only be marginal differences in a small number of places would be a gross violation of the single source of truth principle. The cost of maintenance and likelihood (certainty!) to introduce issues would be enormous.

### Interface Abstraction

Using interface abstraction to isolate diverging APIs was considered. However, because of the size of the IG-XL PublicAPI and the relatively small diverging areas as well as the transient nature of most differences, this approach was deemed impractical.

### Code Generation

Code generation to handle syntax differences would introduce high complexity and poor maintainability. It would also be difficult to encapsulate (hide) effectively from end users.

### Pre-Build Scripting or File Swapping

This approach shares the same mechanics as `#if` directives but places the logic outside the source files. This separation would make it harder to track and maintain. Keeping the logic inline in source code ensures clarity and transparency.

### Public API Version Symbols

IG-XL’s Public API has its own versioning scheme, which always increments with each IG-XL release—regardless of language changes. While technically feasible, these versions are less familiar and intuitive for most users. Using them would increase the risk of mistakes.

However, users with specific needs can implement their own version-based symbols using the same `.csproj` mechanism shown above.