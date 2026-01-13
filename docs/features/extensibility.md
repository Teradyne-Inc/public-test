# Extensibility

The C#RA is delivered as source code, giving customers full access to the implementation. While this enables direct usage and deep customization, we strongly discourage modifying the core source. Custom changes can make future updates and upgrades difficult or incompatible. To ensure smooth upgrades and long-term maintainability, always prefer supported extensibility mechanisms—such as Extension Methods—over direct source modification.

## Supported Extensibility: Extension Methods

Currently, C#RA supports extensibility primarily through **Extension Methods**. This .NET feature allows users to add new TestBlocks to interfaces from outside the original codebase, without modifying the core source. Extension Methods enable customers to name and implement their own methods, linking them to C#RA interfaces as needed.

> [!NOTE]
> Inheritance, pre/post hooks, or other interception mechanisms are **not** supported in the current architecture. Extension Methods are the only officially supported way to extend functionality.

### How Extension Methods Work

Extension Methods let customers implement additional functionality in their own projects. These methods are discoverable and callable as if they were part of the original interface or class, but ownership and responsibility for these methods remain with the customer.

> [!TIP]
> For more details, see the official Microsoft documentation on [Extension Methods](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods).

Example:

Adding an Extension Method to the interface `ILib.ISetup.IDc` with two arguments.

[!code-csharp[](../../src/Demo/Demo_CSRA/CustomerExtensions.cs)]

Usage:

The ExtensionMethod can be used like this.

[!code-csharp[](../../src/Demo/Demo_CSRA/Showcase.cs?range=10-13)]

This approach allows customers to extend the `TheLib` node with their own `TestBlocks`.

> [!WARNING]
> Extension Methods can only **add** functionality. If a future C#RA release introduces a method with the same signature, the built-in method will take precedence and **your extension will be ignored**.

### Considerations and Limitations

- **Ownership:** Extension Methods are fully owned and maintained by the customer. C#RA does not enforce any naming or implementation rules for these methods.
- **Instrument Agnosticism:** Since extensions are implemented externally, they may not follow the same instrument-agnostic principles as the core C#RA.
- **No Pre/Post Hooks or Inheritance:** There is no built-in support for pre/post hooks, interception, or inheritance-based extension. All extensibility must be done via Extension Methods.

## Customizing TestMethods

For more significant changes, such as altering arguments or logic in `TestMethods`, the recommended approach is to copy the relevant code into the customer project and modify as needed.

[!code-csharp[](../../src/Demo/Demo_CSRA/Showcase.cs?name=CustomizeTestMethod)]

Here, for example, a second `Pattern` argument was added and executed in sequence.

## Summary

C#RA is designed to be used as-is or extended via supported .NET Extension Methods. Direct modification of the core source is discouraged to ensure upgradability. Extension Methods provide flexibility, but customers are responsible for their implementation and maintenance.
