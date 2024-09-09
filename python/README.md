# Python: Analyses of table data from LabChart Lightning

We use [Conda](https://conda.io) to manage dependencies, but 

```shell
conda env create --file environment.yml
conda activate lightning-analyses
./run_simple_analyses.py
```

This should produce the following output:
```
--------------------------------------------------------------------------------
Loading raw data...

    group subject                            recording  ... unit calculation  value
0   Thumb  sub-01  Recordings/sub-01_2023-07-31.lclrec  ...  BPM        Mean  74.95
1   Thumb  sub-04  Recordings/sub-04_2023-07-31.lclrec  ...  BPM        Mean  81.64
2   Thumb  sub-05  Recordings/sub-05_2023-07-31.lclrec  ...  BPM        Mean  72.72
3  Finger  sub-02  Recordings/sub-02_2023-07-31.lclrec  ...  BPM        Mean  80.72
4  Finger  sub-03  Recordings/sub-03_2023-07-31.lclrec  ...  BPM        Mean  85.68
5  Finger  sub-06  Recordings/sub-06_2023-07-31.lclrec  ...  BPM        Mean  76.92

[6 rows x 9 columns]

--------------------------------------------------------------------------------
Processing data...

group   subject
Thumb   sub-01     74.95
        sub-04     81.64
        sub-05     72.72
Finger  sub-02     80.72
        sub-03     85.68
        sub-06     76.92
Name: value, dtype: float64

--------------------------------------------------------------------------------
Running statistics...

             mean       std
group
Finger  81.106667  4.392782
Thumb   76.436667  4.642115

TtestResult(statistic=-1.2656219021582897, pvalue=0.2743468357028812, df=4.0)

--------------------------------------------------------------------------------
```
