import React from "react";
import DoctorsInfo from "../components/DoctorsInfo";
import {Link} from 'react-router';
import * as appointmentLoadAction from "../actions/appointmentLoadAction";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DoctorsInfoReview from "../components/DoctorsInfoReview";

export default class ConfirmAppointment extends React.Component {
 constructor(props)
 {
	super(props);
 }
 componentDidMount()
 {
  console.log(" Component DId mount  in ConfirmAppointment");
  
 }

 componentMounted()
 {
     console.log(" Component Mounted in ConfirmAppointment");
 }
 
 render() {
  	const appt = this.props.appointments;
  	if(appt.length === 0 || (appt.length === 1 && appt[0].email == 'NA'))
  	{
  		 return (
	    	<div>
	    	    <h3> You have no upcomming appointments</h3> 
	    	</div>
     	);
  	} else {
	    return (
	    	<div>
	    	   <ul>
	    	      <li> Confirmation Page </li>
	    	      <li> <DoctorsInfo  name={appt.name} email={appt.email} image_url={appt.image_url}  /></li>
	    		  <li><h3>You have Requested for an  appointment with Dr X  on  Day   </h3>
	    		    <Link to="/appointments"><h2>Confirm</h2> </Link> </li>
            <li> <DoctorsInfoReview /> </li>
	    		</ul>
	    	</div>
	     );
	 }   
 } 
  
}

var mapStateToProps = function (state) {
  // whatever gets returned will show up as props.
  // Takes the entire state which is the initialState as todo defind in client.js
  // inside the App
  console.log("state information from mapStatetoProps in Confirm Appointment");
  console.log(state);
  console.log(state.appointments);
  return { appointments:state.appointments};
};

var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(appointmentLoadAction, dispatch)
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(ConfirmAppointment);
