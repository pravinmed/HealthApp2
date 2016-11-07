import React, {Component, PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TextInput from '../components/TextInput';


export default class VerifyPage extends Component {
    constructor(props, context) {
        super(props);
        console.log(" In the Verify page ");
        this.state = {
            username: '',
            verifyCode: ''
        };
        this.usernameChanged = this.usernameChanged.bind(this);
        this.verifyCodeChanged = this.verifyCodeChanged.bind(this);
       
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

    verifyCodeChanged(event) {
        this.setState({
            verifyCode: event.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const userData = {
            username: this.state.username,
           verifyCode :this.state.verifyCode
        };
        this.props.actions.signUp(userData);
    }

    onCancel() {
        // FIXME
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <TextInput
                        id="name"
                        label="username"
                        value=""
                        placeholder="enter a username"
                        autoFocus
                        onChanged={this.usernameChanged} />

                 

                    <div className="form-group">
                        <label htmlFor="password">Verification Code</label>
                        <input
                            className="form-control"
                            type="password"
                            id="password"
                            placeholder="enter Verification Code"
                            defaultValue=""
                            onChange={this.verifyCodeChanged} />
                    </div>

                 

                    <div className="options btn-group">
                        <button
                            className="btn btn-primary"
                            type="submit">
                            Signup
                        </button>
                       
                    </div>
                </form>
            </div>
        );
    }
}