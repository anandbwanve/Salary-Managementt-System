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

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
        <h2 className="text-center">ADMIN ACCESS</h2>
      <h2 className="text-center">Salary List</h2>
      <Link to="/add-employee" className="btn btn-primary mb-2">
        Add Employee
      </Link>
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
            <th>Actions</th>
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
              <td>
                <Link
                  className="btn btn-primary"
                  to={`/edit-employee/${employee.id}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployee(employee.id)}
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
