import React, { Component } from 'react';


class Employee extends Component {

    static defaultProps = {
        employee: {}
    };

    static propTypes = {
        employee: React.PropTypes.bool.isRequired
    };


    render() {
        return (
            <li key={this.props.employee.id}>
                {this.props.employee.firstName} {this.props.employee.lastName}
                <button>Remove</button>
            </li>
        );
    }
}

export default Employee;
