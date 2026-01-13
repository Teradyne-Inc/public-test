# Required using Statements in Test Code

## using Csra;

**Purpose:** 

This directive is essential for accessing the core objects and functionality provided by the Csra framework.

**Enabled Access To:**

- Pins object
- PatternInfo object
- Setup object

**When to Use:**

- Required in nearly all test scenarios involving pin configurations

## using Csra;

**Purpose:**

Provides access to version-specific features, including settings and test block definitions.

**Enabled Access To:**

- Setting object
- Extension methods
- Enums for TestBlocks
- Access to the Api object

**When to Use:**

- When you need to configure SetupService
- When working with TestBlocks

## using static Csra.Api;

**Purpose:**

A convenience directive that allows direct access to static members like Services and TheLib without needing to qualify them.

**Enables Access To:**

- Services
- TheLib

**When to Use:**

When you want cleaner syntax for accessing static members.

> [!Note]
> This is a shortcut and does not replace the need for `using Csra;`.

## Summary & Best Practices

| Directive | Required For | Notes |
|-----------|--------------|-------|
| using Csra; | Core objects like Pins, PatternInfo, Setup, Settings, enums | Always needed|
| using static Csra.Api; | Convenience for static access | Optional, but useful|

## Why Multiple Usings?

Due to **versioning**, **interface/implementation separation**, and **modular design**, no single `using` directive can cover all use cases. This separation ensures flexibility and maintainability across different versions and components of the Csra framework.