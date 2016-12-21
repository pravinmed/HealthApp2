import React from "react";
import HospLayout from "../components/layout/HospLayout"
import Nav from "../components/layout/Nav";
import DoctorsList from "../components/DoctorsList";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as drLoadAction from '../actions/drLoadAction';
import 'aws-sdk/dist/aws-sdk';
import * as Config from '../actions/ConfigFile_Do_Not_Check_IN';


export default class Settings extends React.Component {
	constructor(props)
	{
		super(props);
		console.log(" In the settings constructor");
		this.state={ patientData:[]};
	
    console.log(" Component DId mount  in Settings ");
    var AWS = require("aws-sdk/dist/aws-sdk");
	  var AWS = window.AWS;
	  AWS.config.update({
	    region: "us-west-2"
	  });

	this.callBackFunction= this.callBackFunction.bind(this);
   var api = Config.APIKEY;
   var secretKey = Config.SECRETKEY;
   AWS.config.update({accessKeyId: api, secretAccessKey: secretKey});
  //var roleArn = 'arn:aws:iam::974961485142:role/service-role/myRole';
	/*var adminCredentials = new AWS.WebIdentityCredentials({
    RoleArn: roleArn});*/
	var docClient = new AWS.DynamoDB.DocumentClient();
 
  console.log("api key from config ",api);
	var table = "patienttable";

	// Query 
	var params = {
	    TableName: table,
	     Limit:50
	  
	};
  
  docClient.scan(params, this.callBackFunction);
     
    

}


componentDidMount() {
	var URL = "https://i126g0qaqb.execute-api.us-west-2.amazonaws.com/prod/";
	var drList =[];
   /* $.ajax({
      url: URL,
      dataType: 'json',
      cache: false,
      success: function(data) {
        data.Items.forEach(function(patient) {
	           drList.push(patient);
	           console.log(
	                patient.name,"  ",
	                patient.dob,"  ",patient.email," ",patient.info," ",patient.image_url);
	        });
          this.setState({patientData : drList});
      }.bind(this),
      error: function(xhr, status, err) {

        console.error("URL :", status, err.toString());
      }.bind(this)
    });*/
  }

  callBackFunction(err,data)
  {
  	console.log(" In the callback here ");
  	var drList =[];
		if (err) {
	        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
	    } else {
	        // print all the patients
	        console.log("Scan succeeded.");

	         data.Items.forEach(function(patient) {
	           drList.push(patient);
	           console.log(
	                patient.name,"  ",
	                patient.dob,"  ",patient.email," ",patient.info," ",patient.image_url);
	        });
	       
	      }
	     this.setState({patientData : drList});
	    
  }
 
 

  render() 
  {
  	console.log("In the render of settings ");
  	console.log(" Process.env = ",process.env.foo);
  	return(
  		<div class="container ">
		   	<div class="row">
   			   <div class="col-sm-2" >
   			     Filters
   			    </div>
   			   <div class="col-sm-8 ">
   			    <ul>
   			      <li>   <HospLayout /> </li>
  	  		 	    <li><ul class="list-group row menu"> {this.state.patientData.map(function(patient) {
  		       			  console.log("In the render of settings");
           	   			     return (<li id={patient.email} ><DoctorsList name={patient.name} email={patient.email} picture={patient.image_url} /> </li>) })} </ul> </li> </ul></div>
  	 	       	     <div class="col-sm-2">
  	  			
  	  	  	  </div>
  	  		</div>
  	  	</div>

  	  )
    
  }
}

var mapStateToProps = function (state) {
  // whatever gets returned will show up as props.
  // Takes the entire state which is the initialState as todo defind in client.js
  // inside the App
  console.log("state information from mapStatetoProps");
  console.log(state);
  console.log(state.doctors);
  return { doctors:state.doctors};
};

var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(drLoadAction, dispatch)
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Settings);
