import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import { Route, Router, hashHistory  } from 'react-router';


import About from './../../modules/about/components';
import Employees from './../../modules/employees/containers';
import configureStore from '../store/index';
import DevTools from '../../modules/common/containers/devTools';

const store = configureStore();

class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <div style={{ width: '100%', height: '100%' }}>
                    <Router history={hashHistory}>
                        <Route path="/" component={About}  />
                        <Route path="/employees" component={Employees} />
                        <Route path="/about" component={About} />
                    </Router>
                    <DevTools />
                </div>
            </Provider>
        );
    }
}

export default Root;
