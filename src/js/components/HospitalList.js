import React from "react";
import SplitButton from "react-bootstrap/lib/SplitButton";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";
import SelectInput from "./SelectInput";
import DropDownMenuItem from  "./DropDownMenuItem";

export default class HospitalList extends React.Component {
 
 index =0;

 constructor(props)
 {
  super(props);
   this.state={selectedIndex:"A Hospital ",
                data:{
                   hospital: ["A Hospital","B Hospital","C Hospital ","D Hospital"] 

               },
               selectedIndx2:0
             };
  this.handleChangeSelection = this.handleChangeSelection.bind(this);
  this.handleChange = this.handleChange.bind(this);

   console.log(" in the Hospital List  ");
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

  handleChange(evt,index,value)
 {
    console.log("selection Change here ",evt,index);
  //  this.index=evt;
    this.setState({selectedIndex2:index});
    
    
 }

 componentDidMount()
 {
  console.log(" Component Did Mount in HospitalList");
    // document.body.addEventListener('click', this.subscribeToEvents);
    // $(document).on('click','.dropdown menu li a',this.subscribeToEvents);
 }

 subscribeToEvents(event)
 {
  var city = $(event.target).html();
  this.setState({selectedIndex : city});
}

  render()
  {
    var titleVal = this.state.selectedIndex;
   return(
       <SelectInput
        name="hospital ID"
        label=""
        value={this.state.selectedIndex}
        defaultOption="Select Hospital"
        options={this.state.data.hospital}
        onChange={this.handleChangeSelection}
        />
    );
    
    
  }
}
