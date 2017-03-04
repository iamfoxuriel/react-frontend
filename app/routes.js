import React from 'react';
import { Route, Router } from 'react-router';
import Employees from './modules/employees';
import About from './modules/about';

export default function getRoutes({ getState, dispatch }) {
    
    function requireAuth(nextState, replaceState, callback) {
        setTimeout(() => {
            if (!getState().auth || !getState().auth.user) {
                replaceState(null, '/login');
            }
            callback();
        }, 0);
    }
    
    return (
        <Router>
            <Route path="/" component={About} onEnter={requireAuth}/>
            <Route path="/employees" component={Employees}/>
            <Route path="/about" component={About}/>
        </Router>
    );
}
