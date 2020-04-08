import { GET_ALL_RESERVATIONS, RESERVATIONS_LOADING } from '../actions/types';

const initialState = {
    reservations: [],
    reservationsLoading: false
};

export default function(state = initialState, action)
{
    switch(action.type)
    {
        case GET_ALL_RESERVATIONS:
            return {
                ...state,
                reservations: action.payload,
                reservationsLoading: false
            };

        case RESERVATIONS_LOADING:
            return {
                ...state,
                reservationsLoading: true
            };

        default:
            return state;
    }
}