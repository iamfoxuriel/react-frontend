export const LOAD_EMPLOYEES = 'LOAD_EMPLOYEES';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';


function receiveEmployees(employees) {
    return {
        type: LOAD_EMPLOYEES,
        employees
    };
}


export function loadEmployees() {
    return (dispatch) => {
        return fetch('http://localhost:3004/smbo-api/employees')
            .then(response => response.json())
            .then(json => dispatch(receiveEmployees(json)));
    };
}


export function addEmployee(employee) {
    return { type: ADD_EMPLOYEE, employee };
}

function doDeleteEmployee(employee) {
    return { type: DELETE_EMPLOYEE, employee };
}

export function deleteEmployee(employee) {
    return (dispatch) => {
        return fetch('http://localhost:3004/smbo-api/employees')
            .then(() => dispatch(doDeleteEmployee(employee)));
    };
}

