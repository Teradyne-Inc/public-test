# Installation & Adding Reference

Once you've downloaded and extracted the Csra package, the next step is to integrate it into your development environment. Whether you're working in Visual Studio or using IG-XL, the process is straightforward. Below are the instructions for both environments to help you get up and running quickly.

- Copy the `Csra` folder from the downloaded package.
- Paste it next to your solution file.

## Visual Studio Reference

To include the Csra project in your Visual Studio solution:

- Open your solution in Visual Studio.
- Right-click the solution **> Add > Existing Project...**
- Navigate to the Csra folder and select `Csra.csproj`.
- Click **OK**.

## IG-XL Reference

To reference the compiled Csra library in IG-XL:

- Build the `Csra` project in Visual Studio to generate the `Csra.dll`.
- Open IG-XL.
- Navigate to `ReferenceSheet`.
- Right-click on the next empty cell, **Edit**.
- Navigate to the output folder and select `Csra.dll`.

> [!NOTE]
> Adding a reference in IG-XL is only necessary if you plan to use **TestMethods** provided by the Csra project.