// import { createStore, applyMiddleware, compose } from 'redux';
// import { reduxReactRouter } from 'redux-router';
// import createHistory from 'history/lib/createHashHistory';
// import getRoutes from '../routes';
// import thunk from 'redux-thunk';
// import apiRequester from '../middleware/apiRequester';
// import assembleApiRequester from '../middleware/assembledApiRequester';
// import rootReducer from '../reducers';
//
// const finalCreateStore = compose(
//     applyMiddleware(thunk, apiRequester, assembleApiRequester),
//     // reduxReactRouter({ getRoutes, createHistory })
// )(createStore);
//
// export default function configureStore(initialState) {
//     return finalCreateStore(rootReducer, initialState);
// }
