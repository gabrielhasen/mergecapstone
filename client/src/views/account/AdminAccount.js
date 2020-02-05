import React from 'react';
import Typography from '@material-ui/core/Typography';

import Dashboard from '../../component/dashboard/Dashboard';
import { mainListItems, secondaryListItems } from '../../layouts/admin/AdminRoutes';
import DropDown from '../../component/DropDown';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  dropdown: {
    justifyContent: 'flex-start',
    padding: theme.spacing(4)
  },
}));

const AdminAccount = props => {
  const classes = useStyles();
    return (
      <Dashboard mainList={mainListItems} secondList={secondaryListItems}>
          <Grid className={classes.dropdown} container item xs={12}>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Account (//TO DO)
            </Typography>
          </Grid>
      </Dashboard>
    );
};

export default AdminAccount;