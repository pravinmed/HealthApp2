import React from "react";
import SplitButton from "react-bootstrap/lib/SplitButton";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";
import AppointmentSelector from "./AppointmentSelector";


export default class DoctorsInfo extends React.Component 
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
	  console.log(" Component Did mount in the Doctors Info");
	}

	render()
	{
		console.log(" In the render of the DoctorsInfo");
		var style = {border:'thin'};
		return (
			<div class="container">
			  <div class="row ">
   			    <div class="col-sm-3"  style={style} >
   			     	<img src={this.props.image_url} height="100" width="160" /> 
   			    </div>
 				 <div class="col-sm-4"  style={style} > 
					{this.props.name} 
					<p>
					{this.props.email}
					</p>
					<h5>18 years experience Dentist </h5>
					<h5>Dental Solutions Centre for Implants & Laser Dentistry </h5>
					<button type="button" class="btn btn-primary">Save </button>
				</div>
				<div class="col-sm-2" >
				    <a>                                 	<button type="button" class="btn btn-primary"> Give Feedback </button>  </a>
				</div>
   			   <div class="col-sm-3"  style={style} >
   			  
   			    </div>

 			  </div>
 			 </div>
		);
	}
}