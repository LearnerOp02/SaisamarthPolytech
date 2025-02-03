/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Product.css";
import hyg from "./Images/hyg.jpg";
import epoxy from "./Images/epoxy.jpg";
import floor from "./Images/floor.jpg";
import seal from "./Images/seal.jpg";
import paint from "./Images/paint.jpeg";
import a5 from "./Images/a5.jpg";
import chemical from "./Images/chemical.jpg";

// Product Data Array
const products = [
  {
    title: "Floor Protection System",
    description: "Durable solutions for floor protection.",
    img: floor,
    path: "/protection",
  },
  {
    title: "Corrosion Protection Systems",
    description: "Advanced protection against corrosion.",
    img: "https://tse2.mm.bing.net/th?id=OIP.vfWawzYUhOexUUe7Rc1oAQHaE7&w=1255&h=836&rs=1&pid=ImgDetMain",
    path: "/corrosion",
  },
  {
    title: "Hygienic Internal Wall Protection System",
    description: "Ensures hygiene and durability for walls.",
    img: a5,
    path: "/hygine",
  },
  {
    title: "Speciality Chemical Protection Systems",
    description: "Chemical-resistant solutions for industries.",
    img: chemical,
    path: "/wall",
  },
  {
    title: "Epoxy Covings",
    description: "Seamless epoxy covings for various applications.",
    img: epoxy,
    path: "/Epoxy",
  },
  {
    title: "Food Grade Coating",
    description: "Safe and hygienic coatings for food industries.",
    img: hyg,
    path: "/Food",
  },
  {
    title: "Flexible Sealants",
    description: "High-quality sealants for flexible solutions.",
    img: seal,
    path: "/Flexible",
  },
  {
    title: "Durable Exterior Wall System",
    description: "Weather-resistant and durable wall systems.",
    img: paint,
    path: "/Durable",
  },
];

const Products = () => {
  // Function to Scroll to Top on Navigation
  const handleLinkClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Scroll Animation Effect
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".product-card").forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call for elements already in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container my-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-black fw-bold">Our Products</h1>
        <p className="text-secondary fs-5">
          Explore our wide range of innovative and durable solutions
        </p>
      </div>

      {/* Product Grid */}
      <div className="row g-4">
        {products.map((product, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <Link to={product.path} className="text-decoration-none" onClick={handleLinkClick}>
              <div className="card h-100 shadow border-0 product-card">
                <div className="card-img-container">
                  <img src={product.img} alt={product.title} className="card-img-top" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark fw-semibold">{product.title}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
