import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function doctorsReducer(state = initialState.doctors, action) {
    switch(action.type) {
        case types.LOAD_DOCTOR_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.doctors)
            ];

        default:
            return state;
    }
}
