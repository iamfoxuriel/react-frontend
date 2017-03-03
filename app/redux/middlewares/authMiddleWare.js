//import {replaceState} from 'redux-router';

export default  store => next => action => {

    //if (!action.requireAuth || store.getState().auth.user) {
    //    return next(action);
    //}
    //return next(replaceState(null, '/login'));

    console.group(action.type);
    console.info('dispatching', action);

    let result = next(action);

    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result;
}

