import React from "react";
import { Link } from "react-router-dom";
import epoxy from "./Images/epoxy.jpg";

const EpoxyCovings = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: "#333" }}>Epoxy Coving System</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={epoxy} // Update image URL
            alt="Epoxy Coving"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 style={{ color: "#333" }}>Features</h2>
          <ul style={{ color: "#333" }}>
            <li>Provides seamless junctions between walls and floors.</li>
            <li>Resistant to staining, chemicals, and high traffic.</li>
            <li>Easy to clean for a hygienic environment.</li>
          </ul>
          <h2 style={{ color: "#333" }}>Application Areas</h2>
          <ul style={{ color: "#333" }}>
            <li>Food Industry</li>
            <li>Pharmaceutical Facilities</li>
            <li>Hospitals</li>
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

export default EpoxyCovings;
