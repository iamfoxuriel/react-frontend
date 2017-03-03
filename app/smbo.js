import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Employees from './containers/employees';
import configureStore from './redux/store/configureStore';

const store = configureStore();

class SMBO extends Component {

    render() {
        return (
            <Provider store={store}>
                <Employees />
            </Provider>
        );
    }
}

export default SMBO;
