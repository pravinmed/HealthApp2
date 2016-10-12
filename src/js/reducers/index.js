import {combineReducers} from 'redux';
import appointments from "./appointmentsReducer";
import doctors from "./doctorsReducer";
import initialState from "./initialState";
import identity from "./identityReducer";
import ajaxCallInProgress from "./ajaxReducer";


const rootReducer = combineReducers({
    doctors:doctors,
    appointments:appointments,
    identity:identity,
    isDoctor:(state = initialState.isDoctor) => state,
    ajaxCallInProgress:ajaxCallInProgress
});

export default rootReducer;