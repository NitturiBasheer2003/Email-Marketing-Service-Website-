import React, { useState } from "react";
import logo from "../Assests/Email-logo.webp";
import ConsultationModal from "../Components/Consultationmodal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">

        {/* Logo */}
        <a href="/" className="logo-container">
          <img
            src={logo}
            alt="MailBoost Logo"
            className="logo-icon"
          />
          <span className="logo-text">MailBoost</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation */}
        <div className={`nav-wrapper ${isMenuOpen ? "active" : ""}`}>

          <nav className="nav-menu">

            <a href="/" className="nav-link">
              Home
            </a>

            <a href="/about" className="nav-link">
              About
            </a>

            <a href="/services" className="nav-link">
              Services
            </a>

            <a href="/why-choose-us" className="nav-link">
              Why Choose Us
            </a>

            <a href="/process" className="nav-link">
              Process
            </a>

            <a href="/pricing" className="nav-link">
              Pricing
            </a>

            <a href="/testimonials" className="nav-link">
              Testimonials
            </a>

            <a href="/contact" className="nav-link">
              Contact
            </a>

          </nav>

          {/* CTA Button */}

          <button
            className="cta-button"
            onClick={() => setShowModal(true)}
          >
            Book Free Consultation
          </button>

        </div>

      </header>

      {/* Consultation Popup */}

      <ConsultationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />

    </>
  );
};

export default Header;