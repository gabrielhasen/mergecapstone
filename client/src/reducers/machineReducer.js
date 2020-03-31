import { GET_MACHINES, MACHINES_LOADING } from '../actions/types';

const initialState = {
    machines: [],
    machinesLoading: false
};

export default function(state = initialState, action)
{
    switch(action.type)
    {
        case GET_MACHINES:
            return {
                ...state,
                machines: action.payload,
                machinesLoading: false
            };

        case MACHINES_LOADING:
            return {
                ...state,
                machinesLoading: true
            };

        default:
            return state;
    }
}