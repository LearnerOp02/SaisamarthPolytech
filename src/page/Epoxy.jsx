import React from "react";
import { Link } from "react-router-dom";

const EpoxyCovings = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Epoxy Coving System</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/500" // Update image URL
            alt="Epoxy Coving"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>Features</h2>
          <ul>
            <li>Provides seamless junctions between walls and floors.</li>
            <li>Resistant to staining, chemicals, and high traffic.</li>
            <li>Easy to clean for a hygienic environment.</li>
          </ul>
          <h2>Application Areas</h2>
          <ul>
            <li>Food Industry</li>
            <li>Pharmaceutical Facilities</li>
            <li>Hospitals</li>
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

export default EpoxyCovings;
