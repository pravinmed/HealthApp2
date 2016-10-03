import {combineReducers} from 'redux';
import appointments from "./appointmentsReducer";
import doctors from "./doctorsReducer";
import initialState from "./initialState";

const rootReducer = combineReducers({
    doctors:doctors,
    appointments:appointments,
    isDoctor:(state = initialState.isDoctor) => state
});

export default rootReducer;