import 'aws-sdk/dist/aws-sdk';

/*import { CognitoUserPool,
         CognitoUserAttribute,
         CognitoUser,
         AuthenticationDetails
         } from 'amazon-cognito-identity-js';*/

import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';

const COGNITO_USER_POOL_ID = 'us-east-1_TkMx1y7aE';
const COGNITO_CLIENT_ID = '4rasb8dmd950dc5moeoja9fo5c';
const COGNITO_IDENTITY_POOL_ID = 'us-east-1:462d69ac-8a4d-4f15-b8f6-63d0fcfb0d86';

export function userSignedIn() {
    return {
        type: types.USER_SIGNUP_SUCCESS
    };
}

export function userLoggedIn(identity) {
    return {
        type: types.USER_LOGIN_SUCCESS,
        identity: identity
    };
}

export function userLoggedOut() {
    let identityLocal ={username:''};
    return {
        type: types.USER_LOGOUT_SUCCESS,
        identity: identityLocal
    };
}
