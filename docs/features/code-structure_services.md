# Code Structure - Services

Services are centralized, stateful feature providers that can be globally reached from user code, test methods, blocks, types or other services. They are an integral part of the overall use model reflecting recommended practice to use the tester.

As such, their use model and functionality is being relied on in user code, with significant impacts in the case of incompatible changes. Similar to Test Blocks, C#RA offers a way to keep existing code running, while allowing use model improvements to be offered.

**Services are exclusively accessed via versioned interfaces. Multiple versions are available in a release package, allowing existing code to keep running if pointing to a version before an incompatible update. They share common implementation, realized as a static class.**

> [!Important]
> Calls to Services from within the C# Reference Architecture always use the latest interfaces, and are updated when a new (incompatible) version is introduced.

## File & Folder Structure

All Services follow a consistent scheme. The following examples will use the [AlertService](alert-service.md) as reference:

```plaintext
🌐 Csra
    📂 Implementations                      
        📁 ExtensionMethods                 
        📂 Services                         
            📂 Alert                        <-- dedicated folder for each service
                📄 AlertService.cs          <-- implementation file(s)
            📁 ...                          
        📁 TestBlocks                       
    📁 TestMethods                          
    📁 Types                                
    📂 V1                                  
        📁 ExtensionMethods                 
        📂 Services                         
            📂 Alert                        <-- dedicated folder for each service
                📄 AlertService.cs          <-- API class
                📄 IAlertService.cs         <-- interface class
            📁 ...                          
            📄 IService.cs                  <-- common design pattern for all services
        📁 TestBlocks                       

🌐 V1_UT
    📁 ExtensionMethods_UT                 
    📂 Services_UT                      
        📂 Alert_UT                      
            📄 AlertService_UT.cs           <-- unit tests
    📁 TheLib_UT                 

```

## Interface Class

The versioned interface definition holds all public nodes along with the XML documentation:

<!-- [!code-csharp[](../../src/Csra/V1/Services/Alert/IServices.Alert.cs?range=1-24)] -->

## API Class

The versioned API is a partial class holding the singleton object and implements the interface. Calls are simply handed through to the implementation. Incompatible updates made there (like an extra parameter that was added for additional functionality in the implementation) can be disguised at this level, so that legacy versions remain functionally unchanged:

<!-- [!code-csharp[](../../src/Csra/V1/Services/Alert/Services.Alert.cs?range=1-34)] -->


## Implementation Class

The implementation class holds the actual functionality. It's a functional superset for all existing versions:

<!-- [!code-csharp[](../../src/Csra/Implementations/Services/Alert/Services.Alert.cs?range=1-31)] -->

## Common Design Pattern

To facilitate certain commonality across all C#RA services, they implement the `IService` interface:

<!-- [!code-csharp[](../../src/Csra/V1/Services/IService.cs?range=1-11)] -->


```cs
namespace Csra.V1 {

    public interface IService {

        /// <summary>
        /// Initialize the service. This is called by the API when the service is first used.
        /// </summary>
        void Reset();
    }
}
```

At this point, only a common `Reset()` method is required. Besides the consistent use model, this helps avoiding state leakage in consecutive unit tests: all services are reset in test initialization.

## Unit Testing

Since they provide central capability for a broad and diverse range of use cases, Services are extensively unit tested. Not only should line coverage be at 100%, but the goal is to really try all corner cases and combinations, so that users can rely on flawless functionality:

[!code-csharp[](../../src/UT/V1_UT/Services_UT/Alert_UT/AlertService_UT.cs?range=1-27)]
