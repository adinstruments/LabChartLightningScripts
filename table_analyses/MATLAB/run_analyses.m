%% ----------------------------------------------------------------------------

data_dir = '..';

%% ----------------------------------------------------------------------------

fprintf('%s\n', repelem('-', 1, 80));
fprintf('Loading raw data...\n');
fprintf('\n');

data = readtable(fullfile(data_dir, 'simple_raw.csv'))

%% ----------------------------------------------------------------------------

fprintf('%s\n', repelem('-', 1, 80));
fprintf('Processing data...\n');
fprintf('\n');

% Only retain the group/subject and numeric data
data = data(:, {'group', 'subject', 'value'})

%% ----------------------------------------------------------------------------

fprintf('%s\n', repelem('-', 1, 80));
fprintf('Running statistics...\n');
fprintf('\n');

grpstats(data, 'group', {'mean', 'std'}, 'DataVars', 'value')

ttest2(...
    data.value(strcmp(data.group, 'Thumb')), ...
    data.value(strcmp(data.group, 'Finger')), ...
    'Tail', 'both')

%% ----------------------------------------------------------------------------

fprintf('%s\n', repelem('-', 1, 80));

%% ----------------------------------------------------------------------------
