import React, { useState, useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, []);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const navbarStyle = {
    background:
      scrollPosition > 50
        ? "rgba(10, 25, 47, 0.95)"
        : "transparent",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease-in-out",
    boxShadow: scrollPosition > 50 ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
  };

  const linkStyle = {
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s ease",
  };

  const activeLinkStyle = {
    color: "#64ffda",
    textShadow: "0 0 10px rgba(100, 255, 218, 0.5)",
    fontWeight: "bold",
    borderBottom: "2px solid #64ffda",
  };

  const NavItem = ({ to, children }) => (
    <li className="nav-item">
      <NavLink
        className="nav-link px-3 py-2 text-light"
        style={({ isActive }) => ({
          ...linkStyle,
          ...(isActive ? activeLinkStyle : {}),
        })}
        to={to}
        onClick={handleLinkClick}
      >
        {children}
      </NavLink>
    </li>
  );

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={navbarStyle}>
      <div className="container">
        <NavLink
          className="navbar-brand d-flex align-items-center"
          to="/"
          onClick={handleLinkClick}
        >
          <img
            src={logo}
            alt="Logo"
            className="rounded-circle me-2"
            style={{
              width: "50px",
              height: "50px",
              filter: "drop-shadow(0 0 5px rgba(100, 255, 218, 0.5))",
            }}
          />
          <span
            className="text-light fw-bold"
            style={{
              background: "linear-gradient(45deg, #fff, #64ffda)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Saisamarth Polytech
          </span>
        </NavLink>

        <button
          className={`navbar-toggler ${isMenuOpen ? "" : "collapsed"}`}
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          style={{
            border: "2px solid rgba(100, 255, 218, 0.5)",
            padding: "0.5rem",
          }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1) hue-rotate(90deg)" }}
          />
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {[
              { path: "/", label: "Home" },
              { path: "/aboutus", label: "About" },
              { path: "/product", label: "Products" },
              { path: "/application", label: "Applications" },
              { path: "/clients", label: "Clients" },
              { path: "/contactus", label: "Contact" },
            ].map(({ path, label }) => (
              <NavItem key={path} to={path}>
                {label}
              </NavItem>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
