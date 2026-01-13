#region snippet-01
public static void Connect(Pins pins) {
    if (pins.ContainsFeature(InstrumentFeature.Ppmu, out string ppmu)) {
        TheHdw.PPMU.Pins(ppmu).Connect();
    }
    if (pins.ContainsFeature(InstrumentFeature.Dcvi, out string dcvi)) {
        TheHdw.DCVI.Pins(dcvi).Connect(tlDCVIConnectWhat.HighForce | tlDCVIConnectWhat.HighSense);
    }
    if (pins.ContainsFeature(InstrumentFeature.Dcvs, out string dcvs)) {
        TheHdw.DCVS.Pins(dcvs).Connect(tlDCVSConnectWhat.Force | tlDCVSConnectWhat.Sense);
    }
}
#endregion