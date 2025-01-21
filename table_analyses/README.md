# Analyses of table data from LabChart Lightning

[LabChart Lightning](https://adi.to/LabChartLightning)
is the next generation data acquisition and analysis application from
ADInstruments. The table is an incredibly powerful feature that pulls together
summary data from different recordings into one place, allowing you to collate,
visualise, and analyse all of your data.
[See here](https://www.adinstruments.com/support/videos/cross-recording-analysis-labchart-lightning)
for an overview of how to use the table.

This folder contains a set of example scripts that you can use to run
statistical analyses of the summary data exported from the table. We provide
template scripts, for a number of different programming languages, that show
how to load, arrange, and analyse this table data and that you can adapt for
your data and specific research questions.

---

LabChart Lightning can export the table data in two formats. Firstly, there is
a 'standard' format where the exported table data is arranged in the same way
as it is displayed in the application. This format is designed for use with
Excel and other spreadsheet editors. Secondly, there is a 'raw' format that is
designed to be machine readable. This is intended for running analyses using
software languages like Python or R.

This folder contains:
 + A 'simple' example project, `simple.lclpak`. This contains data from
   multiple subjects across two groups. The question is whether there is a
   group difference in the collected data. The data exported from the table
   can be found in `simple_standard.csv` and `simple_raw.csv`.
 + A set of example scripts that demonstrate how to run analyses of the
   exported data in the raw format for different programming languages:
    + [`JASP/`](./JASP)
    + [`MATLAB/`](./MATLAB)
    + [`Python/`](./Python)
    + [`R/`](./R)

---

<!---
https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#specifying-the-theme-an-image-is-shown-to
--->
<a href="https://adi.to/LabChartLightning">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="/.images/lightning_logo-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="/.images/lightning_logo-light.png">
    <img src="/.images/lightning_logo-light.png">
  </picture>
</a>

[![LabChart Lightning](/.images/lightning_application.png)](https://adi.to/LabChartLightning)
