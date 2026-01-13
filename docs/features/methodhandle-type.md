# `MethodHandle` Type

## Overview

`MethodHandle<T>` enables dynamic, type-safe resolution and invocation of static delegates by specifying a `FullyQualifiedName`. Only static methods marked with the `[MethodHandleTarget]` attribute are considered for binding. The delegate is resolved at runtime, adapting to the current execution context (such as debug or production mode).

- **T:** The delegate type. Must inherit from `Delegate`.

## Properties

### `string FullyQualifiedName`

Gets the fully qualified name of the method to bind to the delegate.

### `T Execute`

Gets the resolved delegate instance based on the current execution context.

- If the application is running in **debug mode**, it uses the `_outOfProcessDelegate`.
- If in **production mode**, it uses the `_inProcessDelegate`.

Delegates are lazily initialized and cached per context.

## Internal Logic

### Execution Context

The execution context is determined by:

```c#
private bool _outerProcess => TheExec.Flow.RunOption[OptType.Debug];
```

### Delegate Resolution

The delegate is created using reflection:

- The fully qualified name is split into type and method.
- The method is searched in the provided assemblies.
- The method signature must match the delegate's signature.
- If found, a delegate is created using `Delegate.CreateDelegate`.

If the method is not found or mismatched, an error is logged via `AlertService`.

## Error Handling

- Logs an error if the fully qualified name is invalid.
- Logs an error if the method cannot be found or does not match the delegate signature.

## Example

```c# 
// define a static method 
[MethodHandleTarget]
public static int Sum(int a, int b) => a + b;

// search for the method
var sum = new MethodHandle<Func<int, int, int>>("Namespace.Class.Sum").Execute;

// execute the method
var result = sum(1, 2);
```

## Notes

- Only static methods are supported.
- The delegate is resolved from the calling and executing assemblies.
- Delegates are not serialized; they are re-resolved after deserialization.
