import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Homepage } from '../homepage/homepage';
import { Graphpage } from '../graphpage/graphpage';

export function AppRouter(){

return(
        <Router>
            <div className="container">
                <Switch>
                    <Route component={Homepage} exact path="/" />
                    <Route component={Graphpage} path="/:id" />
                </Switch>
            </div>
        </Router>
)

}