import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Dashboard from '../../component/dashboard/Dashboard';
import ViewOnlyCalendar from '../../component/calendar/ViewOnlyCalendar';
import { mainListItems, secondaryListItems } from '../../layouts/guest/GuestRoutes';
import DropDown from '../../component/DropDown';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  dropdown: {
    justifyContent: 'space-between',
    padding: theme.spacing(4)
  },
  button: {
    justifyContent: 'flex-start',
    padding: theme.spacing(4)
  },
  calendar: {
    justifyContent: 'center'
  }
}));

const GuestHome = props => {
  const classes = useStyles();
    return (
      <Dashboard mainList={mainListItems} secondList={secondaryListItems}>
          <Grid className={classes.dropdown} container item xs={12}>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Reservations
            </Typography>
            <DropDown />
          </Grid>
        <Grid className={classes.calendar} container item xs={12}>
            <ViewOnlyCalendar />
        </Grid>
      </Dashboard>
    );
};

export default GuestHome;