/* @flow */

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

type Props = {
    history: any,
};

type State = {
    token: string,
};

class Auth extends Component<Props, State> {
    constructor(props: Props) {
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
