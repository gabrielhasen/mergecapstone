import axios from 'axios';

import { GET_CODES, CODES_LOADING, DELETE_CODE } from './types';

//Get All Billing Codes
export const getCodes = () => dispatch => {
    dispatch(setCodesLoading());
    axios   
        .get('/api/billingcodes/getCodes')
        .then(res =>
            dispatch({
                type: GET_CODES,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_CODES,
                payload: null
            })
        );
};

//Billing Codes Loading
export const setCodesLoading = () => {
    return {
        type: CODES_LOADING
    };
};