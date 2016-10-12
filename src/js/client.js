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
import SignUpPage from './pages/SignUpPage';





const app = document.getElementById('app');


const store = configureStore();

ReactDOM.render(
 
  <Provider store={store}>
 
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute  component={SignUpPage}></IndexRoute>
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

