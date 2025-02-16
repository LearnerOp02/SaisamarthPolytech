import React from "react";
import { Link } from "react-router-dom";
import chemical from "./Images/chemical.jpg";
import { ArrowLeft} from "lucide-react";

const ChemicalProtection = () => {
  return (
    <div style={{ background: "#0a192f" }}>
      <section
        className="py-5 text-white"
        style={{ background: "linear-gradient(to bottom, #0a192f, #112240)" }}
      >
        <div className="container py-5">
          <h1 className="display-4 fw-bold text-center mb-4" style={{ color: "#64ffda" }}>
            Chemical Protection System
          </h1>
          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-md-6">
              <div
                className="card h-100"
                style={{
                  background: "#0a192f",
                  border: "1px solid #233554",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  textAlign: "center",
                  padding: "10px",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(100,255,218,0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={chemical}
                  className="card-img-top"
                  alt="Chemical Protection"
                  style={{ height: "300px", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <h2 style={{ color: "#64ffda" }}>Features</h2>
              <ul style={{ color: "#ccd6f6" }}>
                <li>Provides protection against harsh chemicals.</li>
                <li>Durable and long-lasting coating.</li>
                <li>Maintains structural integrity under aggressive environments.</li>
              </ul>
              <h2 style={{ color: "#64ffda" }}>Application Areas</h2>
              <ul style={{ color: "#ccd6f6" }}>
                <li>Chemical Processing</li>
                <li>Petrochemical Plants</li>
                <li>Laboratories</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/product" className="btn btn-lg px-5"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #64ffda",
                color: "#64ffda",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "rgba(100,255,218,0.1)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
              }}
            >
              <ArrowLeft size={20} className="me-2" /> Back to Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChemicalProtection;
