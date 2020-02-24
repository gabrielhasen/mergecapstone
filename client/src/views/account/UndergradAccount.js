import React from 'react';
import Typography from '@material-ui/core/Typography';
import MaterialTable from 'material-table';

import Dashboard from '../../component/dashboard/Dashboard';
import { mainListItems, secondaryListItems } from '../../layouts/undergrad/UndergradRoutes';
import DropDown from '../../component/DropDown';
import { makeStyles, Grid } from '@material-ui/core';

import { forwardRef } from 'react';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

const tableIcons = {
    //DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  };

const useStyles = makeStyles(theme => ({
  dropdown: {
    justifyContent: 'flex-start',
    padding: theme.spacing(4)
  },
}));

const UndergradAccount = props => {
  const classes = useStyles();
    return (
      <Dashboard mainList={mainListItems} secondList={secondaryListItems}>
          <Grid className={classes.dropdown} container item xs={12}>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Account
            </Typography>
          </Grid>
          <Grid className={classes.dropdown} item xs={12}> 
          <MaterialTable
            icons={tableIcons}
            title="Reservations"
            columns={[
              { title: 'Date', field: 'date' },
              { title: 'Machine', field: 'machine' },
              { title: 'Billing Code', field: 'bill', type: 'numeric' },
            ]}
            data={[
              { date: '02-20-2020', machine: '3D Printer', bill: 12345 },
            ]}
            options={{
              exportButton: false,
              search: false
            }}
          />
          </Grid> 
      </Dashboard>
    );
};

export default UndergradAccount;