import React from "react";
import SplitButton from "react-bootstrap/lib/SplitButton";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";
import AppointmentSelector from "./AppointmentSelector";
import { Grid,Col,Row,Form,FormGroup } from 'react-bootstrap';

export default class PatientMetaData extends React.Component 
{
	constructor(props)
	{
		super(props);
	}

	getInitialState()
	{

	}

	componentDidMount()
	{
	  console.log(" Component Did mount in the Patient Meta Data");
	}

	render()
	{
		console.log(" In the render of the Patient Meta data");
		var style = {border:'thin'};
		return (
		  <div class="container-fluid">
		      
 			    <div class="row">
 			       <div class="col-sm-4"  style={style} >
               	       	  <img src={this.props.patient_url} height="70" width="90" /> 
               	    </div>
               	   <div class="col-sm-8"  style={style} > 
               	 	{this.props.name} 
					<p>
					{this.props.email}
					</p>
					<p> Location : {this.props.location} </p>
               	</div>
               </div>
           </div>
		);
	}
}