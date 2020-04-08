import { GET_UPCOMING_RESERVATIONS, RESERVATIONS_LOADING } from '../actions/types';

const initialState = {
    upcomingreservations: [],
    upcomingreservationsLoading: false
};

export default function(state = initialState, action)
{
    switch(action.type)
    {
        case GET_UPCOMING_RESERVATIONS:
            return {
                ...state,
                upcomingreservations: action.payload,
                upcomingreservationsLoading: false
            };

        case RESERVATIONS_LOADING:
            return {
                ...state,
                upcomingreservationsLoading: true
            };

        default:
            return state;
    }
}