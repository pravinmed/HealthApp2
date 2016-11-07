import React from "react";
import { IndexLink, Link } from "react-router";
import LocationList from "../LocationList";
import { connect } from 'react-redux';
import TextInput from '../TextInput';
import {bindActionCreators} from 'redux';
import * as ajaxStatusAction from '../../actions/ajaxStatusAction';

export default class SignInNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {userid:'', collapsed: true};
    this.usernameChanged= this.usernameChanged.bind(this);
    this.passwordChanged= this.passwordChanged.bind(this);
    this.onWakeUp = this.onWakeUp.bind(this);
  
  }


  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
    console.log(" In the toggle collapse ");
  }

  usernameChanged(username) {
       
    }

    passwordChanged(event) {
      
    }

  onSignIn() {
    console.log(" In the onSignIn ");
    this.props.actions.ajaxCallInProgress(1);
   
    window.setTimeout(function(){this.onWakeUp()}.bind(this), 3000);

  }

  onWakeUp()
  {
     this.props.identity.username='hello';
     
    this.props.actions.ajaxCallInProgress(0);

  }

  render() {
    console.log("In the render of SignIn Nav ",this.props);
      const textStyle = {
      
      color:"White"
    };
    const liStyle={
        float:"left"

    };
    const ulStyle={
        display:"inline-block"
    }
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/appointments/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const myDoctorsClass = location.pathname.match(/^\/mysaveddoctors/) ? "active" : "";
    const myPatientsClass = location.pathname.match(/^\/mypatients/) ? "active" : "";
    const doctorsappointments = location.pathname.match(/^\/doctorsappointments/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";
    console.log("settings Class ",settingsClass);
    console.log("archives  Class ",archivesClass);
    return (
       <nav class="navbar navbar-inverse navbar-fixed-top " role="navigation">
         <div class="container">
           <div class="navbar-header">
             <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
             <a class="navbar-brand navbar-left" ><h4>One Health</h4></a>
          </div>
          <div class={"navbar-collapse  navbar-right"} id="bs-example-navbar-collapse-1">
          
            <ul class="nav navbar-nav" style={ulStyle} >
                <li >
               <label id="labelStyle" htmlFor="name">User Id</label>
               </li>
                <li>
                <input 
                    className="form-control" 
                    autoFocus="true"
                    type="text" 
                    id="name"
                    placeholder="Userid" 
                    defaultValue=""
                    onChange={this.usernameChanged} />
                        </li>
                
                        <li >

                        
                        <label id="labelStyle" htmlFor="password">Password</label>
                        </li>
                        <li>
                        <input
                            className="form-control"
                            type="password"
                            id="password"
                            placeholder="password"
                            defaultValue=""
                            onChange={this.passwordChanged} />
                
                  </li>
             <li class={archivesClass}>
                <Link to="/appointments" onClick={this.onSignIn.bind(this)}>Sign In</Link>
               
              </li>
             </ul>
           </div>
         </div>
       </nav>
     );
    } 
   }
  


var mapStateToProps = function (state) {
  // whatever gets returned will show up as props.
  // Takes the entire state which is the initialState as todo defind in client.js
  // inside the App
  console.log("state information in SignInNav ");
  console.log(state);
  console.log(state.identity);
  return { identity:state.identity,
          ajaxCallInProgress :state.ajaxCallInProgress };
};

var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(ajaxStatusAction, dispatch)
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(SignInNav);

