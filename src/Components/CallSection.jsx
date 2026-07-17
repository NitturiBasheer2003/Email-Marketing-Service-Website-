import React from "react";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../Assests/Callsection.png"; // Change to your image path

const  CallSection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-3 text-center">
              <img
                src={image1}
                alt="CTA"
                className="cta-image img-fluid"
              />
            </div>
            <div className="col-lg-5">
              <div className="cta-content">
                <h2>
                  Ready to Grow Your Business?
                </h2>
                <p>
                  Book your free consultation today and let's take your
                  email marketing to the next level.
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end text-center">
              <button className="proposal-btn">
                Get Free Proposal
                <FaArrowRight className="ms-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallSection;