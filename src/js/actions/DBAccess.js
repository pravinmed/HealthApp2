import React from "react";
import 'aws-sdk/dist/aws-sdk';

const delay = 10;


var AWS = require("aws-sdk/dist/aws-sdk");
var AWS = window.AWS;
AWS.config.update({
		region: "us-west-2",
		endpoint: "http://localhost:8000"
});

AWS.config.update({accessKeyId: 'AKIAJJLORRTL6KM4BYXA', secretAccessKey: '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'});

const patients =[];


class DBAcess 
{
	static getAllPatients()
	{
		

		var docClient = new AWS.DynamoDB.DocumentClient();
		 return new Promise((resolve, reject) => {
		 	
		 	var params = {
	    		TableName: "patient",
	     		Limit:50
	  		};
			console.log("insode the promise  for patient in the table.");
		 	docClient.scan(params, onScan);
		 	
			function onScan(err, data) {
		    if (err) {
		        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
		        reject('Unable to scan the table. Error JSON:')
		    } else {
		        // print all the patients
		        console.log("Scan succeeded.");

		         data.Items.forEach(function(patient) {
		           patients.push(patient);
		           console.log(
		                patient.name,"  ",
		                patient.dob,"  ",patient.email," ",patient.info);
		        });
		      }
		    }
		 	 if(patients.length == 0)
		 	 {
      		 	reject('No Patients');
      		 }
      		 resolve(Object.assign([], patients));
   		 });
	}


}

export default DBAcess;