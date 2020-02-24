import React from 'react';
import Typography from '@material-ui/core/Typography';
import MaterialTable from 'material-table';

import Dashboard from '../../component/dashboard/Dashboard';
import { mainListItems, secondaryListItems } from '../../layouts/admin/AdminRoutes';
import DropDown from '../../component/DropDown';
import { makeStyles, Grid } from '@material-ui/core';

import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

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
              Account 
            </Typography>
          </Grid>
          <Grid className={classes.dropdown} item xs={12}> 
          <MaterialTable
            title="Reservations"
            columns={[
              { title: 'Date', field: 'date' },
              { title: 'Name', field: 'name' },
              { title: 'Machine', field: 'machine' },
              { title: 'Billing Code', field: 'bill', type: 'numeric' },
            ]}
            data={[
              { date: '02-20-2020', name: 'Joe Vandal', machine: '3D Printer', bill: 12345 },
            ]}
            actions={[
              {
                icon: () => <DeleteOutline />,
                tooltip: 'Delete User',
                onClick: (event, rowData) => window.confirm("You want to delete " + rowData.name)
              }
            ]}
            options={{
              exportButton: true,
            }}
            icons={tableIcons}
          />
          </Grid> 
      </Dashboard>
    );
};

export default AdminAccount;