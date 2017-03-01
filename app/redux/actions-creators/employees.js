export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';


export function addEmployee(employee) {
    return { type: ADD_EMPLOYEE, employee };
}

export function deleteEmployee(employee) {
    return { type: DELETE_EMPLOYEE, employee };
}

