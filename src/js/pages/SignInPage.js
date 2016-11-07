import React from "react";
import HospLayout from "../components/Layout/HospLayout"
import Nav from "../components/layout/Nav";
import DoctorsList from "../components/DoctorsList";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as drLoadAction from '../actions/drLoadAction';
import 'aws-sdk/dist/aws-sdk';

export default class SignInPage extends React.Component {
	constructor(props)
	{
		super(props);
		console.log(" In the SignIn ");
		this.state={ patientData:[]};
	
     

}

  componentDidMount() {

  }

  callBackFunction(err,data)
  {
 
	    
  }
 
 

  render() 
  {
  	console.log("In the render of settings ");
  	console.log(" Process.env = ",process.env.foo);
  	return(
  		<div class="container ">
			<div class="row">
   			  <div class="col-sm-1" >
   			        Filters
   			    </div>
   			  <div class="col-sm-9 ">
   			   	   <ul>
   			   	     <li>   <HospLayout /> </li>
  	  			 	    <li><ul class="list-group row menu"> {this.state.patientData.map(function(patient) {
  		       			  console.log("In the render of settings");
           	   			     return (<li id={patient.email} ><DoctorsList name={patient.name} email={patient.email} picture={patient.image_url} /> </li>) })} </ul> </li> </ul></div>
  	 	       	     <div class="col-sm-2">
  	  			   <h4>Ads 1 Here for the future</h4>
  	  	  	  </div>
  	  		</div>
  	  	</div>

  	  )
    
  }
}


