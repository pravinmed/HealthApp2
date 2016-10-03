import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import MyAppointments from "./pages/MyAppointments";
//import Todos from "./pages/Todos";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import ConfirmAppointment from "./pages/ConfirmAppointment";
import { Provider } from 'react-redux';
import "./styles/styles.css";
import MySavedDoctors from "./pages/MySavedDoctors";
import configureStore from './stores/configureStore';
import MyPatients from './pages/MyPatients';
import DoctorsAppointments from './pages/DoctorsAppointments';



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
var params = {
    TableName: table,
     Limit:50
  
};

console.log("Scanning patient table.");
docClient.scan(params, onScan);

function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        // print all the patients
        console.log("Scan succeeded.");
         data.Items.forEach(function(patient) {
           console.log(
                patient.name,"  ",
                patient.dob,"  ",patient.email," ",patient.info);
        });
      }
    }*/



const app = document.getElementById('app');

/*var initialState = {
  locationDisplay: [{
    id: 0,
    completed: false,
    text: 'Learn  to use react and redux'
   
  }]
}*/
const store = configureStore();

ReactDOM.render(
 
  <Provider store={store}>
 
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={MyAppointments}></IndexRoute>
         <Route path="settings" component={Settings}></Route>
        <Route path="confirm" component={ConfirmAppointment}></Route>
        <Route path="appointments" component={MyAppointments}></Route>
        <Route path="mysaveddoctors" component={MySavedDoctors}></Route>
        <Route path="mypatients" component={MyPatients}></Route>
        <Route path="doctorsappointments" component={DoctorsAppointments}></Route>
        
      </Route>
    </Router>
     
  </Provider>
  
 ,
app);

