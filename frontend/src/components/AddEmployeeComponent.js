import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [salary, setSalary] = useState(0);
  const history = useHistory();
  const { id } = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    const employee = {
      firstName,
      lastName,
      emailId,
      salary,
    };

    if (id) {
      EmployeeService.updateEmployee(id, employee)
        .then((response) => {
          history.push('/employees');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      EmployeeService.createEmployee(employee)
        .then((response) => {
          console.log(response.data);
          history.push('/employees');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      EmployeeService.getEmployeeById(id)
        .then((response) => {
          const { firstName, lastName, emailId, salary } = response.data;
          setFirstName(firstName);
          setLastName(lastName);
          setEmailId(emailId);
          setSalary(salary);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const title = id ? 'Update Employee' : 'Add Employee';

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">{title}</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">First Name:</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Email Id:</label>
                  <input
                    type="email"
                    placeholder="Enter email Id"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Salary:</label>
                  <input
                    type="number"
                    placeholder="Enter salary"
                    name="salary"
                    className="form-control"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateEmployee(e)}
                >
                  Submit
                </button>
                <Link to="/employees" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
