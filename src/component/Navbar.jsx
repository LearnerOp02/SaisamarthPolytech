import React, { useState, useEffect, useCallback, useMemo } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import classNames from "classnames";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, []);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const navbarStyle = useMemo(
    () => ({
      background: scrollPosition > 50 ? "rgba(10, 25, 47, 0.95)" : "transparent",
      backdropFilter: "blur(10px)",
      transition: "all 0.3s ease-in-out",
      boxShadow: scrollPosition > 50 ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
    }),
    [scrollPosition]
  );

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

  const menuItems = useMemo(
    () => [
      { path: "/", label: "Home" },
      { path: "/aboutus", label: "About" },
      { path: "/product", label: "Products" },
      { path: "/application", label: "Applications" },
      { path: "/clients", label: "Clients" },
      { path: "/contactus", label: "Contact" },
    ],
    []
  );

  const NavLinkItem = ({ path, label }) => (
    <li className="nav-item">
      <NavLink
        className="nav-link px-3 py-2 text-light"
        style={({ isActive }) => ({
          ...linkStyle,
          ...(isActive ? activeLinkStyle : {}),
        })}
        to={path}
        onClick={handleLinkClick}
      >
        {label}
      </NavLink>
    </li>
  );

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={navbarStyle}>
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/" onClick={handleLinkClick}>
          <img
            src={logo}
            alt="Logo"
            className="rounded-circle me-2"
            style={{
              width: "50px",
              height: "50px",
              filter: "drop-shadow(0 0 5px rgba(100, 255, 218, 0.5))",
            }}
            loading="lazy"
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

        {/* Toggle Button */}
        <button
          className={classNames("navbar-toggler", { collapsed: !isMenuOpen })}
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          style={{
            border: "2px solid rgba(100, 255, 218, 0.5)",
            padding: "0.5rem",
          }}
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1) hue-rotate(90deg)" }} />
        </button>

        {/* Menu */}
        <div className={classNames("collapse navbar-collapse", { show: isMenuOpen })}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {menuItems.map(({ path, label }) => (
              <NavLinkItem key={path} path={path} label={label} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;