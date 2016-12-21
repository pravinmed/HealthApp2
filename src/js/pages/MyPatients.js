import React,{PropTypes} from "react";
import HospLayout from "../components/layout/HospLayout"
import Nav from "../components/layout/Nav";
import DoctorsList from "../components/DoctorsList";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as drLoadAction from '../actions/drLoadAction';
import 'aws-sdk/dist/aws-sdk';
import { Grid,Col,Row } from 'react-bootstrap';
import PatientMetaData from '../components/PatientMetaData';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ThemeManager from 'material-ui/styles/themeManager';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PatientActiveRecord from '../components/PatientActiveRecord';
import * as Config from '../actions/ConfigFile_Do_Not_Check_IN';

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
	  region: "us-west-2"
	});

	this.callBackFunction= this.callBackFunction.bind(this);

  this.onClickEventForList = this.onClickEventForList.bind(this);
   var api = Config.APIKEY;
   var secretKey = Config.SECRETKEY;
	 AWS.config.update({accessKeyId: api, secretAccessKey: secretKey});
	var docClient = new AWS.DynamoDB.DocumentClient();

	var table = "patienttable";

	// Query 
	var params = {
	    TableName: table,
	     Limit:50
	  
	};
  docClient.scan(params, this.callBackFunction);

}

 static childContextTypes = {
        muiTheme: PropTypes.object
    }
    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        }
    }

componentDidMount() {
	/*var URL = "https://i126g0qaqb.execute-api.us-west-2.amazonaws.com/prod/";
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
             <Col xs={12} md={8}> <h4> Today's Patient Schedule </h4></Col>
         </Row>
         <Row className="show-grid">
             <Col sm={3} md={1} > <h1> Empty Space   </h1></Col>
              <Col sm={3} md={4} >
                    <List> {this.state.patientData.map(function(patient,indx) {
                      var is_selected = this.state.selectedItem == indx;
                      console.log("In the render of List in  My Patients ",is_selected);
                    return (
                    <ListItem key={patient.email} primaryText={patient.name} secondaryText=" From Bangalore " rightAvatar={<Avatar src={patient.image_url} />} onClick={(event)=>this.onClickEventForList(patient)}  isSelected={is_selected} />) },this)} </List>
                   
               </Col>
               <Col sm={3} md={7}><PatientActiveRecord/></Col>
         </Row>
      </Grid>

  	  );
    
  }
}


