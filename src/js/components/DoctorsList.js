import React ,{PropTypes} from "react";
import SplitButton from "react-bootstrap/lib/SplitButton";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";
import AppointmentSelector from "./AppointmentSelector";
import ThemeManager from 'material-ui/styles/themeManager';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ContentSave from 'material-ui/svg-icons/content/save';
import FloatingActionButton from 'material-ui/FlatButton';

export default class DoctorsList extends React.Component 
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
	  console.log(" Component Did mount in the Doctors List");
	}

	static childContextTypes = {
        muiTheme: PropTypes.object
    }
    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        }
    }

	render()
	{
		console.log(" In the render of the DoctorsList");
		var style = {border:'thin'};
		const buttonStyle = {
  			marginRight: 20,
		};
		return (
			<div class="container border_main">
			  <div class="row ">
   			    <div class="col-sm-2"  style={style} >
   			    	<img src={this.props.picture} height="100" width="160" />
   			    	
   			    </div>
 				 <div class="col-sm-4"  style={style} > 
					{this.props.name} 
					<p>
					{this.props.email}
					</p>
					<h5>18 years experience Dentist </h5>
					<h5>Dental Solutions Centre for Implants & Laser Dentistry </h5>
					 <FloatingActionButton style={buttonStyle}>
      					<ContentSave />
    				</FloatingActionButton>
				</div>
				<div class="col-sm-2" >
				    <a>                                 	<button type="button" class="btn btn-primary"> Give Feedback </button>  </a>
				</div>
   				<div class="col-sm-4 navbar-left" style={style} > <AppointmentSelector email={this.props.email} name={this.props.name} image_url={this.props.picture}/> </div>
   			
 			  </div>
 			 </div>
		);
	}
}