import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "./Employee.css";
import CEmployee from "./Employee/CEmployee";

//component life cycle

class CEmployees extends Component {
    constructor(props) {
        // console.log('Constructor CEmployees is called');
        super(props);
        this.state = {
            employees: [],
            initialEmployees: [],
            text: ""
        };
    }

    componentDidMount() { // make api calls
        // console.log('componentDidMount CEmployees is called');
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
            let users = json.map((user) => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                company: user.company.name,
            };
            });
            this.setState({ employees: users, initialEmployees: users });
      });
    }

    componentDidUpdate() {
        // console.log('Component Did Update is called');
    }

    componentWillUnmount() {
    }

    changeText = (event) => {
        this.setState({ text: event.target.value });
        let newEmployees = [];
    
        if (event.target.value) {
          newEmployees = this.state.employees.filter((item) =>
            item.name.toLowerCase().includes(event.target.value.toLowerCase())
          );
        } else {
          newEmployees = [...this.state.initialEmployees];
        }
        this.setState({ employees: newEmployees });
    };

    render() {
        // console.log('Render CEmployees is called');
        return (<div>
            {this.props.children}
            <br />
            <TextField
              label="Search Employees"
              color="primary"
              focused
              value={this.state.text}
              onChange={this.changeText}
            />
            <ul className="card-items" >
              {this.state.employees.map((employee) => <CEmployee key={employee.id} id={employee.id} name={employee.name} email={employee.email} company={employee.company} />)}
            </ul>
          </div>)
    }
}

export default CEmployees;