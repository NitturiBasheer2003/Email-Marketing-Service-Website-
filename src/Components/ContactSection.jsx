import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_envcsl3",
        "template_ep7pgyd",
        form.current,
        "fF5udfdCzCIgdB0MW"
      )
      .then(
        () => {
          alert("Your consultation request has been submitted successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="contact-info">
              <h6 className="contact-subtitle">CONTACT US</h6>

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

          <div className="col-lg-8">
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">

                  <div className="col-lg-6 mb-3">
                    <label>Name</label>
                    <input
                      type="text"
                      name="user_name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-lg-6 mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      name="user_email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="col-lg-6 mb-3">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="user_phone"
                      className="form-control"
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>

                  <div className="col-lg-6 mb-3">
                    <label>Country</label>
                    <select
                      className="form-select"
                      name="country"
                      required
                    >
                      <option value="">Select Country</option>
                      <option>India</option>
                      <option>United States</option>
                    </select>
                  </div>

                  <div className="col-lg-12 mb-3">
                    <label>Business Type</label>
                    <select
                      className="form-select"
                      name="business_type"
                      required
                    >
                      <option value="">Select Business Type</option>
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
                      name="message"
                      className="form-control"
                      placeholder="Tell us about your business..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-lg-12 mt-3">
                    <button type="submit" className="submit-btn">
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