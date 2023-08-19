import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <section id="section1">
      <div className="container">
        <div className="row">
          <h1 className="salary text-center">Salary Management</h1>
          <div className="col-md-6 col-sm-12 coll">
            <p
              className="salaryrelate"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Manage your organization's salaries with ease and precision.
              Salary Management System provides a comprehensive solution for
              calculating, managing, and distributing salaries. Spend less time
              on manual processes and focus on what truly matters - growing your
              business. Our intuitive interface allows you to effortlessly
              handle salary calculations, tax deductions, and employee benefits.
              With advanced analytics and reporting features, gain valuable
              insights into your payroll data and make informed decisions. Join
              us and experience the power of streamlined salary management.
            </p>

            <p></p>
            <a href="http://localhost:3000/about">
              <button className="b1">View More</button>
            </a>
          </div>
          <div className="col-md-6 col-sm-12 coll salaryrelate">
            <div className="embed-responsive embed-responsive-16by9">
              <video className="embed-responsive-item" controls muted autoPlay>
                <source src="/Video/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
