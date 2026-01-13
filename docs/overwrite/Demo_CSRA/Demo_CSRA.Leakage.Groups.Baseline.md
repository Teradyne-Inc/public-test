---
uid: Demo_CSRA.Leakage.Groups.Baseline(Teradyne.Igxl.Interfaces.Public.PinList,System.Double,System.Double,System.Double,System.Double,System.String)
custom_details: *content
---

##### Test Technique

This test method can be used to measure currents flowing into device inputs. One common example is the digital input leakage test to detect issues in isolation structures, possibly damaged by a manufacturing flaw or elevated test voltage levels. Even though such a device may still work according to the specification, statistical outliers can indicate early failures in the devices' target application.

A typical circuitry for a leakage test showing the device and four instruments (three different types) connected to individual device pins. The instruments are ground referenced and in Force-Voltage mode to allow measuring the currents flowing into the device.

![Schematic](media/leakage-parallel-baseline-schematic.png)

The test typically applies a voltage near the VDD level to digital input pins, after the device has been brought into a static state that should not allow any current to flow. Ideally, the measured currents are very close to 0A. High sensitivity to noise, and the need to settle dynamic (charging) effects often result in significant test times, mitigated only by the fact that the measurement can usually be made on all pins in parallel.

The group testing method combines the precision of individual evaluation with the flexibility of collective assessment, allowing for the sequential analysis of each pin or group of pins, based on the structure defined in the `pinList` parameter. This approach facilitates efficient identification of leakage currents and provides a detailed overview of the behavior of the tested elements, without compromising control over each component. It is particularly useful in scenarios where pins are logically or functionally organized into groups and resources must be carefully managed. However, the testing duration may be affected by the size and complexity of the groups, as the process is carried out sequentially. In situations that require pinpoint analysis and maximum accuracy, the serial testing method is recommended.
Details can be found in: [Leakage.Serial.Baseline](xref:Demo_CSRA.Leakage.Serial.Baseline(Teradyne.Igxl.Interfaces.Public.PinList,System.Double,System.Double,System.Double,System.Double,System.String))

Conversely, for optimizing time and resource usage in less sensitive contexts, the parallel testing method remains an efficient alternative.
Details can be found in: [Leakage.Parallel.Baseline](xref:Demo_CSRA.Leakage.Parallel.Baseline(Teradyne.Igxl.Interfaces.Public.PinList,System.Double,System.Double,System.Double,System.String))

Special attention is required to avoid these common issues:

- An accidental disconnect in the signal path (e.g., due to an open DIB relay) may be difficult to detect, as measurements into an open line yield statistically inconspicuous results.
- The measurement of very small currents may be limited by the instrument's performance, so that the results rather reflect the instrument's behavior instead of the component's characteristic.

##### Implementation

The **PreBody** section applies levels and timing from the test instance context. Optionally, applies the specified `setup`. For all pins specified in the `pinList` it disconnects any pin electronics, connects the dc path.

The **Body** section initially applies the `baseVoltage` and turns on the gate to all pins. Subsequently, regardless of whether individual pins or groups of pins are specified in the `pinList`, the process proceeds sequentially, element by element. For each pin or group, the `voltage` is applied, the specified `waitTime` is allowed to elapse, and a current measurement is performed. After the measurement is completed, the `baseVoltage` is reapplied to the respective pin or group.

The **PostBody** section establishes the pin electronics connection for digital pins after gating off and disconnecting the DC path. Finally, a parametric datalog is logged.

##### Platform Specifics

Supports stepping capability for PreBody/Body/PostBody.

##### Pre Conditions

- none

##### Post Conditions

- digital pins in `pinList` have pin electronics connected
- any dc paths from pins in `pinList` are disconnected

##### Limitations

- none

##### Code Reference

[!code-csharp[](../../../src/Demo/Demo_CSRA/Leakage/Groups.cs?name=Baseline)]
