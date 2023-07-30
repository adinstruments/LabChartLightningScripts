#!/usr/bin/env python
# -*- coding: utf-8 -*-

import pandas as pd
from pathlib import Path
import scipy.stats

# -----------------------------------------------------------------------------

data_dir = Path('..')

# -----------------------------------------------------------------------------

print('-'*80)
print('Loading raw data...')
print()

data = pd.read_csv(
        data_dir / 'simple.csv',
        header=0,
        #names=['group', 'subject', 'data']
        )
print(data)
print()

# -----------------------------------------------------------------------------

print('-'*80)
print('Processing data...')
print()

# Add column names
data = data.rename(columns={ data.columns[0]: 'group', data.columns[1]: 'subject' })
# Tidy up group column
data['group'] = data['group'].str.replace(':', '').fillna(method='ffill')
# Drop extra header rows
data = data.dropna(axis='index', subset='subject')
# Drop summary rows (i.e. only keep subject data)
data = data.loc[data['subject'].str.startswith('sub-'), :]
# Set the group/subject columns as the index
data = data.set_index(['group', 'subject'])
# And tidy up type of raw data
data = data.apply(pd.to_numeric)
print(data)
print()

# -----------------------------------------------------------------------------

print('-'*80)
print('Running statistics...')
print()

summary_stats = data.groupby(level=0).aggregate(["mean", "std"])
print(summary_stats)
print()

stats = scipy.stats.ttest_ind(
        data.loc["Thumb", "Measurement"],
        data.loc["Finger", "Measurement"],
        alternative='two-sided')
print(stats)
print()

# -----------------------------------------------------------------------------

print('-'*80)

# -----------------------------------------------------------------------------
