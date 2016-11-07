import React from "react";
import DoctorsInfo from "../components/DoctorsInfo";
import {Link} from 'react-router';
import * as appointmentLoadAction from "../actions/appointmentLoadAction";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SignUpPage from "./SignUpPage";
import VerifyPage from "./VerifyPage";

export default class SignUpTab extends React.Component {
 constructor(props)
 {
	super(props);
 }
 componentDidMount()
 {
  console.log(" Component DId mount  in SignUp Tab");
  
 }

 componentMounted()
 {
     console.log(" Component Mounted in Sign Up Tab");
 }
 
 render() {
    return (
    <div> 	
	    	<ul class="nav nav-tabs">
	 			 <li class="active"><a data-toggle="tab" href="#home">Home</a></li>
	 			 <li><a data-toggle="tab" href="#menu1">Verify </a></li>
	 			
				</ul>
			<div class="tab-content">
			  <div id="home" class="tab-pane fade in active">
			    <SignUpPage />
			  </div>
			  <div id="menu1" class="tab-pane fade">
			    <h3>Verify Account</h3>
			   <VerifyPage />
			  </div>
			
			</div>
    </div>
      );
   }
}
