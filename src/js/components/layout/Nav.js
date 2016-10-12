import React from "react";
import { IndexLink, Link } from "react-router";
import LocationList from "../LocationList";
import { connect } from 'react-redux';
import * as identityAction from '../../actions/identityAction';
import {bindActionCreators} from 'redux';

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    console.log(" Is A Doctor ",this.props.isDoctor);
    this.state = {
      collapsed: true,
      cities:["Bangalore","Chennai","Pune"],
    };
    this.onUserSignOff = this.onUserSignOff.bind(this);
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
   
  }

  onUserSignOff()
  {
    this.props.actions.userLoggedOut();
    console.log(" In the User sign Off ");
  }

  render() {
   console.log("In the render of Nav ",this.props);
    const { location } = this.props;
    console.log("Location ",location);
    const { collapsed } = this.state;
    console.log("collapsed ",collapsed);
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/appointments/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const myDoctorsClass = location.pathname.match(/^\/mysaveddoctors/) ? "active" : "";
    const myPatientsClass = location.pathname.match(/^\/mypatients/) ? "active" : "";
    const doctorsappointments = location.pathname.match(/^\/doctorsappointments/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";
    console.log("settings Class ",settingsClass);
    console.log("archives  Class ",archivesClass);
    if(this.props.isDoctor === 1)
    {
       console.log("In the render of Nav for Doctors ");
      return (
       <nav class="navbar navbar-inverse navbar-fixed-top " role="navigation">
         <div class="container">
           <div class="navbar-header">
             <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
             <a class="navbar-brand navbar-left" >One Health</a>
          </div>
          <div class={"navbar-collapse " + navClass+" navbar-right"} id="bs-example-navbar-collapse-1">
          
            <ul class="nav navbar-nav">
                
                <li class={myPatientsClass}>
                <Link to="/mypatients" onClick={this.toggleCollapse.bind(this)}>My Patients</Link>
              </li>
              <li class={doctorsappointments}>
                <Link to="/doctorsappointments" onClick={this.toggleCollapse.bind(this)}>Doctors Appointments</Link>
              </li>
             
                <li class={featuredClass}>
                <IndexLink to="/" onClick={this.onUserSignOff}>Sign Out</IndexLink>
               </li>
             </ul>
           </div>
         </div>
       </nav>
     );
    } else 
    {
      console.log("In the render of Nav for Patients ");
     return (
       <nav class="navbar navbar-inverse navbar-fixed-top " role="navigation">
         <div class="container">
           <div class="navbar-header">
             <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
             <a class="navbar-brand navbar-left" >One Health</a>
          </div>
          <div class={"navbar-collapse " + navClass+" navbar-right"} id="bs-example-navbar-collapse-1">
          
            <ul class="nav navbar-nav">
                <li class={myDoctorsClass}>
                <Link to="/mysaveddoctors" onClick={this.toggleCollapse.bind(this)}>My Doctors</Link>
              </li>
              <li class={archivesClass}>
                <Link to="/appointments" onClick={this.toggleCollapse.bind(this)}>My Appointments</Link>
              </li>
              <li class={settingsClass}>
                <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Find Doctor</Link>
              </li>
                  <li><LocationList/></li>
                <li class="search">
        
                  <form class="form-inline pull-xs-right">
                      {/* <input class="form-control" type="text" placeholder="Location"/>*/}
                      <input class="form-control" type="text" placeholder="Search Doctor"/>
                     {/*<button class="btn btn-success-outline" type="submit">Search </button>*/}
                  </form>
        
              </li>
                <li class={featuredClass}>
                <IndexLink to="/" onClick={this.onUserSignOff}>Sign Out</IndexLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
   }
  }
}


var mapStateToProps = function (state) {
  // whatever gets returned will show up as props.
  // Takes the entire state which is the initialState as todo defind in client.js
  // inside the App
  console.log("state information from mapStatetoProps in Nav ",state.isDoctor);
 
  return { isDoctor:state.isDoctor,
           identity:state.identity };
};

var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(identityAction, dispatch)
  };
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(Nav);
