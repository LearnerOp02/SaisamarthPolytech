import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaChevronRight } from "react-icons/fa";

const styles = {
  footer: {
    background: "#0a192f",
    borderTop: "1px solid rgba(100, 255, 218, 0.1)",
    position: "relative",
    overflow: "hidden",
  },
  gradientOverlay: {
    background:
      "radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.05) 0%, transparent 50%)",
    pointerEvents: "none",
  },
  sectionTitle: {
    borderBottom: "2px solid rgba(100, 255, 218, 0.1)",
  },
  hoverEffect: {
    transition: "all 0.3s ease",
  },
};

const FooterLink = ({ to, children, onClick }) => (
  <li className="mb-2">
    <Link
      to={to}
      onClick={onClick}
      className="text-light text-decoration-none d-flex align-items-center hover-link"
      style={styles.hoverEffect}
    >
      <FaChevronRight className="me-2 opacity-75" size={12} />
      {children}
    </Link>
  </li>
);

const ContactLink = ({ href, icon: Icon, children }) => (
  <p className="mb-2">
    <Link
      to={href}
      className="text-light text-decoration-none d-flex align-items-center hover-link"
      style={styles.hoverEffect}
    >
      <Icon className="me-2" /> {children}
    </Link>
  </p>
);

const FooterSection = ({ title, children }) => (
  <div className="col-lg-4 col-md-6 col-sm-12 text-center text-md-start">
    <h5 className="text-white fw-bold mb-4 pb-2" style={styles.sectionTitle}>
      {title}
    </h5>
    {children}
  </div>
);

const Footer = () => {
  const handleLinkClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentYear = new Date().getFullYear();

  const footerLinks = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/aboutus", label: "About Us" },
      { to: "/contactus", label: "Contact Us" },
      { to: "/clients", label: "Clients" },
      { to: "/application", label: "Application" },
    ],
    []
  );

  return (
    <footer style={styles.footer}>
      <div className="position-absolute w-100 h-100" style={styles.gradientOverlay}></div>

      <div className="container py-5 position-relative">
        <div className="row g-4">
          {/* Company Info */}
          <FooterSection title="Saisamarth Polytech Pvt. Ltd.">
            <p className="text-light opacity-75">
              We specialize in cutting-edge solutions in polymer technology, leading through innovation and quality.
            </p>
          </FooterSection>

          {/* Navigation Links */}
          <FooterSection title="Explore">
            <ul className="list-unstyled">
              {footerLinks.map(({ to, label }) => (
                <FooterLink key={to} to={to} onClick={handleLinkClick}>
                  {label}
                </FooterLink>
              ))}
            </ul>
          </FooterSection>

          {/* Contact Info */}
          <FooterSection title="Get in Touch">
            <div className="contact-info">
              <ContactLink href="mailto:saisamarthpolytech@gmail.com" icon={FaEnvelope}>
                saisamarthpolytech@gmail.com
              </ContactLink>
              <ContactLink href="tel:+919324529411" icon={FaPhone}>
                +91 9324529411
              </ContactLink>
            </div>
          </FooterSection>
        </div>

        {/* Footer Bottom */}
        <div className="mt-5 pt-4 text-center border-top" style={{ borderColor: "rgba(100, 255, 218, 0.1)" }}>
          <p className="text-light opacity-75 mb-0">
            &copy; {currentYear} Saisamarth Polytech Pvt. Ltd. All Rights Reserved.
            <Link to="/privacy" className="text-light ms-2 text-decoration-none hover-link">
              Privacy Policy
            </Link>{" "}
            |
            <Link to="/terms" className="text-light ms-2 text-decoration-none hover-link">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>

      <style>
        {`
          .hover-link:hover {
            color: #64ffda !important;
            transform: translateX(5px);
          }

          @media (max-width: 768px) {
            .container {
              padding-left: 20px;
              padding-right: 20px;
            }
          }
          
          @media (max-width: 576px) {
            .col-sm-12 {
              text-align: center !important;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;