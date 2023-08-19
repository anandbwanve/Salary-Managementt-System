import React from "react";
import "./ContactUs.css";
import anandImage from "./images/anand.jpeg";
import amitImage from "./images/amit.jpeg";
import minalImage from "./images/minal.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';


const ContactUs = () => {
  return (
    <div className="contact-section">
      <div className="contact-bg">
        <h3>Get in Touch with Us</h3>
        <h2>Contact Us</h2>
        <div className="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="text">Feel free to reach out to us for any inquiries.</p>
      </div>

      <div className="contact-details">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>Email</span>
            <span>info@salarymanagement.com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>Phone</span>
            <span>+91 77698805890</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Address</span>
            <span>CDAC Kharghar, Mumbai</span>
          </div>
        </div>

        <div className="cofounders">
          <h3>Our team is available for 24/7</h3>
          <div className="cofounder-item">
            <div className="cofounder-image">
              <img src={anandImage} alt="Anand Wanve" />
            </div>
            <div className="cofounder-details">
              <h4>Anand Wanve</h4>
              <p>Co-Founder</p>
              <div className="social-icons">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="cofounder-item">
            <div className="cofounder-image">
              <img src={amitImage} alt="Amit Danole" />
            </div>
            <div className="cofounder-details">
              <h4>Amit Danole</h4>
              <p>Co-Founder</p>
              <div className="social-icons">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="cofounder-item">
            <div className="cofounder-image">
              <img src={minalImage} alt="Minal Patil" />
            </div>
            <div className="cofounder-details">
              <h4>Minal Patil</h4>
              <p>Co-Founder</p>
              <div className="social-icons">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
