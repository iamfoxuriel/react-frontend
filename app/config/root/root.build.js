import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from '../store/index';

const store = configureStore();

class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <ReduxRouter />
            </Provider>
        );
    }
}

export default Root;
