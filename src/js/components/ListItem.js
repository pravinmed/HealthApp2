import React from "react";
import PatientMetaData from './PatientMetaData';

const ListItem = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func.isRequired,
        isSelected: React.PropTypes.bool
    },
    getDefaultProps() {
        return {
            isSelected: false
        };
    },
    getInitialState() {
        console.log("In the getInitialState of MyItem ");
        return {
            hover_flag: false
        };
    },
    hoverEvent() {
        this.setState({hover_flag: !this.state.hover_flag});
    },
    render() {
        var liStyle = {
            background: '#00181e',
            margin: 10,
            cursor: 'pointer'
        };

        if (this.props.isSelected || this.state.hover_flag) {
            liStyle['background'] = '#008080';
        }
           console.log("In the render of MyItem ");
        return (
            <li
                onClick={this.props.onClick}
                onMouseEnter={this.hoverEvent}
                onMouseLeave={this.hoverEvent}
                style={liStyle}>  
                  <PatientMetaData patient_url={this.props.patient_url}  name={this.props.name} location="Bangalore"/> }
            </li>
        );
    }
});

export default ListItem;