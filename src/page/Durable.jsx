import React from "react";
import { Link } from "react-router-dom";
import paint from "./Images/paint.jpeg";

const ExteriorWallSystem = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: "#333" }}>Exterior Wall System</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={paint}// Update image URL
            alt="Exterior Wall System"
            className="img-fluid"
            style={{ height: "500px", width: "750px" }} // Set height and maintain aspect ratio
          />
        </div>
        <div className="col-md-6">
          <h2 style={{ color: "#333" }}>Features</h2>
          <ul style={{ color: "#333" }}>
            <li>Durable and weather-resistant exterior system.</li>
            <li>Provides excellent thermal insulation.</li>
            <li>Enhances building aesthetics and energy efficiency.</li>
          </ul>
          <h2 style={{ color: "#333" }}>Application Areas</h2>
          <ul style={{ color: "#333" }}>
            <li>Commercial Buildings</li>
            <li>Residential Buildings</li>
            <li>Government Structures</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/product" className="btn btn-secondary">
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ExteriorWallSystem;
