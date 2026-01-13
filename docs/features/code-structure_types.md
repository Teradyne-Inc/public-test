# Code Structure - Typed

Types are used to carry complex data between test blocks and to persistently store it in test methods. In an object oriented model, class objects (dedicated types) are pervasively used as arguments and return types of test blocks.

Public C#RA types are carefully designed for generic use and backwards compatibility. Required extensions and enhancements are made in ways not affecting existing implementations, incompatible updates are eschewed. Because of that liability, the introduction of any new custom types in C# Reference Architecture is carefully considered.

Adding and consistently supporting fully versioned version of types throughout the C# Reference Architecture would add significant complexity and code duplication to the project, to an extent where usability would be significantly thwarted.
