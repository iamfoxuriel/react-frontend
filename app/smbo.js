import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import Employees from './containers/employees';

const store = createStore(reducers);

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
