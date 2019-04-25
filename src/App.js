import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Auth from './Auth';
import UserPlaylistsPage from './UserPlaylistsPage';
import PlaylistPage from './PlaylistPage';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/playlists" component={UserPlaylistsPage} />
            <Route exact path="/playlists/:id" component={PlaylistPage} />
        </Switch>
    </BrowserRouter>
);

export default App;
