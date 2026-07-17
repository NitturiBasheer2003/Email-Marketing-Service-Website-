import React from "react";
import image1 from "../Assests/Aboutus-image.png";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="container Aboutus-Overview py-5">
      <div className="row align-items-center gx-5">
        <div className="col-lg-6">
          <div className="Aboutus-image">
            <img src={image1} alt="About Us" className="img-fluid" />
            <div className="about-card">
              <div className="row text-center">
                <div className="col-3 stat-item">
                  <h3>500+</h3>
                  <p>Projects</p>
                </div>
                <div className="col-3 stat-item">
                  <h3>150+</h3>
                  <p>Clients</p>
                </div>
                <div className="col-3 stat-item">
                  <h3>98%</h3>
                  <p>Success Rate</p>
                </div>
                <div className="col-3">
                  <h3>12+</h3>
                  <p>Experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="Aboutus-content">
            <h6 className="about-title">ABOUT US</h6>
            <h2 className="about-heading">
              We Help Businesses Grow <br />
              With Email Marketing
            </h2>
            <p className="about-description">
              We are a team of email marketing experts passionate about helping
              businesses increase their revenue through data-driven email
              campaigns and automation.
            </p>
            <div className="about-list">
              <p>
                <FaCheckCircle className="check-icon" />
                8+ Years of Experience
              </p>
              <p>
                <FaCheckCircle className="check-icon" />
                500+ Successful Campaigns
              </p>
              <p>
                <FaCheckCircle className="check-icon" />
                250+ Happy Clients
              </p>
              <p>
                <FaCheckCircle className="check-icon" />
                Certified Email Marketing Experts
              </p>
            </div>
            <button className="about-btn">
              Know More About Us
              <FaArrowRight className="ms-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
