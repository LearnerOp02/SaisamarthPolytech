import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet";
import img from "./Images/paint.jpeg";

const ExteriorWallSystem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="exterior-wall-system" style={{ background: "#0a192f" }}>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Exterior Wall System - Saisamarth Polytech</title>
        <meta
          name="description"
          content="Explore our durable and weather-resistant exterior wall system designed for commercial, residential, and government structures."
        />
        <meta
          name="keywords"
          content="exterior wall system, weather-resistant walls, thermal insulation, building aesthetics"
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="hero-section py-5 text-white"
        style={{ background: "linear-gradient(to bottom, #0a192f, #112240)" }}
      >
        <div className="container py-5">
          <h1
            className="display-4 fw-bold text-center mb-4"
            style={{ color: "#64ffda" }}
            aria-label="Exterior Wall System"
          >
            Exterior Wall System
          </h1>
          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-md-6">
              <div
                className="card h-100"
                style={{
                  background: "#0a192f",
                  border: "1px solid #233554",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  textAlign: "center",
                  padding: "10px",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(100,255,218,0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={img}
                  className="card-img-top"
                  alt="Exterior Wall System"
                  style={{ height: "300px", objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h2 style={{ color: "#64ffda" }}>Features</h2>
              <ul
                style={{
                  color: "#ccd6f6",
                  listStyleType: "none",
                  paddingLeft: "0",
                }}
              >
                <li className="mb-2">
                  <span style={{ color: "#64ffda", marginRight: "10px" }}>
                    •
                  </span>
                  Durable and weather-resistant.
                </li>
                <li className="mb-2">
                  <span style={{ color: "#64ffda", marginRight: "10px" }}>
                    •
                  </span>
                  Superior thermal insulation.
                </li>
                <li className="mb-2">
                  <span style={{ color: "#64ffda", marginRight: "10px" }}>
                    •
                  </span>
                  Enhances aesthetics and value.
                </li>
              </ul>
              <h2 style={{ color: "#64ffda", marginTop: "2rem" }}>
                Application Areas
              </h2>
              <ul
                style={{
                  color: "#ccd6f6",
                  listStyleType: "none",
                  paddingLeft: "0",
                }}
              >
                <li className="mb-2">
                  <span style={{ color: "#64ffda", marginRight: "10px" }}>
                    •
                  </span>
                  Commercial Buildings
                </li>
                <li className="mb-2">
                  <span style={{ color: "#64ffda", marginRight: "10px" }}>
                    •
                  </span>
                  Residential Buildings
                </li>
                <li className="mb-2">
                  <span style={{ color: "#64ffda", marginRight: "10px" }}>
                    •
                  </span>
                  Government Structures
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link
              to="/product"
              className="btn btn-lg px-5"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #64ffda",
                color: "#64ffda",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "rgba(100,255,218,0.1)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
              }}
              aria-label="Back to Products"
            >
              <ArrowLeft size={20} className="me-2" /> Back to Products
            </Link>
          </div>
        </div>
      </section>

      <style>
        {`
          .exterior-wall-system {
            font-family: 'Poppins', sans-serif;
          }

          .hero-section {
            padding: 60px 0;
          }

          .card {
            transition: all 0.3s ease;
          }

          .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(100,255,218,0.1);
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
    </div>
  );
};

export default React.memo(ExteriorWallSystem);
