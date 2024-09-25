# MATLAB: Analyses of table data from LabChart Lightning

Running t-tests etc. requires the Statistics and Machine Learning Toolbox. We
have provided skeleton code to run the analyses assuming that this is
available.

Running an analysis of the table data from the simple project can done by
running the provided script within MATLAB:
```matlab
run_analyses
```

This should produce the following output:
```
--------------------------------------------------------------------------------
Loading raw data...


data =

  6×11 table

      group        subject                     recording                     regionType       regionStartBlock    regionStartTime_s    regionDuration_s                signal                 unit      calculation    value
    __________    __________    _______________________________________    _______________    ________________    _________________    ________________    ______________________________    _______    ___________    ______

    {'Thumb' }    {'sub-01'}    {'Recordings/sub-01_2023-07-31.lclrec'}    {'Measurement'}           0                   10                   40           {'Pulse Transducer_bpf_eRate'}    {'BPM'}     {'Mean'}      74.954
    {'Thumb' }    {'sub-04'}    {'Recordings/sub-04_2023-07-31.lclrec'}    {'Measurement'}           0                   10                   40           {'Pulse Transducer_bpf_eRate'}    {'BPM'}     {'Mean'}      81.639
    {'Thumb' }    {'sub-05'}    {'Recordings/sub-05_2023-07-31.lclrec'}    {'Measurement'}           0                   10                   40           {'Pulse Transducer_bpf_eRate'}    {'BPM'}     {'Mean'}      72.717
    {'Finger'}    {'sub-02'}    {'Recordings/sub-02_2023-07-31.lclrec'}    {'Measurement'}           0                   10                   40           {'Pulse Transducer_bpf_eRate'}    {'BPM'}     {'Mean'}      80.717
    {'Finger'}    {'sub-03'}    {'Recordings/sub-03_2023-07-31.lclrec'}    {'Measurement'}           0                   10                   40           {'Pulse Transducer_bpf_eRate'}    {'BPM'}     {'Mean'}      85.683
    {'Finger'}    {'sub-06'}    {'Recordings/sub-06_2023-07-31.lclrec'}    {'Measurement'}           0                   10                   40           {'Pulse Transducer_bpf_eRate'}    {'BPM'}     {'Mean'}      76.916

--------------------------------------------------------------------------------
Processing data...


data =

  6×3 table

      group        subject      value
    __________    __________    ______

    {'Thumb' }    {'sub-01'}    74.954
    {'Thumb' }    {'sub-04'}    81.639
    {'Thumb' }    {'sub-05'}    72.717
    {'Finger'}    {'sub-02'}    80.717
    {'Finger'}    {'sub-03'}    85.683
    {'Finger'}    {'sub-06'}    76.916

--------------------------------------------------------------------------------
Running statistics...

...
[Requires Statistics and Machine Learning Toolbox]
...

--------------------------------------------------------------------------------
```
