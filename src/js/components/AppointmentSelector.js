import React,{PropTypes}  from "react";
import SelectApptTime from "./SelectApptTime";
import {Link} from 'react-router';
import * as appointmentLoadAction from "../actions/appointmentLoadAction";
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DatePicker from 'material-ui/DatePicker';
import mui from 'material-ui';
import ThemeManager from 'material-ui/styles/themeManager';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DropDownMenuItem from './DropDownMenuItem';





export default class AppointmentSelector extends React.Component {
  constructor(props)
  {
    super(props);
    var appnt = {
                    name:this.props.name,
                    email:this.props.email,
                    address:" Address ",
                    location:" Bangalore ",
                    image_url:this.props.image_url,
                    date:"24 May 2016",
                    time:"9:45AM"
                };
    var timeSlot = 
          ["9:00 AM",
          "9:15 ",
          "9:30"];
    
    this.state = {
                  doctorAppointment:appnt,
                  timeOfAppt:timeSlot,
                    selectedIndx2:0};
    console.log(" in the Appointment Selector ");
    console.log(this.state.doctorAppointment);
    this.onDateClick  = this.onDateClick.bind(this);
    this.onBookClick = this.onBookClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onDateClick()
  {
      console.log(" Date Selector clicked");
   

      
    
     // $(this).datepicker('show');
  }

  handleDateChange = (event, date) => {
    console.log(" In the handle date change ");
    console.log(date);
    let newTimeSlot = ["9.00 ","9:15","9:30","9:45","10:00","10:15","10:30","10:45"];
    this.setState({timeOfAppt:newTimeSlot});
  };
 onBookClick()
 {
    console.log(" Booking the appointment");
    console.log(" Booking the appointment",this.props.actions);
    this.props.actions.loadAppointment(this.state.doctorAppointment);
     console.log(browserHistory);
 }

 

  handleChange(evt,index,value)
  {
    console.log("selection Change here ",evt,index);
    this.setState({selectedIndex2:index});
  }

 static childContextTypes = {
        muiTheme: PropTypes.object
    }
    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        }
    }
  render() {
    const footerStyles = {
      marginTop: "30px",
    };
   
    return (
      <div >
        
        <div class="row panel border_side" >
            <ul> 
               <li>
                <div class="left ">
                  <DatePicker hintText="Select Date"    onChange={this.handleDateChange}   autoOk={true} />
                  {/*  <p>Select Date: <input type="text" class="datepicker" onClick={this.onDateClick} /></p>*/}
                </div>
               </li>
                 <li>
                   <DropDownMenuItem values={this.state.timeOfAppt} onChange={this.handleChange} defaultIndx={this.state.selectedIndex2}  />
                  </li>
                <li> <Link to="/confirm" onClick={this.onBookClick}><h3>Book it</h3> </Link></li>
            
            </ul>
          </div>
       </div>
    );
  }
}

var mapStateToProps = function (state) {
  // whatever gets returned will show up as props.
  // Takes the entire state which is the initialState as todo defind in client.js
  // inside the App
  console.log("state information from mapStatetoProps in AppointmentSelector");
  console.log(state);
  console.log(state.appointments);
  return { appointments:state.appointments};
};

var mapDispatchToProps = function (dispatch) {
    console.log("information from mapDispatchToProps in AppointmentSelector");
  return {
    actions: bindActionCreators(appointmentLoadAction, dispatch)
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(AppointmentSelector);
