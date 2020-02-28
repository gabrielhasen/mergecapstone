import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import BuildIcon from '@material-ui/icons/Build';
import EventTwoToneIcon from '@material-ui/icons/EventTwoTone';
import PersonIcon from '@material-ui/icons/Person';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';


export const mainListItems = (
  <div>
    <ListSubheader inset></ListSubheader>
    <ListItem button component="a" href="/manage-reservations">
      <ListItemIcon>
        <EventTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="Manage Reservations" />
    </ListItem>
    <ListItem button component="a" href="/manage-machines">
      <ListItemIcon>
        <BuildIcon />
      </ListItemIcon>
      <ListItemText primary="Manage Machines" />
    </ListItem>
    <ListItem button component="a" href="/manage-users">
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Manage Users" />
    </ListItem>
    <ListItem button component="a" href="/manage-billing">
      <ListItemIcon>
        <AccountBalanceIcon />
      </ListItemIcon>
      <ListItemText primary="Manage Billing Codes" />
    </ListItem>
    <ListItem button component="a" href="/manage-hours">
      <ListItemIcon>
        <AssignmentIndIcon />
      </ListItemIcon>
      <ListItemText primary="Manage Hours" />
    </ListItem>
  </div>
);
