import React, { Component, PropTypes } from 'react';


class Employee extends Component {

    static defaultProps = {
        employee: {}
    };

    static propTypes = {
        employee: PropTypes.object.isRequired,
        deleteEmployee: PropTypes.func.isRequired
    };

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteEmployee(this.props.employee);
    }


    render() {
        return (
            <li key={this.props.employee.id}>
                {this.props.employee.firstName} {this.props.employee.lastName}
                <button onClick={e => this.handleDelete(e)}>Remove</button>
            </li>
        );
    }
}

export default Employee;
