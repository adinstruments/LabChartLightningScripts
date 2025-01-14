# Python: Analyses of table data from LabChart Lightning

We use [uv](https://docs.astral.sh/uv) to manage dependencies, but
[pandas](https://pandas.pydata.org/) and [SciPy](https://scipy.org/) are all
that are needed to run the simple examples.

If Python is available and the dependencies are installed, then running an
analysis of the table data from the simple project can then be done using:
```shell
python run_analyses.py
```

However, we recommend using `uv` instead:
```shell
uv run run_analyses.py
```
While this is arguably overkill for this simple example, keeping track of any
dependencies via `pyproject.toml` and `uv.lock` makes sharing and reproducing
analyses far simpler.

This should produce the following output:
```
--------------------------------------------------------------------------------
Loading raw data...

    group subject  ... calculation      value
0   Thumb  sub-01  ...        Mean  74.953682
1   Thumb  sub-04  ...        Mean  81.638989
2   Thumb  sub-05  ...        Mean  72.717263
3  Finger  sub-02  ...        Mean  80.716828
4  Finger  sub-03  ...        Mean  85.683245
5  Finger  sub-06  ...        Mean  76.916489

[6 rows x 12 columns]

--------------------------------------------------------------------------------
Processing data...

group   subject
Finger  sub-02     80.716828
        sub-03     85.683245
        sub-06     76.916489
Thumb   sub-01     74.953682
        sub-04     81.638989
        sub-05     72.717263
Name: (Mean, BPM), dtype: float64

--------------------------------------------------------------------------------
Running statistics...

             mean       std
group
Finger  81.105521  4.396284
Thumb   76.436645  4.642056

TtestResult(statistic=np.float64(-1.2648492709117918), pvalue=np.float64(0.27459661375200434), df=np.float64(4.0))

--------------------------------------------------------------------------------
```
