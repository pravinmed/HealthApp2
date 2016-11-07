import React, {Component, PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TextInput from '../components/TextInput';
import SelectInput from '../components/SelectInput';


export default class SignupPage extends Component {
    constructor(props, context) {
        super(props);
        console.log(" In the SignUp page ");
        this.state = {
            username: '',
            password: '',
            email: '',
            phone: '',
            location:['Bangalore','Chennai'],
            role:['User','Doctor'],
            address:''
        };
        this.usernameChanged = this.usernameChanged.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
        this.phoneChanged = this.phoneChanged.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    componentWillReceiveProps (nextProps) {
        /*const {identity} = nextProps;
        if (identity.username) {
            browserHistory.push('tasks');
        }*/
    }

    usernameChanged(username) {
        this.setState({
            username: username
        });
    }

    passwordChanged(event) {
        this.setState({
            password: event.target.value
        });
    }

    emailChanged(email) {
        this.setState({
            email: email
        });
    }

   addressChanged(address) {
        this.setState({
            address: address
        });
    }
    phoneChanged(phone) {
        this.setState({
            phone: phone
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const userData = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            phone: this.state.phone
        };
        this.props.actions.signUp(userData);
    }

    onCancel() {
        // FIXME
    }

     handleChangeSelection(event,eventID)
     {
        
        console.log(event);
        console.log(eventID);
     }

     handleChangeSelectionRole(event,eventID)
     {
        
        console.log(event);
        console.log(eventID);
     }
    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <form onSubmit={this.onSubmit}>
                    <TextInput
                        id="name"
                        label="username"
                        value=""
                        placeholder="enter a username"
                        autoFocus
                        onChanged={this.usernameChanged} />

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            className="form-control"
                            type="password"
                            id="password"
                            placeholder="enter password"
                            defaultValue=""
                            onChange={this.passwordChanged} />
                    </div>

                    <TextInput
                        id="email"
                        label="email"
                        value=""
                        placeholder="enter a email"
                        autoFocus
                        onChanged={this.emailChanged} />

                    <TextInput
                        id="phone"
                        label="phone"
                        value=""
                        placeholder="enter phone number"
                        autoFocus
                        onChanged={this.phoneChanged} />

                    <TextInput
                        id="Address"
                        label="Address"
                        value=""
                        placeholder="enter Address"
                        autoFocus
                        onChanged={this.addressChanged} />

                    <SelectInput   
                        name="locationId"
                        label=""
                        value=""
                        defaultOption="Select Location "
                        options={this.state.location}
                        onChange={this.handleChangeSelection} 
                     />
                      <SelectInput   
                        name="Role"
                        label=""
                        value=""
                        defaultOption="Select Role "
                        options={this.state.role}
                        onChange={this.handleChangeSelectionRole} 
                     />

                    <div className="options btn-group">
                        <button
                            className="btn btn-primary"
                            type="submit">
                            Signup
                        </button>
                        <button
                            onClick={this.onCancel}
                            style={{marginLeft: '5px'}}
                            className="btn"
                            type="button">
                            Forgot Password
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}


/*function mapStateToProps(state, ownProps) {
    return {
        identity: state.identity
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(securityActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);*/