import React ,{PropTypes} from "react";
import MyAppointmentItem from "../components/MyAppointmentItem";
import 'aws-sdk/dist/aws-sdk';
import ThemeManager from 'material-ui/styles/themeManager';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

export default class MyAppointments extends React.Component {
  constructor(props)
  {
    super(props);
  
     var appointment =
    {
       id:" Dr@doctor.com",
       name: " Dr X ",
       location:" Bangalore "

    };
    this.state =
      {
        appointmentList:[],
        patientEmaiId:"NewEmailID@email.com"
      };
      // Query 
    /*var AWS = require("aws-sdk/dist/aws-sdk");
    var AWS = window.AWS;
    AWS.config.update({
      region: "us-west-2",
      endpoint: "http://localhost:8000"
    });

    AWS.config.update({accessKeyId: 'AKIAJJLORRTL6KM4BYXA', secretAccessKey: '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'});
    var docClient = new AWS.DynamoDB.DocumentClient();

    var table = "patient";

  

    // Query 
   var scanparams = {
      TableName: table,
       Limit:50
    };

    // Query 
   var params = {
      TableName : table,
      KeyConditionExpression: "#email = :emailID",
      ExpressionAttributeNames:{
        "#email": "email"
      },
      ExpressionAttributeValues: {
        ":emailID":this.state.patientEmaiId
      }
    };

    this.queryFunction= this.queryFunction.bind(this);
    console.log("Scanning patient table.");
  
      docClient.query(params, this.queryFunction);*/
 
  
   this.onCancel = this.onCancel.bind(this);

  this.state.appointmentList.push(appointment);
  this.state.appointmentList.map(function(item){
    console.log("Mapping "); 
    console.log(item.id);
  });
 }




 queryFunction(err,data)
 {
      console.log(" In the callback of the query Function ");
    var appntmtList =[];
    if (err) {
          console.error("Unable to query the table. Error JSON:", JSON.stringify(err, null, 2));
      } else {
          // print all the patients
          console.log("query succeeded.");
          console.log(" Items ",data.Items[0]);
          var appList = data.Items[0].appointments;
           appList.forEach(function(appointment) {
             appntmtList.push(appointment);
             console.log(
                  appointment);
          });
         
        }
      // this.setState({appointmentList : appList});
   
      
 }

 componentDidMount()
 {
  console.log(" Component DId mount  in My appointment");

  
 }

 onCancel()
 {
    console.log(" On Delete called ");
 }

 static childContextTypes = {
        muiTheme: PropTypes.object
    }
    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        }
    }


 componentMounted()
 {
     console.log(" Component Mounted in My appointment");
 }
  // Have the item and a delete button to cancel the appointment in the list
  render() {
  	console.log(" iN the Render of My Appointment ");
    return (
    	<div>
        <h2>Upcomming Appointments </h2>
    	      <Table >
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn> Date </TableHeaderColumn>
                  <TableHeaderColumn> Time of Appointment</TableHeaderColumn>
                  <TableHeaderColumn> Name </TableHeaderColumn>
                  <TableHeaderColumn> Address </TableHeaderColumn>
              
                </TableRow>
              </TableHeader>
              <TableBody>  
                <TableRow>
                { this.state.appointmentList.map(function(appointment) {
                  console.log("In the render of My Appointment");
                  return ([
                    <TableRowColumn>24 May 2016</TableRowColumn>,
                    <TableRowColumn> 10:15 AM </TableRowColumn>,
                     <TableRowColumn> {appointment.name}</TableRowColumn>,
                     <TableRowColumn>{appointment.location}</TableRowColumn>
                    ]);    
                  },this)
                }
               </TableRow>  
            </TableBody>
          </Table>
          <FlatButton label=" Cancel Appointment" primary={true} onClick = {this.onCancel} />
    	</div>
    );
  }
}
