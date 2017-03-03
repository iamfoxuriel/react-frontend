import { createStore, applyMiddleware, compose } from 'redux';
// import { reduxReactRouter } from 'redux-router';
// import DevTools from '../containers/devTools';
//import createHistory from 'history/lib/createBrowserHistory';
import createHistory from 'history/lib/createHashHistory';
//import { createHistory } from 'history';
// import getRoutes from '../routes';
import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';
// import apiRequester from '../middlewares/apiRequester';
// import assembleApiRequester from '../middlewares/assembledApiRequester';
import rootReducer from '../reducers';

const finalCreateStore = compose(
    applyMiddleware(thunk),
    // reduxReactRouter({ getRoutes, createHistory }),
    // applyMiddleware(createLogger()),
    // DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
