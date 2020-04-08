import axios from 'axios';

import { GET_ALL_RESERVATIONS, RESERVATIONS_LOADING } from '../actions/types';

export const getAllReservations = () => dispatch => {
    dispatch(setReservationsLoading());
    axios
        .get('/api/reservations/getRes')
        .then(res =>
            dispatch({
                type: GET_ALL_RESERVATIONS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ALL_RESERVATIONS,
                payload: null
            })
        );
};

export const setReservationsLoading = () => {
    return {
        type: RESERVATIONS_LOADING
    };
};