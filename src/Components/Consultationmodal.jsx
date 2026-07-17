import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaArrowRight, FaTimes } from "react-icons/fa";

const ConsultationModal = ({ show, handleClose }) => {
  const form = useRef();

  if (!show) return null;

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
          handleClose(); // Close modal after successful submission
        },
        (error) => {
          console.log(error);
          alert("Failed to send. Please try again.");
        }
      );
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={handleClose}>
          <FaTimes />
        </button>

        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <h2 className="modal-title">Book Free Consultation</h2>

            <div className="row mt-4">
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

              <div className="col-lg-12">
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
  );
};

export default ConsultationModal;