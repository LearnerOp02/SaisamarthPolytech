import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet";

const CorrosionProtection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Advanced Protection",
      description:
        "Prevents rust and corrosion on metal surfaces with cutting-edge technology.",
    },
    {
      title: "Durability",
      description:
        "Long-lasting coating that provides reliable protection in harsh conditions.",
    },
    {
      title: "Chemical Resistance",
      description:
        "Highly resistant to various chemicals and environmental factors.",
    },
  ];

  const applications = [
    "Marine Industry - Ships, offshore platforms, and port facilities",
    "Industrial Equipment - Manufacturing machinery and heavy equipment",
    "Infrastructure - Bridges, pipelines, and structural steel",
  ];

  return (
    <div className="corrosion-protection" style={{ background: "#0a192f" }}>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Corrosion Protection System - Saisamarth Polytech</title>
        <meta
          name="description"
          content="Explore our advanced corrosion protection system designed to prevent rust and corrosion on metal surfaces. Ideal for marine, industrial, and infrastructure applications."
        />
        <meta
          name="keywords"
          content="corrosion protection, rust prevention, industrial coatings, marine coatings"
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
            aria-label="Corrosion Protection System"
          >
            Corrosion Protection System
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
                  src="https://tse2.mm.bing.net/th?id=OIP.vfWawzYUhOexUUe7Rc1oAQHaE7&w=1255&h=836&rs=1&pid=ImgDetMain"
                  className="card-img-top"
                  alt="Corrosion Protection System"
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
                {features.map((feature, index) => (
                  <li key={index} className="d-flex align-items-center mb-3">
                    <span style={{ color: "#64ffda", marginRight: "10px" }}>
                      •
                    </span>
                    {feature.icon}{" "}
                    <span className="ms-2">
                      {feature.title} - {feature.description}
                    </span>
                  </li>
                ))}
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
                {applications.map((app, index) => (
                  <li key={index} className="mb-2">
                    <span style={{ color: "#64ffda", marginRight: "10px" }}>
                      •
                    </span>
                    {app}
                  </li>
                ))}
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
          .corrosion-protection {
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

export default React.memo(CorrosionProtection);
