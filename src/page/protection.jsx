import React from "react";
import { Link } from "react-router-dom";
import floor from "./Images/floor.jpg";

const FloorProtection = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: "#333" }}>Floor Protection System</h1>
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center"> {/* Center the image */}
          <img
            src={floor}
            alt="Floor Protection"
            className="img-fluid"
            style={{ height: "300px", width: "750px" }} // Set height and maintain aspect ratio
          />
        </div>
        <div className="col-md-6">
          <h2 style={{ color: "#333" }}>Features</h2>
          <ul style={{ color: "#333" }}>
            <li>Durable and smooth floor surface.</li>
            <li>Resistant to chemicals and traffic.</li>
            <li>Available in multiple colors.</li>
          </ul>
          <h2 style={{ color: "#333" }}>Application Areas</h2>
          <ul style={{ color: "#333" }}>
            <li>Pharmaceuticals</li>
            <li>Hospitals</li>
            <li>Food industries</li>
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

export default FloorProtection;