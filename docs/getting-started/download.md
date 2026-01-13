# Download & Extract

To begin using the C#RA library, you'll first need to download and extract the package. This package includes the core source code, a demo project to help you get started quickly, and offline documentation for reference. Follow the steps below to set up your environment.

- Visit the [C#RA page](https://eknowledge.teradyne.com/wps/portal/eknowledge/?urile=wcm:oid:93c75fc8-9c34-4034-9d98-c0554d835fc8) on eKnowledge.
- Download the latest C#RA package.
- Unzip the contents to a location of your choice.

## Content of the ZIP:

```
└── 📁Csra # Source code of the library
└── 📁Demo # Sample project demonstrating usage
└── 📁docs # Offline HTML documentation
```

> [!TIP]
> You can create a Git repository for the `Csra` folder and link it as a submodule in your main project repository.

## Demo Project

For reference purpose a demo project is part of the release package. It shows how to use a `TestMethod` or a `TestBlock` from a 3rd party project.

 ```
└── 📁Demo
    └── 📁ASCIIProgram # IG-XL files
    └── 📁Demo_CS # Sample project demonstrating c# usage without C#RA
    └── 📁Demo_CS_DSP # Sample project demonstrating c# dsp usage without C#RA
    └── 📁Demo_CSRA # Sample project demonstrating c# usage with C#RA
    └── 📁Patterns # Pattern files
    ├── _LoadDemoProgram.cmd # Generate Visual Studio Solution and loads IG-XL via IGLinkCL
    ├── Demo.igxlProj # IG-XL project
    └── SimulatedConfig.txt # For simulating purposes
```

To start IG-XL, just click on the `_LoadDemoProgram.cmd` file. Once IG-XL is started, open `Datalog` window and hit `Validate Job` and `Run` at the `IG-XL Main` tab. 

To debug the Test Program, click `Visual Studio` (Connected Mode) at the `IG-XL Tools` tab. Once Visual Studio is up, add breakpoints and hit `Run` again.
