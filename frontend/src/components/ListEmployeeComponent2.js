import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="container">
      <strong><h2 className="text-center">MANAGER ACCESS</h2></strong>
      <h2 className="text-center">Salary List</h2>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Tax</th>
            <th>Provisional Fund</th>
            <th>Allowance (Travel)</th>
            <th>Inhand Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
              <td>{employee.salary}</td>
              <td>{employee.tax}</td>
              <td>{employee.provisionalFund}</td>
              <td>{employee.allowanceTravel}</td>
              <td>{employee.inhandSalary}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
