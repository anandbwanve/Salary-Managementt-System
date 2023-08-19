import React from "react";
import "./AboutUs.css";
import anandImage from "./images/anand.jpeg";
import amitImage from "./images/amit.jpeg";
import minalImage from "./images/minal.jpg";

const AboutUs = () => {
  const coFounders = [
    {
      name: "Anand Wanve",
      role: "Co-Founder",
      description:
        "Anand is a passionate entrepreneur with expertise in finance and technology. He is dedicated to creating innovative solutions for salary management. He loves to work all .",
      image: anandImage,
    },
    {
      name: "Amit Danole",
      role: "Co-Founder",
      description:
        "Amit is a technology enthusiast and software engineer. He has a deep understanding of system architecture and ensures the smooth operation of the Salary Management System.",
      image: amitImage,
    },
    {
      name: "Minal Patil",
      role: "Co-Founder",
      description:
        "Minal is a skilled financial analyst with a keen eye for detail. She oversees the financial aspects of the Salary Management System, ensuring accuracy and compliance.",
      image: minalImage,
    },
  ];

  return (
    <div className="container">
      <div className="about-section">
        <h2>About Us</h2>
        <p className="jumbotron">
          The Salary Management System is a cutting-edge platform designed to
          simplify and streamline salary management processes for businesses of
          all sizes. Our system provides efficient solutions for calculating,
          managing, and distributing salaries, helping organizations save time
          and resources. At Salary Management System, we are committed to
          delivering user-friendly software with robust features that cater to
          the unique needs of HR departments and payroll managers. Our team of
          dedicated professionals combines expertise in finance, technology, and
          user experience to create a seamless and secure salary management
          experience.
        </p>
      </div>
      <h3 className="founders-heading">Our Co-Founders</h3>
      <div className="row">
        {coFounders.map((coFounder, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <img
                className="card-img-top"
                src={coFounder.image}
                alt={coFounder.name}
              />
              <div className="card-body">
                <h5 className="card-title">{coFounder.name}</h5>
                <h6 className="card-subtitle mb-2">{coFounder.role}</h6>
                <p className="card-text">{coFounder.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
