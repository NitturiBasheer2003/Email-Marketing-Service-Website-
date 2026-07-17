import React from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";

const ConsultationModal = ({ show, handleClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleClose}>
          <FaTimes />
        </button>

        <div className="contact-form">
          <form>
            <h2 className="modal-title">Book Free Consultation</h2>

            <div className="row mt-4">
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

              <div className="col-lg-12">
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
  );
};

export default ConsultationModal;
