import React, {PropTypes} from 'react';


const MyAppointmentItem = ({id,name,address, location,timeOfAppt, onCancel}) => {
	console.log(" In the MyAppointment Item ");
  return (
  	<div>
     <ul class="nav navbar-nav">
       <li>{timeOfAppt}</li>
       <li>{name} </li>
       <li> {address}</li>
       <li> {location}</li>
       <li> 	<button type="button" class="btn btn-primary" onClick = {onCancel}>Cancel </button></li>
      </ul> 
    </div>
  );
};


export default MyAppointmentItem;