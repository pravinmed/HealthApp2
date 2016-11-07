import React from "react";
import HospLayout from "../components/Layout/HospLayout"
import Nav from "../components/layout/Nav";
import DoctorsList from "../components/DoctorsList";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as drLoadAction from '../actions/drLoadAction';
import 'aws-sdk/dist/aws-sdk';
import { Grid,Col,Row } from 'react-bootstrap';
import PatientMetaData from '../components/PatientMetaData';
import ListItem from '../components/ListItem';

export default class MyPatients extends React.Component {
	constructor(props)
	{
		super(props);
		console.log(" In the settings ");
		this.state={ patientData:[],
                   selectedItem: null };
	
    console.log(" Component DId mount  in My Patients ");
    var AWS = require("aws-sdk/dist/aws-sdk");
	var AWS = window.AWS;
	AWS.config.update({
	  region: "us-west-2",
	  endpoint: "http://localhost:8000"
	});

	this.callBackFunction= this.callBackFunction.bind(this);

  this.onClickEventForList = this.onClickEventForList.bind(this);

	AWS.config.update({accessKeyId: 'AKIAJJLORRTL6KM4BYXA', secretAccessKey: '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'});
	var docClient = new AWS.DynamoDB.DocumentClient();

	var table = "patient";

	// Query 
	var params = {
	    TableName: table,
	     Limit:50
	  
	};

}


componentDidMount() {
	var URL = "https://i126g0qaqb.execute-api.us-west-2.amazonaws.com/prod/";
	var drList =[];
    $.ajax({
      url: URL,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(" Success in getting the data from dynamodb ");
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
    });
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
 
 onClickEventForList(event)
 {
    console.log(" Patient selected ",event);
 }
 

  render() 
  {
 
    var ulStyle = {
            padding: '0px',
            margin: '20px'
        };
  	return(
  	  <Grid>
         <Row className="show-grid">
             <Col xs={12} md={8}> <h2> Select Date </h2></Col>
         </Row>
         <Row className="show-grid">
             <Col sm={3} md={1} > <h1> Empty Space   </h1></Col>
              <Col sm={3} md={4} >
                <ul> {this.state.patientData.map(function(patient,indx) {
                      var is_selected = this.state.selectedItem == indx;
                      console.log("In the render of List in  My Patients ",is_selected);
                    return (
                    <ListItem key={patient.email} patient_url={patient.image_url} name={patient.name} location="Bangalore" onClick={(event)=>this.onClickEventForList(patient)}  isSelected={is_selected}/>) },this) }  </ul> </Col>
               <Col sm={3} md={7}><h1> Showing the Patient Record  here  </h1></Col>
         </Row>
      </Grid>

  	  );
    
  }
}


