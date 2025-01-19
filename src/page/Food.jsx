import React from "react";
import { Link } from "react-router-dom";
import hyg from "./Images/hyg.jpg";

const FoodGradeCoating = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: "#333" }}>Food Grade Coating</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={hyg} //Update image URL
            alt="Food Grade Coating"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 style={{ color: "#333" }}>Features</h2>
          <ul style={{ color: "#333" }}>
            <li>Non-toxic, safe for food processing.</li>
            <li>Resistant to high temperatures and chemicals.</li>
            <li>Complies with industry food safety standards.</li>
          </ul>
          <h2 style={{ color: "#333" }}>Application Areas</h2>
          <ul style={{ color: "#333" }}>
            <li>Food Processing Plants</li>
            <li>Pharmaceutical Manufacturing</li>
            <li>Packaging Facilities</li>
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

export default FoodGradeCoating;
