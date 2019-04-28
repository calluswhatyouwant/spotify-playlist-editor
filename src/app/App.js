/* @flow */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import Auth from './Auth';
import PlaylistPage from '../playlist/PlaylistPage';
import UserPage from '../user/UserPage';
import Navbar from './Navbar';

const App = () => (
    <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/playlists" component={UserPage} />
            <Route exact path="/playlists/:id" component={PlaylistPage} />
        </Switch>
    </>
);

export default App;
