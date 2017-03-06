export const LOAD_EMPLOYEES = Symbol('LOAD_EMPLOYEES');
export const ADD_EMPLOYEE = Symbol('ADD_EMPLOYEE');
export const DELETE_EMPLOYEE = Symbol('DELETE_EMPLOYEE');

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
