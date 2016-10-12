import React from "react";
import { Link } from "react-router";
import { connect } from 'react-redux';
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import {bindActionCreators} from 'redux';
import * as identityAction from '../actions/identityAction';
import SignInNav from '../components/layout/SignInNav';
import SignUpPage from './SignUpPage';
import SignUpTab from './SignUpTab';

export default class Layout extends React.Component {
  constructor(){
    super();
    this.onSignInClick = this.onSignInClick.bind(this);
  }
  LogInfo()
  {
    console.log("In the LogInfo in Layout ",this.props.children);
  }

   onSignInClick()
   {
      console.log(" On Google sign in Clicked ");
   }

  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px" 
    };
   this.LogInfo();
   console.log(" In Layout ",this.props.identity.username);
   if(this.props.ajaxCallInProgress === 1)
   {
      return (
         <div> 
          <SignInNav location={location} /> 
           <div class="container" style={containerStyle}> 
            <div class="row">
             <div class="col-sm-12">
               <h1>  Signin in Progress ....... </h1>
            </div>
           </div>
           </div>
         <Footer/>
          </div>
        );
   }
   if(this.props.identity === null ||  this.props.identity.username === '')
   {
     var signinSyle = {
            margin: 20,
            cursor: 'pointer'
        };


      // Login Page 
       return (
          <div> 
          <SignInNav location={location} /> 
           <div class="container" style={containerStyle}>
          <div class="row">
           <div class="col-sm-6">
                <SignUpTab />
              </div>
                <div class="col-sm-2">
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <h1> OR </h1>
              </div>
             <div   onClick={this.onSignInClick} style={signinSyle} class="col-sm-4">
             
             
                <img src="http://i.amz.mshcdn.com/Q39NyepbKZ4WXKCUnN16YpBu1HU=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fintroducing-google%2Fgoogle-plus-logo-640.jpg" height="150" width="350" href="#"/>
                <h2 >Sign In </h2>
             
              </div>
          </div>
        </div>
      <Footer/>
          </div>
        );
   } 
   else {
    return (
      <div>

        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-sm-12">
              {this.props.children}
            </div>
          </div>
        </div>
      <Footer/>
      </div>
   
    );
   }
  }
}


var mapStateToProps = function (state) {
  // whatever gets returned will show up as props.
  // Takes the entire state which is the initialState as todo defind in client.js
  // inside the App
  console.log("state information in SignInNav ");
  console.log(state.identity);
  return { identity:state.identity,
           ajaxCallInProgress:state.ajaxCallInProgress};
};

module.exports = connect(mapStateToProps, null)(Layout);

