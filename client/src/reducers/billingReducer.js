import { GET_CODES, CODES_LOADING, DELETE_CODE } from '../actions/types';

const initialState = {
    codes: [],
    codesLoading: false
};

export default function(state = initialState, action)
{
    switch(action.type)
    {
        case DELETE_CODE:
            return {
                ...state,
                codes: state.codes.filter(
                    codes => codes._id !== action.payload
                )
            };

        case GET_CODES:
            return {
                ...state, 
                codes: action.payload,
                codesLoading: false
            };
        
        case CODES_LOADING:
            return {
                ...state,
                codesLoading: true
            };

        default:
            return state;
    }
}