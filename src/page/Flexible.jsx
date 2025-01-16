import React from "react";
import { Link } from "react-router-dom";

const FlexibleSealants = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Flexible Sealants</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/500" // Update image URL
            alt="Flexible Sealants"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>Features</h2>
          <ul>
            <li>Excellent flexibility to accommodate movements.</li>
            <li>Resistant to moisture, UV, and harsh weather conditions.</li>
            <li>Long-lasting sealant solution for various applications.</li>
          </ul>
          <h2>Application Areas</h2>
          <ul>
            <li>Building Construction</li>
            <li>Marine and Offshore</li>
            <li>Automotive Industry</li>
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

export default FlexibleSealants;
