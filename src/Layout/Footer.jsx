import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import logo from "../Assests/Email-logo.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Company */}
          <div className="footer-column">
            <div className="footer-logo">
              <img src={logo} alt="Logo" />
              <h3>MailBoost</h3>
            </div>

            <p>
              We help businesses in US & India generate leads and revenue
              through high-converting email marketing campaigns and automation.
            </p>

            <button className="social-icon">
              <FaFacebookF />
            </button>

            <button className="social-icon">
              <FaTwitter />
            </button>

            <button className="social-icon">
              <FaLinkedinIn />
            </button>

            <button className="social-icon">
              <FaInstagram />
            </button>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <a href="/testimonials">Testimonials</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4>Our Services</h4>
            <ul>
              <li>Email Campaign Setup</li>
              <li>Bulk Email Marketing</li>
              <li>Automation Funnels</li>
              <li>Newsletter Design</li>
              <li>Lead Nurturing</li>
              <li>Cold Email Outreach</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4>Contact Us</h4>

            <div className="contact-item">
              <FaPhoneAlt />
              <span>+91 98765 43210</span>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <span>hello@mailboost.com</span>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Hyderabad, Telangana, India</span>
            </div>

            <div className="contact-item">
              <FaClock />
              <span>Mon - Fri : 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 MailBoost. All Rights Reserved.</p>

          <div className="footer-policy">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
