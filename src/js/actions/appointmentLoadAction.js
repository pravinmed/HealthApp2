import * as types from './actionTypes';

export function loadAppointment(appointment) {
  console.log(" in the load Appointment Action"); 
    return {
        type: types.LOAD_APPOINTMENT_DOCTOR,
        appointment: appointment
    };
}