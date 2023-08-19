import React from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

const Login = () => {
  let history = useHistory();

  const validateForm = (e) => {
    e.preventDefault();
    var firstName = document.getElementById("first_name").value;
    var password = document.getElementById("password").value;

    // regex for name and password
    const nameRegex = /^[A-Za-z ]{1,20}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{1,20}$/;

    if (!nameRegex.test(firstName)) {
      alert("Invalid name. Name must be up to 20 characters long, without symbols or numbers.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("Invalid password. Password must be up to 20 characters long, containing at least one uppercase letter, one lowercase letter, one number, and one symbol.");
      return;
    }

    let data = {
      firstName: firstName,
      password: password,
    };
    checkLogin(data);
  };

  const checkLogin = (data) => {
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          // Login Success
          if (data.firstName === "Admin" && data.password === "Admin@123") {
            history.push("/employees");
          } else {
            history.push("/employees2");
          }
        } else {
          alert("Failed to login");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to login");
      });
  };

  return (
    <div className="login-container con">
      <div className="formManage">
        <h2 className="text-success text-center">Login Form</h2>
        <form onSubmit={validateForm}>
          <div className="form-group">
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Login"
              className="btn btn-primary mt-2 btnsub"
            />
          </div>
        </form>
        <div className="register-link mt-2 reg">
          New User? <a href="http://localhost:3000/register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
