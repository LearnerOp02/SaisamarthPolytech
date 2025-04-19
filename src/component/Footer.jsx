import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaChevronRight } from "react-icons/fa";

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
    <footer
      className="footer"
      style={{
        background: "#0a192f",
        borderTop: "1px solid rgba(100, 255, 218, 0.1)",
      }}
    >
      <div
        className="gradient-overlay"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.05) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      ></div>

      <div className="container py-5 position-relative">
        <div className="row g-4">
          {/* Company Info */}
          <section className="col-lg-4 col-md-6 col-sm-12 text-center text-md-start">
            <h5
              className="text-white fw-bold mb-4 pb-2"
              style={{ borderBottom: "2px solid rgba(100, 255, 218, 0.1)" }}
            >
              Saisamarth Polytech Pvt. Ltd.
            </h5>
            <p className="text-light opacity-75">
              We specialize in cutting-edge solutions in polymer technology,
              leading through innovation and quality.
            </p>
          </section>

          {/* Navigation Links */}
          <nav
            className="col-lg-4 col-md-6 col-sm-12 text-center text-md-start"
            aria-label="Footer Navigation"
          >
            <h5
              className="text-white fw-bold mb-4 pb-2"
              style={{ borderBottom: "2px solid rgba(100, 255, 218, 0.1)" }}
            >
              Explore
            </h5>
            <ul className="list-unstyled">
              {footerLinks.map(({ to, label }) => (
                <li key={to} className="mb-2">
                  <Link
                    to={to}
                    onClick={handleLinkClick}
                    className="text-light text-decoration-none d-flex align-items-center hover-link"
                    title={`Navigate to ${label}`}
                    aria-label={`Navigate to ${label}`}
                  >
                    <FaChevronRight className="me-2 opacity-75" size={12} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <section
            className="col-lg-4 col-md-6 col-sm-12 text-center text-md-start"
            aria-label="Contact Information"
          >
            <h5
              className="text-white fw-bold mb-4 pb-2"
              style={{ borderBottom: "2px solid rgba(100, 255, 218, 0.1)" }}
            >
              Get in Touch
            </h5>
            <div className="contact-info">
              <p className="mb-2">
                <Link
                  to="mailto:saisamarthpolytech@gmail.com"
                  className="text-light text-decoration-none d-flex align-items-center hover-link"
                  title="Email Saisamarth Polytech"
                  aria-label="Email Saisamarth Polytech"
                >
                  <FaEnvelope className="me-2" /> saisamarthpolytech@gmail.com
                </Link>
              </p>
              <p className="mb-2">
                <Link
                  to="tel:+919324529411"
                  className="text-light text-decoration-none d-flex align-items-center hover-link"
                  title="Call Saisamarth Polytech"
                  aria-label="Call Saisamarth Polytech"
                >
                  <FaPhone className="me-2" /> +91 9324529411
                </Link>
              </p>
            </div>
          </section>
        </div>

        {/* Footer Bottom */}
        <div
          className="mt-5 pt-4 text-center border-top"
          style={{ borderColor: "rgba(100, 255, 218, 0.1)" }}
        >
          <p className="text-light opacity-75 mb-0">
            &copy; {currentYear} Saisamarth Polytech Pvt. Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>

      <style>
        {`
          .footer {
            font-family: 'Poppins', sans-serif;
            position: relative;
            overflow: hidden;
          }

          .gradient-overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
          }

          .hover-link {
            transition: all 0.3s ease;
          }

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

export default React.memo(Footer);
