import React,{PropTypes} from "react";
import MyAppointmentItem from "../components/MyAppointmentItem";
import 'aws-sdk/dist/aws-sdk';
import Avatar from 'material-ui/Avatar';
import ThemeManager from 'material-ui/styles/themeManager';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class DoctorsAppointments extends React.Component {
  constructor(props)
  {
    super(props);
     console.log(" In the DoctorsAppointments ");
     var appointment =
    {
       id:" Dr@doctor.com",
       name: " Dr X ",
       location:" Bangalore "

    };
    var patientsApptList = [];
    var timeList =[];

    // The appointment of the patients
    var startTime = 8;
    for(var i = 0;i <6;i++)
    {
      var formattedTime = startTime+":00";
      patientsApptList[i] = { Patients: [" Patient 1","Patient 2 "],
                              Time: formattedTime};
      startTime++;
    }
    
    this.state =
      {
        appointmentList:[],
        daysOfWeek :["    Time","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        apptSchedule:patientsApptList
      };
   
      console.log(this.state.apptSchedule.map(function(item,idx){
         console.log(item);
      }));
    
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
 }

 componentDidMount()
 {
  console.log(" Component DId mount  in  DoctorsAppointments");
 }

 onCancel()
 {
    console.log(" On Delete called ");
 }

 onWeekClick(event,eventID)
 {
  console.log(" Week Clicked ");
  console.log(event.target);
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
     console.log(" Component Mounted in DoctorsAppointments ");
 }
  // Have the item and a delete button to cancel the appointment in the list
  render() {
  	console.log(" iN the Render of DoctorsAppointments ");
    let mapObject = this.state.apptSchedule;
    let tableItem = Object.keys(mapObject).forEach(function(key) {
                    var item = mapObject[key];
                    console.log("In the render of DoctorsAppointments ",item);
                    return (<td>Hello</td>) });
    return (
      <div>
        <h2> Appointments </h2> 
          Week: <input type="week" id="myWeek" onChange={this.onWeekClick}/>
            <table class="table">
              <thead>
                <tr>
                  {this.state.daysOfWeek.map(function(day,indx){
                     return (<th>{day}</th>)
                  })}
                </tr>
              </thead>
              <tbody> 
               { mapObject.map(function(t,idx){
                return <tr>
                  { mapObject.map(function(time,indx){

                      var listOfPatients = time['Patients'];
                      var apptTime = time['Time'];
                      console.log(apptTime);
                     return (<td><ul> { listOfPatients.map(function(pat,id){if(indx===0){return <li>{apptTime}</li>} return <li>{pat}</li> })  }</ul>  </td>)})
                  }
                
               </tr>  
               }) }
            </tbody>
          </table>
      </div>
    	
      
    );
  }
}
