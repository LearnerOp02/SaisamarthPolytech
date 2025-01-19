import React from "react";
import { Link } from "react-router-dom";
import seal from "./Images/seal.jpg";

const FlexibleSealants = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: "#333" }}>Flexible Sealants</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={seal} // Update image URL
            alt="Flexible Sealants"
            className="img-fluid"
            style={{ height: "300px", width: "750px" }} // Set height and maintain aspect ratio
          />
        </div>
        <div className="col-md-6">
          <h2 style={{ color: "#333" }}>Features</h2>
          <ul style={{ color: "#333" }}>
            <li>Excellent flexibility to accommodate movements.</li>
            <li>Resistant to moisture, UV, and harsh weather conditions.</li>
            <li>Long-lasting sealant solution for various applications.</li>
          </ul>
          <h2 style={{ color: "#333" }}>Application Areas</h2>
          <ul style={{ color: "#333" }}>
            <li>Building Construction</li>
            <li>Marine and Offshore</li>
            <li>Automotive Industry</li>
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

export default FlexibleSealants;