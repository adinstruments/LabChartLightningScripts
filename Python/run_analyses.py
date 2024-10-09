#!/usr/bin/env python
# -*- coding: utf-8 -*-

import pandas as pd
from pathlib import Path
import scipy.stats

# -----------------------------------------------------------------------------

data_dir = Path("..")

# -----------------------------------------------------------------------------

print("-" * 80)
print("Loading raw data...")
print()

data = pd.read_csv(data_dir / "simple_raw.csv", header=0)
print(data)
print()

# -----------------------------------------------------------------------------

print("-" * 80)
print("Processing data...")
print()

# Reshape the data so that we get:
#  + The group/subject columns to index the rows
#  + The calculation/unit to index the columns
#  + Only retain the numeric values (i.e. drop the recording/signal info)
# For more complex data, more of the columns can be included to disambiguate
# the numeric values.
data = pd.pivot(
    data,
    index=["group", "subject"],
    columns=["calculation", "unit"],
    values="value",
)
# Pull out the data as a series rather than a full dataframe
data = data.loc[:, ("Mean", "BPM")]

print(data)
print()

# -----------------------------------------------------------------------------

print("-" * 80)
print("Running statistics...")
print()

summary_stats = data.groupby(level=0).aggregate(["mean", "std"])
print(summary_stats)
print()

stats = scipy.stats.ttest_ind(
    data.loc["Thumb"], data.loc["Finger"], alternative="two-sided"
)
print(stats)
print()

# -----------------------------------------------------------------------------

print("-" * 80)

# -----------------------------------------------------------------------------
