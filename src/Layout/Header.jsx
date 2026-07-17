import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../Assests/Email-logo.webp";
import ConsultationModal from "../Components/Consultationmodal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="logo-container"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="MailBoost Logo"
            className="logo-icon"
          />
          <span className="logo-text">MailBoost</span>
        </Link>

        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`nav-wrapper ${isMenuOpen ? "active" : ""}`}>

          <nav className="nav-menu">

            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-link"
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-link"
              onClick={closeMenu}
            >
              About
            </Link>

            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-link"
              onClick={closeMenu}
            >
              Services
            </Link>

            <Link
              to="whychooseus"
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-link"
              onClick={closeMenu}
            >
              Why Choose Us
            </Link>

            <Link
              to="process"
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-link"
              onClick={closeMenu}
            >
              Process
            </Link>

            <Link
              to="pricing"
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-link"
              onClick={closeMenu}
            >
              Pricing
            </Link>

            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-link"
              onClick={closeMenu}
            >
              Testimonials
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-link"
              onClick={closeMenu}
            >
              Contact
            </Link>

          </nav>
          <button
            className="cta-button"
            onClick={() => {
              setShowModal(true);
              closeMenu();
            }}
          >
            Book Free Consultation
          </button>

        </div>

      </header>

      <ConsultationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Header;