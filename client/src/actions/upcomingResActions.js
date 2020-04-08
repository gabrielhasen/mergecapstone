import axios from 'axios';

import { GET_UPCOMING_RESERVATIONS, RESERVATIONS_LOADING } from './types';

export const getUpcomingReservations = () => dispatch => {
    dispatch(setReservationsLoading());
    axios
        .get('/api/reservations/getUpcomingRes')
        .then(res =>
            dispatch({
                type: GET_UPCOMING_RESERVATIONS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_UPCOMING_RESERVATIONS,
                payload: null
            })
        );
};

export const setReservationsLoading = () => {
    return {
        type: RESERVATIONS_LOADING
    };
};