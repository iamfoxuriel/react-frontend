import { LOAD_EMPLOYEES, ADD_EMPLOYEE, DELETE_EMPLOYEE } from '../actions-creators/employees';


const employees = (state = [], action) => {
    switch (action.type) {
        case LOAD_EMPLOYEES:
            return action.employees;

        case ADD_EMPLOYEE:
            return state.slice(0).push(action.employee);

        case DELETE_EMPLOYEE:
            return state.filter(item => item.id !== action.employee.id);

        default:
            return state;
    }
};

export default employees;
