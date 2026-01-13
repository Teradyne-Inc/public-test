# C# Reference Architecture (from main)

> [!Important]
> This version of the documentation was not produced through the official C#RA release process and may contain inaccuracies or outdated information. Please use with caution, and refer to the official documentation provided with C#RA releases for verified content. 
> 
>![Colorful unicorn illustration indicating this is unofficial documentation](media/unicorn.png)
>
> Access the official documentation here: [C# Reference Architecture](https://solid-adventure-nv3z2qy.pages.github.io/)

<img src="media/logo_150.png" alt="C#RA Logo" style="float: left; margin-right: 25px; margin-bottom: 15px;" />

As device complexity continues to grow, developing test programs has become increasingly challenging. With shorter product life cycles and accelerated time-to-market demands, traditional manual coding approaches are no longer sustainable. New methodologies emphasizing reuse and automation are essential.

The **C# Reference Architecture** (C#RA) addresses these challenges by streamlining the creation and maintenance of test programs. It offers a robust, performance-oriented library of validated implementations that reflect recommended practice in test development.

<div style = "clear:both;"></div>

> [!Note] 
> **TL;DR** --> [Download the Latest Release](https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture/releases)

## The Library

At the heart of C#RA is a powerful abstraction layer known as [**Test Blocks**](https://solid-adventure-nv3z2qy.pages.github.io/features/code-structure_test-blocks.html), which enables the development of concise, generic, reusable, and intuitive test code. These blocks are designed to be modular, high-performing, and immediately understandable - minimizing the need to consult documentation.

The provided [**Test Methods**](https://solid-adventure-nv3z2qy.pages.github.io/features/code-structure_test-methods.html) illustrate effective and proven solutions for common test scenarios, available in both offline and online runnable demo programs. By intentionally avoiding exhaustive coverage of every edge case, the examples remain clean and approachable - making them easy to adopt and extend.

This balance allows teams to address more specific requirements while maintaining a consistent and scalable development approach.

```cs
TheLib.Setup.LevelsAndTiming.Apply(true);
Services.Setup.Apply(setup);
if (_containsDigitalPins) TheLib.Setup.Digital.Disconnect(_pins);
TheLib.Setup.Dc.Connect(_pins);

TheLib.Setup.Dc.SetForceAndMeter(_pins, TLibOutputMode.ForceCurrent, current, current, clampVoltage, Measure.Voltage, voltageRange);
TheLib.Execute.Wait(waitTime);
_meas = TheLib.Acquire.Dc.Measure(_pins);

TheLib.Setup.Dc.Disconnect(_pins);
if (_containsDigitalPins) TheLib.Setup.Digital.Connect(_pins);
TheLib.Datalog.TestParametric(_meas, current);
```

Comprehensive [documentation](https://solid-adventure-nv3z2qy.pages.github.io/) complements the codebase, offering insights into the [requirements process](https://solid-adventure-nv3z2qy.pages.github.io/principles/index.html), [design decisions](https://solid-adventure-nv3z2qy.pages.github.io/features/index.html) and providing [API help](https://solid-adventure-nv3z2qy.pages.github.io/api/Csra.html) for deeper understanding where necessary.

## Infrastructure

C#RA is built with automation at its foundation. Automated unit and integration testing, documentation generation, and packaging workflows ensure consistent quality and reduce the risk of human error.

The project follows an agile development model, allowing for rapid iteration and continuous delivery through monthly releases.

These capabilities are extended to users, enabling seamless integration into their own workflows - supporting both quality assurance and timely delivery.

## Getting Started

1. Download and unzip the latest [release](https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture/releases)
1. Review the documentation: `/doc/index.html` or [online](https://solid-adventure-nv3z2qy.pages.github.io/)
1. Understand the system requirements and prerequisites: `Documentation > Getting Started` or [online](https://solid-adventure-nv3z2qy.pages.github.io/getting-started/index.html)
1. Explore the included demo program: `/Demo` or [online](https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture/tree/main/src/Demo)
1. Integrate C#RA into your test project: `Documentation > Getting Started > Installation` or [online](?https://solid-adventure-nv3z2qy.pages.github.io/getting-started/installation.html)
1. Start building better test programs - faster and more reliably!

## Releases

| Release Version | Publish Date |
|---|---|
| [v0.13](https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture/releases/tag/v0.13) | 2025-11-14 |
| [v0.12](https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture/releases/tag/v0.12) | 2025-10-17 |
| [v0.11](https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture/releases/tag/v0.11) | 2025-10-10 |
| [v0.10](https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture/releases/tag/v0.10) | 2025-10-02 |
| [v0.9](https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture/releases/tag/v0.9) | 2025-09-26 |
| [v0.8](https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture/releases/tag/v0.8) | 2025-09-01 |
| [v0.7](https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture/releases/tag/v0.7) | 2025-08-01 |
| [v0.6](https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture/releases/tag/v0.6) | 2025-07-01 |
| [v0.5](https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture/releases/tag/v0.5) | 2025-06-02 |
| [v0.4](https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture/releases/tag/v0.4) | 2025-05-09 |
| [v0.3](https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture/releases/tag/v0.3.0) | 2025-04-01 |
| [v0.2](https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture/releases/tag/v0.2.0) | 2025-03-10 |
| [v0.1](https://github.com/TER-SEMITEST-InnerSource/cs-reference-architecture/releases/tag/v0.1.0) | 2025-02-21 |
