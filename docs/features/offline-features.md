# Offline Features

Tester availability is regularly a tight asset in the test program engineering phase. Increasing the value of offline setups has a direct and positive impact to the development team's efficiency.

Without actual hardware available, drivers typically rely on a light simulation model. While some hardware registers are cached and programmed values can be correctly read back, measurements and readings that depend on device stimulus usually return defaults. These values may have an undesired effect on the test code mechanics and may result in undesired flow paths or binning.

## Use Offline Pass Results

Independent from any readback or calculation, parametric datalogs can be forced to pass by ignoring the incoming data and logging a value mid-way between the limits. That's a simple but effective mechanism to make sure the flow executes as expected, but would not have any effect on test method internal calculations. Functional tests are typically pass already as the drivers don't report fails offline.

C#RA uses a [BehaviorService feature](behavior-service/behavior-service_features.md) to optionally enable this functionality in `TheLib.Datalog.TestParametric()` block:

| Feature | `Datalog.Parametric.OfflinePassResults` |
|---|---|
| Type | `bool` |
| `false` (default) | send incoming values values to the datalog |
| `true` | query IG-XL for limits and send centered pass values to the datalog |

> [!Note]
> This capability is offered independently from a future addition of Offline Response Engine (ORE) support. Since test methods are not changed to support this, users have a free choice of the offline model they wish (none / overwrite / ORE).

## Offline Response Engine (ORE)

This new feature in IG-XL can be used to inject offline readback data right into the drivers. That way, the test program can remain completely unmodified while still behaving as if it was running on a tester. A record mode can capture and store actual device responses online, and re-play them in subsequent offline sessions. The offline responses is user editable, so that custom adjustments can be made.

The Offline Response Engine will not be available until IG-XL 11.10 - which also constrains how C#RA can provide such functionality to users.

## Alternatives Considered

### Conditional Offline Code

The fall-back solution for every test engineer has long been dedicated `if (offline) ...` structures, overwriting the driver's defaults in that case. While this could be done at the test method level, the idea was rejected as too invasive and resulting in cluttered code.

Should users wish to use that model in their own custom test methods, they are totally free to do so. The C#RA provided test methods will not.

### Specify Offline Values

It was considered to allow specifying the offline values. This idea was rejected, because it would have required modifying the API to support an additional input. The proposed path of assuming values mid-way between the low- and high limit is robust and does not require dedicated code. More advanced use cases are deferred to the ORE functionality.

