import React, { Component, useEffect } from 'react';
import MaterialTable from 'material-table';
import { compose } from 'redux';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Typography from '@material-ui/core/Typography';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Menu from '../menu/Menu';
import { mainListItems } from '../menu/routes/AdminRoutes';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import { forwardRef } from 'react';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import muiTheme from '../../theme/muiTheme';
import axios from "axios";

const tableIcons = {
    //DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
};

const styles = theme => ({
    dropdown: {
        justifyContent: 'flex-start',
        padding: theme.spacing(4)
    },
});



class ManageUsers extends Component {

    constructor(props) {
        super(props);
        this.state = { userCollection: [] };
    }

    //Use to Secure maybe?
    componentDidMount() {
        axios.get('http://localhost:5000/api/users/getUsers', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                console.log(res.data);
                this.setState({ userCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

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
                            Manage Users
            </Typography>
                    </Grid>
                    <Grid className={classes.dropdown} item xs={12}>
                        <MaterialTable
                            title="All Users"
                            columns={[
                                { title: 'Name', field: 'name', editable: 'never' },
                                { title: 'E-mail', field: 'email', editable: 'never' },
                                { title: 'Role', field: 'role', editable: 'onUpdate', lookup: { undergrad: 'Undergraduate', grad: 'Graduate', admin: 'Administrator' } },
                            ]}
                            data={query =>
                                new Promise((resolve, reject) => {
                                    let url = 'http://localhost:5000/api/users/getUsers'
                                    fetch(url)
                                        .then(response => response.json())
                                        .then(result => {
                                            console.log(result)
                                            resolve({
                                                data: result.user,
                                            })
                                        })
                                })
                            }
                        editable={{
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        {
                                            const data = this.state.data;
                                            const index = data.indexOf(oldData);
                                            data[index] = newData;
                                            this.setState({ data }, () => resolve());
                                        }
                                        resolve()
                                    }, 1000)
                                }),
                        }}
                        options={{
                            exportButton: false,
                            search: true,
                        }}
                        />
                    </Grid>
                </Menu>
            </MuiThemeProvider>
        );
    }
}

ManageUsers.propTypes = {
    classes: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default compose(
    withStyles(styles),
    connect(mapStateToProps, { logoutUser })
)(ManageUsers);