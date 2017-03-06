import { connect } from 'react-redux';
import Employees from '../components/employees';
import * as EmployeesActionCreator from '../actions-creators/employees';


function mapStateToProps(state) {
    return {
        employees: state.employees
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadEmployees: () => dispatch(EmployeesActionCreator.loadEmployees()),
        deleteEmployee: (employee) => dispatch(EmployeesActionCreator.deleteEmployee(employee))
    };
}

const EmployeesCtrl = connect(
    mapStateToProps, mapDispatchToProps
)(Employees);

export default EmployeesCtrl;
