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

   Unnamed: 0 Unnamed: 1                 Measurement
0         NaN        NaN  Pulse Transducer_bpf_eRate
1         NaN        NaN                        Mean
2         NaN        NaN                         BPM
3      Thumb:       Mean                       76.44
4         NaN     sub-01                       74.95
5         NaN     sub-04                       81.64
6         NaN     sub-05                       72.72
7     Finger:       Mean                       81.11
8         NaN     sub-02                       80.72
9         NaN     sub-03                       85.68
10        NaN     sub-06                       76.92

--------------------------------------------------------------------------------
Processing data...

                Measurement
group  subject
Thumb  sub-01         74.95
       sub-04         81.64
       sub-05         72.72
Finger sub-02         80.72
       sub-03         85.68
       sub-06         76.92

--------------------------------------------------------------------------------
Running statistics...

       Measurement
              mean       std
group
Finger   81.106667  4.392782
Thumb    76.436667  4.642115

Ttest_indResult(statistic=-1.2656219021582897, pvalue=0.2743468357028812)

--------------------------------------------------------------------------------
```
