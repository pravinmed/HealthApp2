import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function appointmentsReducer(state = initialState.appointments, action) {
    switch(action.type) {
        case types.LOAD_APPOINTMENT_DOCTOR:
            return action.appointment; 
        default:
            return state;
    }
    
}
