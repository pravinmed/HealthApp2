import React from "react";
import { Link } from "react-router";
import { connect } from 'react-redux';
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  LogInfo()
  {
    console.log("In the LogInfo in Layout ",this.props.children);
  }
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px" 
    };

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


