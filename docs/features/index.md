# Features & Implementation

<!-- Derived from [principles and requirements](../principles/index.md), a comprehensive list of features comprise the backbone of the **C# Reference Architecture**. -->
Derived from principles and requirements, a comprehensive list of features comprise the backbone of the **C# Reference Architecture**.

Design decisions made are documented with alternative options stated. The decision making process is captured, so that when requirements change, the logic chain can be revised to confirm choices made are still the best option on the table.

The feedback loop is closed by comparing the results (features) with the postulated principles and requirements derived from them.

![Circular diagram showing the relationship between principles and features, illustrating how design decisions flow from principles to implemented features](../media/principles_features.png)

## Clean

- [Alert Service](alert-service.md) - centralized messaging and exception handling
- [Behavior Service](behavior-service.md) - when logic gets a personality
- [Code Structure](code-structure.md) - organize the source code entities 
- [Custom Validation](custom-validation.md) - improve usability through argument checking
- [Documentation](documentation.md) - one-stop-shop for information seekers
- [Extensibility](extensibility.md) - embrace incompleteness
- [External Libraries](external-libraries.md) - tap into others' IP
- [Instrument Specific Features](instrument-specific.md) - access to specialized hardware benefits
- [`MethodHandle` Type](methodhandle-type.md) - delegate the work
- [Modularity](modularity.md) - users can mix and match
- [Multi-Target IG-XL Support](multi-target-igxl.md) - flexibility for different versions of IG-XL
- [Offline Features](offline-features.md) - upvalue engineering time
- [Persistent Data Storage](persistent-data-storage.md) - save and reuse information within and beyond job runs
- [`Pins` type](pins-type.md) - context aware objects for pin lists
- [Platform Independence](platform-independence.md) - remove friction and enhance fluidity between different testers
- [Search & Trim](search-trim.md) - a straightforward approach to a challenging test technique
- [Setup Service](setup-service.md) - manage device & tester setups and automate efficient transitions between
- [Single- & MultiCondition](single-multi-condition.md) - flexibility for uniform and specific test conditions
- [SSN](ssn.md) - Streaming Scan Network, Siemens' next gen Scan Technology
- [Test Abstraction](test-abstraction.md) - reduce complexity by encapsulating details
- [Transaction Service](transaction-service.md) - being fluent in devices' dialects
- [Unit- & Integration Testing](unit-integration-testing.md) - control quality and minimize defects
- [Versioning & Compatibility](versioning-compatibility.md) - manage how functionality develops over time

## Work in Progress

- [Characterization Support](characterization-support.md) - easily determine margins and process capability
- [Copilot Friendliness](copilot-friendliness.md) - great output requires decent input
- [Legacy Templates](legacy-templates.md) - a successful use model re-imagined
- [`PatternInfo` type](patterninfo-type.md) - context aware objects for pattern & vector data
- [Stepping](stepping.md) - Pre / Body / Post flow debug
