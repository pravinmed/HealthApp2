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
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';


export default class DoctorsInfoReview extends React.Component 
{

 constructor(props)
 {
 	super(props);

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

 	return( 
 	  <div>
		<Tabs>
		    <Tab label="Information " >
		      <div>
		        <h2 >Tab One</h2>
		        <p>
		            Put a grid for the information about the doctor
		        </p>
		        <p>
		          You can put any sort of HTML or react component in here. It even keeps the component state!
		        </p>
		      </div>
		    </Tab>
		    <Tab label=" Reviews" >
		      <div>
		      
		        <p>
		           Review of the Doctor List
		        </p>
		      </div>
		    </Tab>
		 </Tabs> 
	  </div>
	 );
  }
}