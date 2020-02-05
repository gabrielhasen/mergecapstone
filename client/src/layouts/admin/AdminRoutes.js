import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import BuildIcon from '@material-ui/icons/Build';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EventTwoToneIcon from '@material-ui/icons/EventTwoTone';

export const mainListItems = (
  <div>
    <ListSubheader inset></ListSubheader>
    <ListItem button component="a" href="/admin">
      <ListItemIcon>
        <EventTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="Reservations" />
    </ListItem>
    <ListItem button component="a" href="/admin-account">
      <ListItemIcon>
        <BuildIcon />
      </ListItemIcon>
      <ListItemText primary="Account" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button component="a" href="/home">
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);