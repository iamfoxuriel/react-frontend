import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import thunk from 'redux-thunk';
import createHistory from 'history/lib/createHashHistory';
import getRoutes from '../routes';
import apiRequester from '../../modules/common/middlewares/apiRequester';
import assembleApiRequester from '../../modules/common/middlewares/assembledApiRequester';
import rootReducer from '../reducers';

const finalCreateStore = compose(
    applyMiddleware(thunk, apiRequester, assembleApiRequester),
    reduxReactRouter({ getRoutes, createHistory })
)(createStore);

export default function configureStore(initialState) {
    return finalCreateStore(rootReducer, initialState);
}
