#!/usr/bin/env Rscript

library(tidyverse)

cat_line <- function(...) cat(..., "\n", sep = "")

# -----------------------------------------------------------------------------

data_dir <- ".."

# -----------------------------------------------------------------------------

cat_line(rep("-", 80), collapse = "")
cat_line("Loading raw data...")
cat_line()

data <- read_csv(
    file.path(data_dir, "simple_raw.csv"),
    col_names = TRUE,
    show_col_types = FALSE
)
print(data)
cat_line()

# -----------------------------------------------------------------------------

cat_line(rep("-", 80), collapse = "")
cat_line("Processing data...")
cat_line()

# Only retain the group/subject columns and the numeric data
data <- data %>%
    select(group, subject, value)

print(data)
cat_line()

# -----------------------------------------------------------------------------

cat_line(rep("-", 80), collapse = "")
cat_line("Running statistics...")
cat_line()

summary_stats <- data %>%
    group_by(group) %>%
    summarise(mean = mean(value), sd = sd(value))
print(summary_stats)
cat_line()

stats <- t.test(data$value ~ data$group, alternative = "two.sided")
print(stats)

# -----------------------------------------------------------------------------

cat_line(rep("-", 80), collapse = "")

# -----------------------------------------------------------------------------
