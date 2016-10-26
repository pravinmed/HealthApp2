import React from "react";
import { IndexLink, Link } from "react-router";
import HospitalList from "../HospitalList";
import DeptList from "../DeptList";

export default class HospLayout extends React.Component {
  constructor() {
    super()

   
  }

  toggleCollapse() {

  }

  render() {
    return (
        <div class="container-fluid">
          <div class={"navbar-collapse  navbar-left"} id="bs-example-navbar-collapse-2">
            <ul class="nav navbar-nav">
               <li><h4>Select Filters   </h4></li>
               <li><HospitalList/></li>
               <li><DeptList/></li>
               
            </ul>
          </div>
        </div>
    
    );
  }
}
