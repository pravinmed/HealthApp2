import * as types from './actionTypes';


export function loadDoctor(doctors) {
    return {
        type: types.LOAD_DOCTOR_SUCCESS,
        doctors: doctors
    };
}

export function filterDoctor(doctors)
{
    return {
        type:types.UPDATE_DOCTOR_SUCCESS,
        doctors:doctors
    };
}

