import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function patientsReducer(state = initialState.patients, action) {
    switch(action.type) {
        case types.LOAD_PATIENT_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.patients)
            ];

        default:
            return state;
    }
}
