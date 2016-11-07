import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxCallInProgressReducer(state = initialState.ajaxCallInProgress, action) {
    switch(action.type) {
        case types.AJAX_CALL_IN_PROGRESS:
            return action.ajaxCallInProgress;
        default:
            return state;
    }
}