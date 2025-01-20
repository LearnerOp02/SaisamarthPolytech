import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import "../style/Navbar.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar navbar-expand-lg text-light py-3 border-bottom border-3 border-warning animate-navbar">
      <div className="container-fluid d-flex align-items-center">
        {/* Logo and Brand Name */}
        <NavLink
          className="navbar-brand text-uppercase fw-bold text-warning"
          to="/"
          onClick={handleLinkClick}
        >
          <img src={logo} alt="Logo" className="navbar-logo img-fluid me-2" />
          Saisamarth Polytech Pvt. Ltd.
        </NavLink>

        {/* Hamburger Menu */}
        <button
          className={`navbar-toggler bg-light ${menuOpen ? "" : "collapsed"}`}
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            menuOpen ? "show" : ""
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation ${
                    isActive ? "active" : ""
                  }`
                }
                to="/"
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation ${
                    isActive ? "active" : ""
                  }`
                }
                to="/aboutus"
                onClick={handleLinkClick}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation ${
                    isActive ? "active" : ""
                  }`
                }
                to="/contactus"
                onClick={handleLinkClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation ${
                    isActive ? "active" : ""
                  }`
                }
                to="/product"
                onClick={handleLinkClick}
              >
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation ${
                    isActive ? "active" : ""
                  }`
                }
                to="/application"
                onClick={handleLinkClick}
              >
                Application
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation ${
                    isActive ? "active" : ""
                  }`
                }
                to="/clients"
                onClick={handleLinkClick}
              >
                Clients
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;