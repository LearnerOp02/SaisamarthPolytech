import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "../style/Footer.css";

const FooterLink = ({ to, children }) => (
  <li className="mb-2">
    <Link to={to} className="footer-link text-light">
      {children}
    </Link>
  </li>
);

const ContactLink = ({ href, icon: Icon, children }) => (
  <p className="mb-2">
    <Link to={href} className="footer-contact d-flex align-items-center text-light">
      <Icon className="me-2" /> {children}
    </Link>
  </p>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-light">
      <div className="container py-4">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase text-dark">
              Saisamarth Polytech Pvt. Ltd.
            </h5>
            <p className="text-light">
              We specialize in cutting-edge solutions in polymer technology,
              leading through innovation and quality.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase text-dark">Explore</h5>
            <ul className="list-unstyled">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/aboutus">About Us</FooterLink>
              <FooterLink to="/contactus">Contact Us</FooterLink>
              <FooterLink to="/clients">Clients</FooterLink>
              <FooterLink to="/application">Application</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase text-dark">Get in Touch</h5>
            <div className="contact-info">
              <ContactLink href="mailto:saisamarthpolytech@gmail.com" icon={FaEnvelope}>
                saisamarthpolytech@gmail.com
              </ContactLink>
              <ContactLink href="tel:+919324529411" icon={FaPhone}>
                +91 9324529411
              </ContactLink>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom text-center mt-4">
          <p className="text-light mb-0">
            &copy; {currentYear} Saisamarth Polytech Pvt. Ltd. All Rights Reserved.
            <Link to="/privacy" className="footer-link text-warning ms-2 text-dark">
              Privacy Policy
            </Link>{" "}
            |
            <Link to="/terms" className="footer-link text-warning ms-2 text-dark">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
