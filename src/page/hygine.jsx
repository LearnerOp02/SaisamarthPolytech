import React from "react";
import { Link } from "react-router-dom";
import a5 from "./Images/a5.jpg";

const HygienicWallProtection = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: "#333" }}>Hygienic Wall Protection System</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={a5} // Update image URL
            alt="Hygienic Wall Protection"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 style={{ color: "#333" }}>Features</h2>
          <ul style={{ color: "#333" }}>
            <li>Prevents microbial growth on walls.</li>
            <li>Easy to clean and maintain hygienic standards.</li>
            <li>Ideal for high sanitation environments.</li>
          </ul>
          <h2 style={{ color: "#333" }}>Application Areas</h2>
          <ul style={{ color: "#333" }}>
            <li>Food Processing</li>
            <li>Hospitals</li>
            <li>Commercial Kitchens</li>
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

export default HygienicWallProtection;
