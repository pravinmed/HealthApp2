import React from "react";
import SplitButton from "react-bootstrap/lib/SplitButton";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";

export default class LocationList extends React.Component {
 
 index =0;

 constructor(props)
 {
  super(props);
   this.state={selectedIndex:"Location",
                data:{
                   cities: ["Location","Bangalore","Chennai","Pune"] 

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
    this.setState({selectedIndex:evt});
    
    
 }
  render()
  {
    var titleVal = this.state.selectedIndex;
    console.log(titleVal);
    return(
      <div>
        <ButtonToolbar>
          <DropdownButton key={this.state.selectedIndex} bsSize="small"  title={titleVal} id="dropdown-size-large" onSelect={this.handleChangeSelection}>
           {  this.state.data.cities.map(function(city) {
                if(city !='Location')
                {
                  return <MenuItem eventKey={city}>{city}</MenuItem>
                }
             })
            }
          </DropdownButton>
        </ButtonToolbar>
      </div>);

  }
}
