# Code Structure

Consistency in code structure and architecture can be beneficial for readers and help implementers avoid mistakes: a concept carefully designed, reviewed and agreed may serve as a template for similar features, so that fundamental questions don't need to be answered over and over again.

For the user, such a code base has a solid look and feel, and can be efficiently used after a quick learning curve. To achieve that, implementers need to hold back with personal flavors and give up some creative freedom.

The following basic entities exist in the C# Reference Architecture, with each having their own specifics, while still following a common style:

| Entity | Description |
|---|---|
| [Test Blocks](code-structure_test-blocks.md) | **stateless** methods combining common use cases for a higher abstraction language |
| [Test Methods](code-structure_test-methods.md) | callable from the Instance / Flow sheet in IG-XL |
| Test Classes | grouping containers for alike Test Methods with common data structures or sub functions |
| [Services](code-structure_services.md) | singletons for global accessibility (typically **stateful**) |
| [Types](code-structure_types.md) | dedicated containers for data & associated functionality to be used in test classes, test methods and test blocks |
| [Enums](code-structure_enums.md) | predefined sets of named values representing distinct states, categories, or options |
| [Extension Methods](code-structure_extension-methods.md) | methods that add new functionality to existing types without modifying their original implementation. |
| [`Demo_CSRA` project](code-structure_Demo_CSRA.md) | Reference Test program with Happy Day Scenario implementations of test methods for the SN74ABT8543 transceiver device. |