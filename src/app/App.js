/* @flow */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Auth from './Auth';
import Home from '../home/Home';
import Navbar from './Navbar';
import PlaylistCreationPage from '../create-playlist/PlaylistCreationPage';
import PlaylistPage from '../playlist/PlaylistPage';
import UserPage from '../user/UserPage';

const App = () => (
    <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/playlists" component={UserPage} />
            <Route
                exact
                path="/playlists/new"
                component={PlaylistCreationPage}
            />
            <Route exact path="/playlists/:id" component={PlaylistPage} />
        </Switch>
    </>
);

export default App;
