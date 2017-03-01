import React, { Component } from 'react';
import { Provider } from 'react-redux';


class SMBO extends Component {

    render() {
        return (
            <Provider store={store}>
                <h1>App</h1>
            </Provider>
        );
    }
}

export default SMBO;
