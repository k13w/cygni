import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import history from './services/history';
import Main from './screens/Main';
import Dashboard from './screens/Dashboard';

const Routes: React.FC = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>

            </Switch>
        </Router>
    )
}

export default Routes;