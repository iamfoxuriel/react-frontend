import React, { Component, PropTypes } from 'react';
import Employee from './employee';

class Employees extends Component {

    static defaultProps = {
        employees: []
    };

    static propTypes = {
        employees: PropTypes.arrayOf(PropTypes.object).isRequired,
        loadEmployees: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.loadEmployees();
    }

    render() {
        return (
            <ul>
                {this.props.employees.map(item => (<Employee employee={item} />))}
            </ul>
        );
    }
}

export default Employees;
