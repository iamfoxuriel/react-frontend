import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { ReduxRouter } from 'redux-router';
import Employees from './../../modules/employees/containers';
import configureStore from '../store/index';
import DevTools from '../../modules/common/containers/devTools';


const store = configureStore();

class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <div style={{ width: '100%', height: '100%' }}>
                    <Employees />
                    <DevTools />
                </div>
            </Provider>
        );
    }
}

export default Root;
