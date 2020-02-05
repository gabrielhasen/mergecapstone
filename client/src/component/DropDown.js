import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const machines = [
  '3D Printer',
  'Mill',
  'Lathe',
];

function getStyles(name, machineName, theme) {
  return {
    fontWeight:
      machineName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const classes = useStyles();
  const theme = useTheme();
  const [machineName, setmachineName] = React.useState([]);

  const handleChange = event => {
    setmachineName(event.target.value);
  };

  return (
    <div>
      <FormControl className={clsx(classes.formControl, classes.noLabel)}>
        <Select
          displayEmpty
          value={machineName}
          onChange={handleChange}
        >
          <MenuItem  value="">All</MenuItem>
          {machines.map(name => (
            <MenuItem key={name} value={name} style={getStyles(name, machineName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}