import React from "react";
import { Link } from "react-router-dom";

const ChemicalProtection = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Chemical Protection System</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/500" // Update image URL
            alt="Chemical Protection"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>Features</h2>
          <ul>
            <li>Provides protection against harsh chemicals.</li>
            <li>Durable and long-lasting coating.</li>
            <li>Maintains structural integrity under aggressive environments.</li>
          </ul>
          <h2>Application Areas</h2>
          <ul>
            <li>Chemical Processing</li>
            <li>Petrochemical Plants</li>
            <li>Laboratories</li>
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

export default ChemicalProtection;
