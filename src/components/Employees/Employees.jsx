import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Employee from "./Employee/Employee";
import "./Employee.css";

function Employees(props) {
  const [employees, setEmployees] = useState([]);
  const [initialEmployees, setInitialEmployees] = useState([]);
  const [text, setText] = useState("");

  //constructor, componentDidMount, componentDidUpdate, componentWillUnmount, render do not exist.

  useEffect(() => { //better for api cals
    // console.log('Use effect is called');
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
        setEmployees(users);
        setInitialEmployees(users);
      });

      // return () => console.log('ComponentWillUnmount from useEffect is called'); //componentWillUnmount
  }, []); //depedence array, [] -> componentDidMount, 

  // useEffect(() => {
  //   console.log('Use effect is called');
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       let users = json.map((user) => {
  //         return {
  //           id: user.id,
  //           name: user.name,
  //           email: user.email,
  //           company: user.company.name,
  //         };
  //       });
  //       setEmployees(users);
  //       setInitialEmployees(users);
  //     });
  // }, [noOfPage]); //depedence array, [noOfPage] -> componentDidUpdate, 

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

  // console.log('Render Employees');
  
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