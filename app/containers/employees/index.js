import { connect } from 'react-redux';
import Employees from '../../modules/employees/index';
import * as EmployeesActionCreator from '../../redux/actions-creators/employees';


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
