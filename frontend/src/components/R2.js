import React from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

const R2 = () => {
  let history = useHistory();

  const validateForm = (e) => {
    e.preventDefault();
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    // Regular expressions for validation
    const nameRegex = /^[A-Za-z ]{1,20}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!nameRegex.test(firstName)) {
      alert("Invalid first name. First name must be up to 20 characters long, without symbols or numbers.");
      return;
    }

    if (!nameRegex.test(lastName)) {
      alert("Invalid last name. Last name must be up to 20 characters long, without symbols or numbers.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Invalid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("Invalid password. Password must be at least 8 characters long, containing at least one uppercase letter, one lowercase letter, one number, and one symbol.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    addData(data);
  };

  const addData = (data) => {
    fetch("http://localhost:8080/Registration", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert("Data added");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to add data");
      });
  };

  return (
    <div className="r2-container">
      <div className="r2-card">
        <div className="card-body">
          <h2 className="card-title">Registration Form</h2>
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
              <label htmlFor="last_name">Last Name:</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
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
              <label htmlFor="confirm_password">Confirm Password:</label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Register"
                className="btn btn-primary mt-2"
              />
            </div>
          </form>
          <div className="login-link mt-2">
            Already have an account? <a href="http://localhost:3000/login">Log in here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default R2;
