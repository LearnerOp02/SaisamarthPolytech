/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import app1 from "./Images/app1.jpg";

const sectors = [
  { name: "Hospital", imgSrc: "https://www.saisamarthpolytech.com/images/hospital.jpg", description: "Ensuring sterile environments for healthcare services." },
  { name: "Textile", imgSrc: "https://www.saisamarthpolytech.com/images/tex.jpg", description: "Maintaining clean and durable flooring for textile manufacturing." },
  { name: "Automobile", imgSrc: "https://www.saisamarthpolytech.com/images/auto.jpg", description: "Supporting industrial flooring for automobile production." },
  { name: "Pharmaceutical", imgSrc: "https://www.saisamarthpolytech.com/images/pharma.jpg", description: "Sterile and clean environments for pharmaceutical labs." },
  { name: "Cold Storage", imgSrc: app1, description: "Specialized flooring solutions for temperature-controlled environments." },
  { name: "Warehouse", imgSrc: "https://www.saisamarthpolytech.com/images/warehouse.jpg", description: "Durable flooring for large warehouse spaces." },
  { name: "Parking", imgSrc: "https://www.saisamarthpolytech.com/images/parking.jpg", description: "Strong and resistant flooring for parking areas." },
  { name: "Construction", imgSrc: "https://www.saisamarthpolytech.com/images/construction.jpg", description: "Safe and resilient surfaces for construction zones." },
];

const Application = () => {
  return (
    <div style={{ background: "#0a192f" }}>
      <motion.section
        className="py-5 text-white"
        style={{ background: "linear-gradient(to bottom, #0a192f, #112240)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container py-5">
          <motion.h1
            className="display-4 fw-bold text-center mb-4"
            style={{ color: "#64ffda" }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Industries We Serve
          </motion.h1>
          <motion.p
            className="text-center mb-5"
            style={{ color: "#ccd6f6", maxWidth: "700px", margin: "0 auto" }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We proudly support a diverse range of industries with high-quality,
            durable flooring solutions tailored to meet their unique demands.
          </motion.p>
          <div className="row g-4 justify-content-center">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                className="col-md-4 col-lg-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="card h-100"
                  style={{
                    background: "#0a192f",
                    border: "1px solid #233554",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    textAlign: "center",
                    padding: "10px",
                  }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(100,255,218,0.1)" }}
                >
                  <img
                    src={sector.imgSrc}
                    className="card-img-top"
                    alt={sector.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <p className="card-text" style={{ color: "#64ffda" }}>
                      {sector.name}
                    </p>
                    <p className="card-text" style={{ color: "#ccd6f6" }}>
                      {sector.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Application;
