import React from "react";
import { Link } from "react-router-dom";

const CorrosionProtection = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: "#333" }}>Corrosion Protection System</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src=
            "https://tse2.mm.bing.net/th?id=OIP.vfWawzYUhOexUUe7Rc1oAQHaE7&w=1255&h=836&rs=1&pid=ImgDetMain"// Update image URL
            alt="Corrosion Protection"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 style={{ color: "#333" }}>Features</h2>
          <ul style={{ color: "#333" }}>
            <li>Prevents rust and corrosion on metal surfaces.</li>
            <li>Durable coating for long-term protection.</li>
            <li>Resistant to harsh environments and chemicals.</li>
          </ul>
          <h2 style={{ color: "#333" }}>Application Areas</h2>
          <ul style={{ color: "#333" }}>
            <li>Marine Industry</li>
            <li>Industrial Equipment</li>
            <li>Infrastructure</li>
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

export default CorrosionProtection;
