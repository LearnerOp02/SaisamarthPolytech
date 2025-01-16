import React from "react";
import { Link } from "react-router-dom";

const ExteriorWallSystem = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Exterior Wall System</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/500" // Update image URL
            alt="Exterior Wall System"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>Features</h2>
          <ul>
            <li>Durable and weather-resistant exterior system.</li>
            <li>Provides excellent thermal insulation.</li>
            <li>Enhances building aesthetics and energy efficiency.</li>
          </ul>
          <h2>Application Areas</h2>
          <ul>
            <li>Commercial Buildings</li>
            <li>Residential Buildings</li>
            <li>Government Structures</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-secondary">
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ExteriorWallSystem;
