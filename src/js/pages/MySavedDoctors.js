import React from "react";

export default class MySavedDoctors extends React.Component {
constructor(props)
{
	super(props);
	this.state={doctorsList:[]};
}
 componentDidMount()
 {
  console.log(" Component DId mount  in My Saved Doctors");
  // TODO the doctors using the REST API Call
  
 }

 componentMounted()
 {
     console.log(" Component Mounted in My Saved Doctors");
 }
 
  render() {
  	console.log(" iN the Render of My Saved Doctors ");
    if(this.state.doctorsList == null || this.state.doctorsList.length === 0)
    {
    	return(
    	<div>
    	      <h2>You have no Saved Doctors </h2>
    	 </div>
    	 );


    } 
    return (
    	<div>
    	      <h2> My Doctors </h2>
    	     <ul class="list-group row menu">{this.state.doctorsList.map(function(patient) {
  		       console.log("In the render of settings");
           	   return (<li><DoctorsList name={patient.name} email={patient.email} picture={patient.image_url} /> </li>) })} </ul> 
    	</div>
    );
  }
}
