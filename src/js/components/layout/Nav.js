import React,{PropTypes} from "react";
import { IndexLink, Link } from "react-router";
import LocationList from "../LocationList";
import { connect } from 'react-redux';
import * as identityAction from '../../actions/identityAction';
import {bindActionCreators} from 'redux';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import mui from 'material-ui';
import ThemeManager from 'material-ui/styles/themeManager';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    console.log(" Is A Doctor ",this.props.isDoctor);
    this.state = {
      collapsed: true,
      cities:["Bangalore","Chennai","Pune"],
       valueSingle: '3',
      valueMultiple: ['3', '5']
    };
    this.onUserSignOff = this.onUserSignOff.bind(this);
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
   
  }


 static childContextTypes = {
        muiTheme: PropTypes.object
    }
    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        }
    }

handleChangeMultiple = (event, value) => {
    this.setState({
      valueMultiple: value,
    });
  };
  onUserSignOff()
  {
    this.props.actions.userLoggedOut();
    console.log(" In the User sign Off ");
  }

  render() {
   console.log("In the render of Nav ",this.props,this.props.isDoctor );
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
                
              <li>
                <IconMenu
                  iconButtonElement={<IconButton><ContentFilter /></IconButton>}
                    onChange={this.handleChangeMultiple}
                    value={this.state.valueMultiple}
                      multiple={true}>
                   
                      <MenuItem value="1"  >  
                       <Link to="/mypatients" onClick={this.toggleCollapse.bind(this)}>My Patients</Link>
                      </MenuItem>
                      <MenuItem value="2"  >
                        <Link to="/doctorsappointments" onClick={this.toggleCollapse.bind(this)}>Doctors Appointments</Link>
                      </MenuItem>
                    </IconMenu>
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
              <li>
                <IconMenu
                  iconButtonElement={<IconButton><ContentFilter /></IconButton>}
                    onChange={this.handleChangeMultiple}
                    value={this.state.valueMultiple}
                      multiple={true}>
                   
                      <MenuItem value="1"  >  
                        <Link to="/mysaveddoctors" onClick={this.toggleCollapse.bind(this)}>My Doctors</Link>
                      </MenuItem>
                      <MenuItem value="2"  >
                         <Link to="/appointments" >My Appointments</Link>
                      </MenuItem>
                    </IconMenu>
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
