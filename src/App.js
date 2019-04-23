import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Auth from './Auth';
import UserPlaylistsPage from './UserPlaylistsPage';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/playlists" component={UserPlaylistsPage} />
        </Switch>
    </BrowserRouter>
);

export default App;
