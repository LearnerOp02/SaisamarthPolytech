import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import "../style/Navbar.css";
import logo from "../assets/logo.jpg";
import clsx from "clsx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      navbar.classList.toggle("navbar-scrolled", window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const NavItem = ({ to, children }) => (
    <li className="nav-item">
      <NavLink
        className={({ isActive }) =>
          clsx(
            "nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation",
            { active: isActive }
          )
        }
        to={to}
        onClick={handleLinkClick}
      >
        {children}
      </NavLink>
    </li>
  );

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
          className={clsx("navbar-toggler bg-light", { collapsed: !menuOpen })}
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div
          className={clsx("collapse navbar-collapse justify-content-end", {
            show: menuOpen,
          })}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/aboutus">About Us</NavItem>
            <NavItem to="/contactus">Contact Us</NavItem>
            <NavItem to="/product">Product</NavItem>
            <NavItem to="/application">Application</NavItem>
            <NavItem to="/clients">Clients</NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
