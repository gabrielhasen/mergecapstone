import axios from 'axios';

import { GET_MACHINES, MACHINES_LOADING } from '../actions/types';

//Get all machines
export const getMachines = () => dispatch => {
    dispatch(getMachinesLoading());
    axios   
        .get('/api/machines/getAll')
        .then(res =>
            dispatch({
                type: GET_MACHINES,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_MACHINES,
                payload: null
            })
        );
};

//Get machines loading
export const getMachinesLoading = () => {
    return {
        type: MACHINES_LOADING
    };
};