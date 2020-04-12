import React, { Component } from 'react';
import { compose } from 'redux';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Menu from '../menu/Menu';
import Calendar from '../calendar/Calendar';
import { mainListItems } from '../menu/routes/UndergradRoutes';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import muiTheme from '../../theme/muiTheme';

const styles = theme => ({
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
});


class UndergradHome extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { classes } = this.props;
        //const { user } = this.props.auth;

        const logout = (
            <div>
                <ListItem button onClick={this.onLogoutClick}>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
            </div>
        );

        return (
            <MuiThemeProvider theme={muiTheme}>
                <Menu mainList={mainListItems} secondList={logout}>
                    <Grid className={classes.dropdown} container item xs={12}>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            Reservation
                        </Typography>
                        {/* <Typography component="h6" variant="h6" color="inherit" noWrap className={classes.title}>
                            Select a Reservation Time
                        </Typography> */}
                        <Typography>
                            Step #. Filler Text 
                        </Typography>
                    </Grid>
                    <Grid className={classes.calendar} container item xs={12}>
                        <Calendar />
                    </Grid>
                    <Grid className={classes.button} container item xs={12}>
                        <Button href="\u-reservations" variant="contained">Make Reservation</Button>
                    </Grid>
                </Menu>
            </MuiThemeProvider>
        );
    }
}

UndergradHome.propTypes = {
    classes: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
  });

//export default withStyles(styles)(UndergradHome);
//export default connect( mapStateToProps, { logoutUser })(UndergradHome);
export default compose(
    withStyles(styles),
    connect(mapStateToProps, { logoutUser })
)(UndergradHome);