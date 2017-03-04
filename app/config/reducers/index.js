import { combineReducers } from 'redux';
import employees from '../../modules/employees/reducers/employees';


const rootReducer = combineReducers({
    employees
});

export default rootReducer;
