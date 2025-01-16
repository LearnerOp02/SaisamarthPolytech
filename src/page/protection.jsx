import React from "react";
import { Link } from "react-router-dom";

const FloorProtection = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Floor Protection System</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/500"
            alt="Floor Protection"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>Features</h2>
          <ul>
            <li>Durable and smooth floor surface.</li>
            <li>Resistant to chemicals and traffic.</li>
            <li>Available in multiple colors.</li>
          </ul>
          <h2>Application Areas</h2>
          <ul>
            <li>Pharmaceuticals</li>
            <li>Hospitals</li>
            <li>Food industries</li>
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

export default FloorProtection;
