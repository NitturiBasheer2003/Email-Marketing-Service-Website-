import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">

        <div className="row align-items-center">

          {/* Left Side */}

          <div className="col-lg-4">

            <div className="contact-info">

              <h6 className="contact-subtitle">
                CONTACT US
              </h6>

              <h2 className="contact-title">
                Book Your Free <br />
                Strategy Call
              </h2>

              <div className="info-item">

                <div className="info-icon">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h5>Phone</h5>
                  <p>+91 98765 43210</p>
                </div>

              </div>

              <div className="info-item">

                <div className="info-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <h5>Email</h5>
                  <p>hello@mailboost.com</p>
                </div>

              </div>

              <div className="info-item">

                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h5>Office</h5>

                  <p>
                    123 Business Street,
                    <br />
                    Hyderabad, India
                  </p>

                </div>

              </div>

              <div className="info-item">

                <div className="info-icon">
                  <FaClock />
                </div>

                <div>
                  <h5>Working Hours</h5>
                  <p>Mon - Fri : 9 AM - 6 PM</p>
                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-8">

            <div className="contact-form">

              <form>

                <div className="row">

                  <div className="col-lg-6 mb-3">

                    <label>Name</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />

                  </div>

                  <div className="col-lg-6 mb-3">

                    <label>Email</label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />

                  </div>

                  <div className="col-lg-6 mb-3">

                    <label>Phone</label>

                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your Phone Number"
                    />

                  </div>

                  <div className="col-lg-6 mb-3">

                    <label>Country</label>

                    <select className="form-select">

                      <option>Select Country</option>
                      <option>India</option>
                      <option>United States</option>

                    </select>

                  </div>

                  <div className="col-lg-12 mb-3">

                    <label>Business Type</label>

                    <select className="form-select">

                      <option>Select Business Type</option>
                      <option>Startup</option>
                      <option>E-Commerce</option>
                      <option>Healthcare</option>
                      <option>Finance</option>
                      <option>Education</option>
                      <option>Real Estate</option>
                      <option>Marketing Agency</option>
                      <option>Other</option>

                    </select>

                  </div>

                  <div className="col-lg-12 mb-3">

                    <label>Message</label>

                    <textarea
                      rows="4"
                      className="form-control"
                      placeholder="Tell us about your business..."
                    ></textarea>

                  </div>

                  <div className="col-lg-12 mt-3">

                    <button className="submit-btn">

                      Submit & Book Free Call

                      <FaArrowRight className="ms-2" />

                    </button>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;