import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';

import React from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <div className="container-fluid px-0">
          <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "black" }}
            data-bs-theme="dark"
          >
            <Link
              className="navbar-brand"
              style={{ color: "white", fontSize: "24px" }}
              to="/"
            >
              Salary Management System
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{
                      color: "white",
                      fontSize: "16px",
                      textDecoration: "none",
                    }}
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{
                      color: "white",
                      fontSize: "16px",
                      textDecoration: "none",
                    }}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{
                      color: "white",
                      fontSize: "16px",
                      textDecoration: "none",
                    }}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{
                      color: "white",
                      fontSize: "16px",
                      textDecoration: "none",
                    }}
                    to="/login"
                  >
                    Login/Registration
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{
                      color: "white",
                      fontSize: "16px",
                      textDecoration: "none",
                    }}
                    to="/login"
                    // onClick={logOutAction}
                  >
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
