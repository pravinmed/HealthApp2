import React from "react";
import SplitButton from "react-bootstrap/lib/SplitButton";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";
import SelectInput from './SelectInput';


export default class DeptList extends React.Component {
 
 index =0;

 constructor(props)
 {
  super(props);
   this.state={selectedValue:"A Dept ",
                data:{
                   dept: ["A Dept","B Dept","C Dept ","D Dept"] 

               } ,
               selectedDept:""
             };

 this.onChange = this.onChange.bind(this);
   
 }
 getInitialState()
 {
 
     
 }


 handleChangeSelection(evt,evtKey)
 {
    console.log("selection Change",evtKey);
    //  this.index=evt;
    //this.setState({selectedIndex:evt});
    
    
 }
 onChange(event,evtKey)
 {
    console.log(event.target.value);
    this.setState({selectedValue:event.target.value});
 }

 componentDidMount()
 {
  console.log(" Component Mounted in Dept List");
   
 }

 

  render()
  {
    var titleVal = this.state.selectedIndex;
     console.log(" In the render of Dept List ",this.state.data.dept);
    
    return(
     
       <SelectInput
        name="authorId"
        label=""
        value={this.state.selectedValue}
        defaultOption="Select Dept"
        options={this.state.data.dept}
        onChange={this.onChange}
        />
     
      );

  }
}
