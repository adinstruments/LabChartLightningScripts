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

# Set the group/subject columns as the index
data = data.set_index(["group", "subject"])
# Only retain the numeric data
data = data.loc[:, "value"]

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
