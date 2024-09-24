# Analyses of table data from LabChart Lightning

This repository contains a set of example scripts for analysing summary data
exported from the table in
[LabChart Lightning](https://www.adinstruments.com/products/labchart/lightning).

LabChart Lightning can export the table data in two formats. Firstly, there is
a 'standard' format where the exported table data is arranged in the same way
as it is displayed in the application. This format is designed for use with
Excel and other spreadsheet editors. Secondly, there is a 'raw' format that is
designed to be machine readable. This is intended for running analyses using
software languages like Python or R.

The repository contains:
 + A 'simple' example project, `simple.lclpak`. This contains data from
   multiple subjects across two groups. The question is whether there is a
   group difference in the collected data. The data exported from the table
   can be found in `simple_standard.csv` and `simple_raw.csv`.
 + A set of example scripts that demonstrate how to run analyses of the
   exported data in the raw format for different programming languages:
    + [`python/`](./python)
    + [`R/`](./R)
