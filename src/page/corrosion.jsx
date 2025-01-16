import React from "react";
import { Link } from "react-router-dom";

const CorrosionProtection = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Corrosion Protection System</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/500" // Update image URL
            alt="Corrosion Protection"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>Features</h2>
          <ul>
            <li>Prevents rust and corrosion on metal surfaces.</li>
            <li>Durable coating for long-term protection.</li>
            <li>Resistant to harsh environments and chemicals.</li>
          </ul>
          <h2>Application Areas</h2>
          <ul>
            <li>Marine Industry</li>
            <li>Industrial Equipment</li>
            <li>Infrastructure</li>
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

export default CorrosionProtection;
