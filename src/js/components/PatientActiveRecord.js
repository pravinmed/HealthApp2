import React ,{PropTypes} from "react";
import SplitButton from "react-bootstrap/lib/SplitButton";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";
import AppointmentSelector from "./AppointmentSelector";
import Avatar from 'material-ui/Avatar';
import ThemeManager from 'material-ui/styles/themeManager';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

export default class PatientActiveRecord extends React.Component 
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
		console.log(" In the render of the PatientActiveRecord");
		var style = {border:'thin'};
		return (
			<div class="container">
				<TextField
      			  hintText=" Add Prescription or Summary for this visit"
     			   multiLine={true}
   				   rows={2}
     			   rowsMax={4}
     			   name=" Save Notes"
     			   fullWidth={true}
  			  	/>
  			  	 <Divider />
  			  	<FlatButton label="Add Notes" />
 			</div>
		);
	}
}