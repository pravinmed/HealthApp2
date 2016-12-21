import React from "react";
import SplitButton from "react-bootstrap/lib/SplitButton";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";
import SelectInput from "./SelectInput";

export default class LocationList extends React.Component {
 
 index =0;

 constructor(props)
 {
  super(props);
   this.state={selectedIndex:"Location",
                data:{
                   cities: ["Bangalore","Chennai","Pune"] 

               } 
             };

 this.handleChangeSelection = this.handleChangeSelection.bind(this);
   
 }
 getInitialState()
 {
     
 }


 handleChangeSelection(evt,evtKey)
 {
    console.log("selection Change",evtKey);
  //  this.index=evt;
    this.setState({selectedIndex:evt.target.value});
    
    
 }

 componentDidMount()
 {
  console.log(" Component DId mount  in LocationList class");
   
 }

 subscribeToEvents(event)
 {
  var city = $(event.target).html();
   console.log("selection Change event occured",city);
  this.setState({selectedIndex : city});
}

  render()
  {
    var titleVal = this.state.selectedIndex;
    
     
      return(
      
       <SelectInput
        name="locationId"
        label=""
        value={this.state.selectedIndex}
        defaultOption="Select Location"
        options={this.state.data.cities}
        onChange={this.handleChangeSelection}
        />
     
      );

  }
}
