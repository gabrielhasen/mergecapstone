import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import Dashboard from '../../component/dashboard/Dashboard';
import Sched from '../../component/calendar/Sched';
import { mainListItems, secondaryListItems } from '../../layouts/guest/GuestRoutes';
import DropDown from '../../component/DropDown';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  dropdown: {
    justifyContent: 'flex-end',
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
            <DropDown />
          </Grid>
        <Grid className={classes.calendar} container item xs={12}>
            <Sched />
        </Grid>
      </Dashboard>
    );
};

export default GuestHome;