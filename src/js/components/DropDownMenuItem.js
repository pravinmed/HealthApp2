import React, {PropTypes} from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ThemeManager from 'material-ui/styles/themeManager';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


export default class DropDownMenuItem extends React.Component{

    constructor(props) 
    {
      super(props);
      
      
    }

    static childContextTypes = {
        muiTheme: PropTypes.object
    }
    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        }
    }

     

     render()
     {
      var defIndex = 0;
      if(typeof(this.props.defaultIndx) != "undefined")
      {
          defIndex = this.props.defaultIndx;
      }
      return (
          <DropDownMenu value={defIndex} onChange={this.props.onChange} >
              { 
                  this.props.values.map((val,indx) => {
                       return <MenuItem value={indx} primaryText={val} />
                  })
              }
          </DropDownMenu>
      
      );
    }
  
};


