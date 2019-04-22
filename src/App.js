import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Auth from './Auth';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Auth} />
        </Switch>
    </BrowserRouter>
);

export default App;
