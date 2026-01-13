# SSN Pattern's Special TestFlow

## 1. Non-Diagnosis TestFlow if all ssh are OCComp = off (Tester Compare Flow)

```mermaid
stateDiagram-v2
s1 : Tester Compare Flow
s1.1 : Setup for Initial Burst
s1.2 : Burst pattern(set)
s1.3 : Get failed core(ssh/icl) instance list
s1.4 : Is CMEM full?
s1.5 : Mask failed core(ssh/icl) instance
s1.6 : Summarize all failed cores

[*] --> s1
state s1 {
[*] --> s1.1
s1.1 --> s1.2
s1.2 --> s1.3
s1.3 --> s1.4
s1.4 --> s1.5 : Yes
s1.5 --> s1.2
s1.4 --> s1.6 : No
s1.6 --> [*]
}
```

### 1.1 Setup Initial Burst

```cs
// shall be encapsulated in C#RA, something like:
// TheLib.Setup.ssn.SetupCmemForInitialBurst();
TheHdw.Digital.CMEM.CentralFields = tlCMEMCaptureFields.AbsoluteCycle | tlCMEMCaptureFields.PatternName;
TheHdw.Digital.CMEM.SetCaptureConfig(-1, CmemCaptType.Fail, tlCMEMCaptureSource.PassFailData, true, false);
TheHdw.Digital.CMEM.CaptureLimitMode = tlDigitalCMEMCaptureLimitMode.Enable;
TheHdw.Digital.CMEM.CaptureLimit = maxFailsPerPin;
```

### 1.2 Burst pattern(set)

```cs
TheHdw.Patterns(ssnPatternSet).ExecuteSet(tlPatternSetResultType.Functional);
```

### 1.3 Get failed core(ssh/icl) instance list

```cs
var ssnTcResults = TheHdw.Digital.Patgen.ReadScanNetworkResults();
var failedCoreList = ssnTcResults.FailedCores;
```

### 1.4 Is CMEM full? [1.5 Mask-n-Reburst](#15-mask-failed-coresshicl-instance-and-goto-12-burst-patternset), [1.6 Conclude](#16-tc-flow-complete)

```cs

```

### 1.5 Mask failed core(ssh/icl) instance and goto [1.2 burst pattern(set)](#12-burst-patternset)

```cs
var ssnPattern = TheHdw.Digital.ScanNetworks[ssnMapfileName];
ssnPattern.CoreMasks.AddPerSite(failedCoreList);
ssnPattern.CoreMasks.Apply();
```

### 1.6 TC Flow Complete

## 2. Non-Diagnosis TestFlow if all ssh are OCComp = on (On-Chip Compare Flow)

```mermaid
stateDiagram-v2
s2 : On-Chip Compare Flow
s2.1 : Setup for Initial Burst
s2.2 : Burst pattern(set)
s2.3 : Get failed core(ssh/icl) instance list

[*] --> s2 
state s2{
[*] --> s2.1
s2.1 --> s2.2
s2.2 --> s2.3
s2.3 --> [*]
}
```

### 2.1 Setup Initial Burst

The difference between TC and OCComp is that in OCComp user only cares about sticky_bit status. (all the sticky_bits)
So before the Initial Burst of the pattern, it is better to __Mask__ all output pins except the JTAG tdo pin.

### 2.2 Burst Pattern(set)

### 2.3 Get failed core(ssh/icl) instance list (by sticky_bit on tdo pin)

### 2.4 OCComp Flow Complete

## 3. TC + OCComp Joint Flow (None-Diagnosis)

```mermaid
stateDiagram-v2
s3 : TC + OCComp Joint Flow
s3.1 : Setup for Initial Burst (Mask all OCComp representative_ssh)
s3.2 : Burst pattern(set)
s3.3 : Get TC failed core(ssh/icl) instance list
s3.4 : Is CMEM full?
s3.5 : Mask TC failed core(ssh/icl) instance
s3.6 : Get OCComp failed core(ssh/icl) instance list
s3.7 : Are all TC core(ssh/icl) instances Masked?
s3.8 : Mask all compare pins except JTAG tdo
s3.9 : Summarize all failed cores

[*] --> s3
state s3 {
[*] --> s3.1
s3.1 --> s3.2
s3.2 --> s3.3
s3.3 --> s3.4
s3.4 --> s3.7 : Yes
s3.7 --> s3.8 : yes
s3.7 --> s3.5 : No
s3.5 --> s3.2
s3.8 -->s3.2
s3.4 --> s3.6 : No
s3.6 --> s3.9
s3.9 --> [*]
}
```

### 3.1 Setup Initial Burst

In this case, all representative_ssh instances shall be TC masked before Initial Burst since we don't want them to consume CMEM, and we don't need them to determine any OCComp ssh-icl-instance's pass fail status.

### 3.2 Burst Pattern(set)

### 3.3 Get TC failed core(ssh/icl) instance list

### 3.4 Is CMEM full? [3.5 Mask-TC-n-Reburst](#35-mask-failed-coresshicl-instance-and-goto-32-burst-patternset), [3.6 Get OCComp failed cores](#36-get-occomp-failed-coresshicl-instance-list-by-sticky_bit-on-tdo-pin)

If CMEM is NOT full, it means that all sticky_bit fails on JTAG tdo pin are captured completely.

### 3.5 Mask failed core(ssh/icl) instance and goto [3.2 Burst pattern(set)](#32-burst-patternset)

```cs
var ssnPattern = TheHdw.Digital.ScanNetworks[ssnMapfileName];
ssnPattern.CoreMasks.AddPerSite(failedCoreList);
ssnPattern.CoreMasks.Apply();
```

in case that all TC core instances are masked and yet still the CMEM is full, it is possible that none-scan compares are eating up the CMEM. in which case we need to mask all output pins except the tdo pins just like what we do in [2.1 Setup for OCComp Initial Burst](#21-setup-initial-burst)

```cs

```

### 3.6 Get OCComp failed core(ssh/icl) instance list (by sticky_bit on tdo pin)

```cs

```

### 3.7 TC+OCComp Joint Flow complete

## 4. Diagnosis Flow

Failures may be captured in:

- Internal scan chains if target core
- Wrapper chain of child core

![alt text](./media/ssn-multi-ssh.png)
Failures from targeted core and child cores must be diagnosed together

And since TC + OCComp Joint Flow can cover the first two cases, we will only implement the TC + OCComp Joint Flow. So, the Diagnosis Flow shall be:

```mermaid
stateDiagram-v2
s3 : SSN SCAN None-Diagnosis Flow
s3.x : See ___TC + OCComp Joint Flow (None-Diagnosis)___
s4 : SSN SCAN Diagnosis Flow
s4.p : Parallel Diagnosis Flow
s4.s : Serial Diagnosis Flow

s4.1p : Enable as much failed cores as possible from the To-Be-Diagnosed List
s4.1s : Enable the next failed core in the To-Be-Diagnosed List
s4.2p : Setup Datalog for SCAN Diagnosis (DTR/STR)
s4.2s : Setup Datalog for SCAN Diagnosis (DTR/STR)
s4.3p : ReBurst Pattern(set)
s4.3s : ReBurst Pattern(set)


[*] --> s3
state s3 {
    [*] --> s3.x
    s3.x --> [*]
}

s3 --> s4 : need to get failed __ssh_icl_instance__ list before Diagnosis Flow
state s4 {
    [*] --> s4.p : Option 1, Test as many failed cores as possible for each reburst 
    s4.p --> [*]
    [*] --> s4.s : Option 2, Test one failed core at a time for each reburst 
    s4.s --> [*]
}

state s4.p {
    [*] --> s4.1p
    s4.1p --> s4.2p
    s4.2p --> s4.3p
    s4.3p --> s4.1p : if the To-Be-Diagnosed List is NOT empty
    s4.3p --> [*] : if the To-Be-Diagnosed List is empty
}

state s4.s {
    [*] --> s4.1s
    s4.1s --> s4.2s
    s4.2s --> s4.3s
    s4.3s --> s4.1s  : if the To-Be-Diagnosed List is NOT empty
    s4.3s --> [*]  : if the To-Be-Diagnosed List is empty
}

```

> :bulb: __Completing [TC + OCComp Joint Flow](#3-tc--occomp-joint-flow-none-diagnosis) is required before Diagnosis Flow__

### 4.1 Setup Device for Diagnosing Failed Core(s)

- Serial Reburst: one failed core at a time
- Parallel Reburst: as many failed cores as possible per burst

### 4.2 Setup Datalog for SCAN Diagnosis

DTR and CONDITION_LIST of STR need to be configured before bursting the pattern

### 4.3 Burst Pattern(set)

(nothing special)
