# R: Analyses of table data from LabChart Lightning

The `run_analyses.R` file uses packages from the
[tidyverse](https://www.tidyverse.org) ecosystem to load and preprocess the
exported table data. See, for example, the chapter on 'tidy data' in the
[R for Data Science book](https://r4ds.hadley.nz/data-tidy).

We use [renv](https://rstudio.github.io/renv/index.html) to manage
dependencies, but the tidyverse packages are all that are needed to run the
simple examples. While the analyses could also be performed using only base R,
we find that the coherent design philosophy of the tidyverse makes iterating on
data analysis workflows much more straightforward.

Running an analysis of the table data from the simple project can then be done
using:
```shell
Rscript run_analyses.R
```

This should produce the following output:
```
── Attaching core tidyverse packages ──────────────────────── tidyverse 2.0.0 ──
✔ dplyr     1.1.4     ✔ readr     2.1.5
✔ forcats   1.0.0     ✔ stringr   1.5.1
✔ ggplot2   3.5.1     ✔ tibble    3.2.1
✔ lubridate 1.9.3     ✔ tidyr     1.3.1
✔ purrr     1.0.2
── Conflicts ────────────────────────────────────────── tidyverse_conflicts() ──
✖ dplyr::filter() masks stats::filter()
✖ dplyr::lag()    masks stats::lag()
ℹ Use the conflicted package (<http://conflicted.r-lib.org/>) to force all conflicts to become errors
--------------------------------------------------------------------------------
Loading raw data...

# A tibble: 6 × 11
  group  subject recording         regionType regionStartBlock regionStartTime_s
  <chr>  <chr>   <chr>             <chr>                 <dbl>             <dbl>
1 Thumb  sub-01  Recordings/sub-0… Measureme…                0                10
2 Thumb  sub-04  Recordings/sub-0… Measureme…                0                10
3 Thumb  sub-05  Recordings/sub-0… Measureme…                0                10
4 Finger sub-02  Recordings/sub-0… Measureme…                0                10
5 Finger sub-03  Recordings/sub-0… Measureme…                0                10
6 Finger sub-06  Recordings/sub-0… Measureme…                0                10
# ℹ 5 more variables: regionDuration_s <dbl>, signal <chr>, unit <chr>,
#   calculation <chr>, value <dbl>

--------------------------------------------------------------------------------
Processing data...

# A tibble: 6 × 3
  group  subject value
  <chr>  <chr>   <dbl>
1 Thumb  sub-01   75.0
2 Thumb  sub-04   81.6
3 Thumb  sub-05   72.7
4 Finger sub-02   80.7
5 Finger sub-03   85.7
6 Finger sub-06   76.9

--------------------------------------------------------------------------------
Running statistics...

# A tibble: 2 × 3
  group   mean    sd
  <chr>  <dbl> <dbl>
1 Finger  81.1  4.40
2 Thumb   76.4  4.64


	Welch Two Sample t-test

data:  data$value by data$group
t = 1.2648, df = 3.9882, p-value = 0.2748
alternative hypothesis: true difference in means between group Finger and group Thumb is not equal to 0
95 percent confidence interval:
 -5.591627 14.929379
sample estimates:
mean in group Finger  mean in group Thumb
            81.10552             76.43664

--------------------------------------------------------------------------------
```
