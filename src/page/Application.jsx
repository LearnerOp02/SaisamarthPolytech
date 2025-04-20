import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import app1 from "./Images/app1.jpg";
import parking from "./ApplicationImg/parking.jpg";
import hospital from "./ApplicationImg/empty-hallway-background.jpg";
import auto from "./ApplicationImg/auto.jpg";
import pharma from "./ApplicationImg/pharma.jpg";
import warehouse from "./ApplicationImg/warehouse.jpg";
import construct from "./ApplicationImg/construct.jpg";
import textile from "./ApplicationImg/textile.jpg";

// Memoize the sectors array to prevent unnecessary re-renders
const sectors = [
  {
    name: "Hospital",
    imgSrc: hospital,
    description: "Ensuring sterile environments for healthcare services.",
  },
  {
    name: "Textile",
    imgSrc: textile,
    description:
      "Maintaining clean and durable flooring for textile manufacturing.",
  },
  {
    name: "Automobile",
    imgSrc: auto,
    description: "Supporting industrial flooring for automobile production.",
  },
  {
    name: "Pharmaceutical",
    imgSrc: pharma,
    description: "Sterile and clean environments for pharmaceutical labs.",
  },
  {
    name: "Cold Storage",
    imgSrc: app1,
    description:
      "Specialized flooring solutions for temperature-controlled environments.",
  },
  {
    name: "Warehouse",
    imgSrc: warehouse,
    description: "Durable flooring for large warehouse spaces.",
  },
  {
    name: "Parking",
    imgSrc: parking,
    description: "Strong and resistant flooring for parking areas.",
  },
  {
    name: "Construction",
    imgSrc: construct,
    description: "Safe and resilient surfaces for construction zones.",
  },
];

// Memoized component with stable props
const SectorCard = React.memo(
  ({ sector }) => {
    // Memoize styles to prevent recreation on every render
    const cardStyles = useMemo(
      () => ({
        background: "#0a192f",
        border: "1px solid #233554",
        transition: "all 0.3s ease",
        cursor: "pointer",
        textAlign: "center",
        padding: "10px",
      }),
      []
    );

    const nameStyles = useMemo(() => ({ color: "#64ffda" }), []);
    const descStyles = useMemo(() => ({ color: "#ccd6f6" }), []);
    const imgStyles = useMemo(
      () => ({ height: "200px", objectFit: "cover" }),
      []
    );

    return (
      <motion.div
        className="col-md-4 col-lg-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="card h-100"
          style={cardStyles}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(100,255,218,0.1)",
          }}
        >
          <img
            src={sector.imgSrc}
            className="card-img-top"
            alt={sector.name}
            style={imgStyles}
            loading="lazy"
            decoding="async" // Add decoding for better image loading
          />
          <div className="card-body">
            <p className="card-text" style={nameStyles}>
              {sector.name}
            </p>
            <p className="card-text" style={descStyles}>
              {sector.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison function to prevent unnecessary re-renders
    return (
      prevProps.sector.name === nextProps.sector.name &&
      prevProps.sector.imgSrc === nextProps.sector.imgSrc &&
      prevProps.sector.description === nextProps.sector.description
    );
  }
);

SectorCard.propTypes = {
  sector: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

SectorCard.displayName = "SectorCard";

// Memoize the main component
const Application = React.memo(() => {
  // Memoize styles to prevent recreation on every render
  const appStyles = useMemo(() => ({ background: "#0a192f" }), []);
  const heroStyles = useMemo(
    () => ({
      background: "linear-gradient(to bottom, #0a192f, #112240)",
    }),
    []
  );
  const titleStyles = useMemo(() => ({ color: "#64ffda" }), []);
  const subtitleStyles = useMemo(
    () => ({
      color: "#ccd6f6",
      maxWidth: "700px",
      margin: "0 auto",
    }),
    []
  );

  // Memoize the sectors mapping to prevent recreation on every render
  const renderedSectors = useMemo(
    () =>
      sectors.map((sector) => (
        <SectorCard key={`${sector.name}-${sector.imgSrc}`} sector={sector} />
      )),
    []
  );

  return (
    <div className="application" style={appStyles}>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Industries We Serve - Saisamarth Polytech</title>
        <meta
          name="description"
          content="Explore the industries we serve with high-quality, durable flooring solutions tailored to meet their unique demands."
        />
        <meta
          name="keywords"
          content="industrial flooring, epoxy flooring, cleanroom solutions, polymer treatments"
        />
      </Helmet>

      {/* Hero Section */}
      <header className="hero-section py-5 text-white" style={heroStyles}>
        <div className="container py-5">
          <motion.h1
            className="display-4 fw-bold text-center mb-4"
            style={titleStyles}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            aria-label="Industries We Serve"
          >
            Industries We Serve
          </motion.h1>
          <motion.p
            className="text-center mb-5"
            style={subtitleStyles}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            We proudly support a diverse range of industries with high-quality,
            durable flooring solutions tailored to meet their unique demands.
          </motion.p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {renderedSectors}
          </div>
        </div>
      </main>

      {/* Move styles to external CSS file if possible */}
      <style>
        {`
          .application {
            font-family: 'Poppins', sans-serif;
          }

          .hero-section {
            padding: 60px 0;
          }

          .card {
            transition: all 0.3s ease;
          }

          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 15px rgba(100, 255, 218, 0.3);
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
});

Application.displayName = "Application";

export default React.memo(Application);
