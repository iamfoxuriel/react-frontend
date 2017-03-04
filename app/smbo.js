import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './store/configureStore';

const store = configureStore();

class SMBO extends Component {

    render() {
        return (
            <Provider store={store}>
                <ReduxRouter />
            </Provider>
        );
    }
}

export default SMBO;
