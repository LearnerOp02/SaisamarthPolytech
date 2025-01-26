/* eslint-disable no-unused-vars */
import React, { useEffect, useCallback, useMemo } from "react";
import "../style/Application.css";
import app1 from './Images/app1.jpg';

const Application = () => {
  // Memoize the sectors array to avoid re-creating it on each render
  const sectors = useMemo(() => [
    {
      name: "Hospital",
      imgSrc: "https://www.saisamarthpolytech.com/images/hospital.jpg",
      description: "Ensuring sterile environments for healthcare services.",
    },
    {
      name: "Textile",
      imgSrc: "https://www.saisamarthpolytech.com/images/tex.jpg",
      description:
        "Maintaining clean and durable flooring for textile manufacturing.",
    },
    {
      name: "Automobile",
      imgSrc: "https://www.saisamarthpolytech.com/images/auto.jpg",
      description: "Supporting industrial flooring for automobile production.",
    },
    {
      name: "Pharmaceutical",
      imgSrc: "https://www.saisamarthpolytech.com/images/pharma.jpg",
      description: "Sterile and clean environments for pharmaceutical labs.",
    },
    {
      name: "Cold Storage",
      imgSrc: app1,
      description:
        "Specialized flooring solutions for temperature-controlled environments, ensuring durability and safety in cold storage facilities.",
    },
    {
      name: "Warehouse",
      imgSrc: "https://www.saisamarthpolytech.com/images/warehouse.jpg",
      description: "Durable flooring for large warehouse spaces.",
    },
    {
      name: "Parking",
      imgSrc: "https://www.saisamarthpolytech.com/images/parking.jpg",
      description: "Strong and resistant flooring for parking areas.",
    },
    {
      name: "Construction",
      imgSrc: "https://www.saisamarthpolytech.com/images/construction.jpg",
      description: "Safe and resilient surfaces for construction zones.",
    },
  ], []); // Only create once, no dependency needed

  // Memoize scroll handler to prevent re-creation on each render
  const handleScroll = useCallback(() => {
    const cards = document.querySelectorAll(".sector-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add("visible");
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on load in case cards are already in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="application py-5">
      <div className="container">
        <h2 className="title">Industries We Serve</h2>
        <p className="subtitle">
          We proudly support a diverse range of industries with high-quality,
          durable flooring solutions tailored to meet the unique demands of each
          sector.
        </p>

        <div className="row">
          {sectors.map((sector, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
              <div className="card shadow h-100 sector-card">
                <div className="card-img-container">
                  <img
                    src={sector.imgSrc}
                    className="card-img-top sector-image"
                    alt={sector.name}
                    loading="lazy" // Improve performance with lazy loading
                  />
                </div>
                <div className="card-overlay">
                  <h5 className="card-title">{sector.name}</h5>
                </div>
                <div className="card-body text-center">
                  <p className="card-text">{sector.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Application;
