/* @flow */

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: props.history.location.hash.match(
                '[#&]access_token=([^&]*)'
            )[1],
        };
    }

    componentDidMount() {
        localStorage.setItem('token', this.state.token);
    }

    render() {
        if (this.state.token) {
            return <Redirect to="/playlists" />;
        } else {
            return <Redirect to="/" />;
        }
    }
}

export default Auth;
