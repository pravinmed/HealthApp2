import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function identityReducer(state = initialState.identity, action) {
    switch(action.type) {
        case types.USER_SIGNUP_SUCCESS:
            return action.identity;

        case types.USER_LOGIN_SUCCESS:
            return action.identity;

        case types.USER_LOGOUT_SUCCESS:
            return action.identity;

        default:
            return state;
    }
}