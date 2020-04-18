import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import history from './services/history';
import Main from './screens/Main';

const Routes: React.FC = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;