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
import { mainListItems } from '../menu/routes/GradRoutes';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import muiTheme from '../../theme/muiTheme';

import Scheduler from "react-big-scheduler";
import {
    prevClick,
    nextClick,
    onViewChange,
    onSelectDate,
    newEvent,
    loadAgendaData
} from '../../actions/schedulerActions';
import "react-big-scheduler/lib/css/style.css";

import withDragDropContext from "../calendar/components/WithDndContext";

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
    },
    card: {
        margin: theme.spacing(2),
    }
});


class GradHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newReservation: [],
            new: false
        };
    }

    componentDidMount = () => {
        this.props.loadAgendaData();
    }


    prevClick = () => { this.props.prevClick() }
    nextClick = () => { this.props.nextClick() }
    onViewChange = (schedulerData, view) => { this.props.onViewChange(schedulerData, view) }
    onSelectDate = (schedulerData, date) => { this.props.onSelectDate(schedulerData, date) }
    newEvent = (schedulerData, slotId, slotName, start, end, type, item) => { this.props.newEvent(schedulerData, slotId, slotName, start, end, type, item); }


    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { classes } = this.props;

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
                            Reservations
                        </Typography>
                    </Grid>
                    {/* <Grid className={classes.calendar} container item xs={12}> */}
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography>Step 1. Reserve Time on a Machine</Typography>
                            <p>Click and drag on the calendar to reserve time on a given machine below. You may only make one reservation at a time.</p>
                        </CardContent>
                        <Scheduler
                            schedulerData={this.props.viewModel}
                            prevClick={this.prevClick}
                            nextClick={this.nextClick}
                            onSelectDate={this.onSelectDate}
                            onViewChange={this.onViewChange}
                            newEvent={this.newEvent}
                            onScrollTop={this.onScrollTop}
                            onScrollBottom={this.onScrollBottom}
                            toggleExpandFunc={this.toggleExpandFunc}
                        />
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography>
                                Step 2. Reservation Information
                                <form noValidate>
                                    <TextField
                                        id="standard-basic"
                                        label="Billing Code"
                                    />
                                </form>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="contained" color="secondary">Reserve</Button>
                        </CardActions>
                    </Card>
                </Menu>
            </MuiThemeProvider>
        );
    }
}

GradHome.propTypes = {
    classes: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    viewModel: state.schedulerData,
    auth: state.auth
});

export default compose(
    withStyles(styles),
    connect(mapStateToProps, { logoutUser, prevClick, nextClick, onViewChange, onSelectDate, newEvent, loadAgendaData }),
    withDragDropContext
)(GradHome);