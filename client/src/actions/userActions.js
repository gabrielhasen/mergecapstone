import axios from 'axios';

import { GET_USERS, USERS_LOADING } from './types';

//Get all Users
export const getUsers = () => dispatch => {
    dispatch(getUsersLoading());
    axios   
        .get('http://localhost:5000/api/users/getUsers')
        .then(res =>
            dispatch({
                type: GET_USERS,
                payload: res.data.user
            })
        )
        .catch(err =>
            dispatch({
                type: GET_USERS,
                payload: null
            })
        );
};

//Get users loading
export const getUsersLoading = () => {
    return {
        type: USERS_LOADING
    };
};