import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Employee from "./Employee";
import "./Employee.css";

function Employees(props) {
  const [employees, setEmployees] = useState([]);
  const [initialEmployees, setInitialEmployees] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      // .then((json) => console.log(json));+
      .then((json) => {
        let users = json.map((user) => {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            company: user.company.name,
          };
        });
        setEmployees(users);
        setInitialEmployees(users);
      });
  }, []); //depedence array

  const changeText = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
    let newEmployees = [];

    if (event.target.value) {
      newEmployees = employees.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
    } else {
      newEmployees = [...initialEmployees];
    }
    setEmployees(newEmployees);
  };
  return (
    <div>
      {props.children}
      <br />
      <TextField
        
        label="Search Employees"
        color="primary"
        focused
        value={text}
        onChange={changeText}
      />
      <ul className="card-items" >
        {employees.map((employee) => (
          <Employee key={employee.id} id={employee.id} name={employee.name} email={employee.email} company={employee.company} />
        ))}
      </ul>
    </div>
  );
}

export default Employees;
// id,name,email,company
