import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Product.css";

const Products = () => {
  const products = [
    {
      title: "Floor Protection System",
      description: "Durable solutions for floor protection.",
      img: "https://w7.pngwing.com/pngs/907/249/png-transparent-brown-parquet-flooring-wood-flooring-wall-tile-laminate-flooring-wood-floor-angle-household-rectangle-thumbnail.png",
      path: "/protection",
    },
    {
      title: "Corrosion Protection Systems",
      description: "Advanced protection against corrosion.",
      img: "https://eoncoat.com/wp-content/uploads/2016/12/719x488-8.jpg",
      path: "/corrosion",
    },
    {
      title: "Hygienic Internal Wall Protection System",
      description: "Ensures hygiene and durability for walls.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtmUaA1V3l0u4nHnMQ4I5uu7Zn1a1L4LkB5tbQSPhncF5TX9PyHFjA_GpQi1ukUVeR4Q&usqp=CAU",
      path: "/hygine",
    },
    {
      title: "Speciality Chemical Protection Systems",
      description: "Chemical-resistant solutions for industries.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtmUaA1V3l0u4nHnMQ4I5uu7Zn1a1L4LkB5tbQSPhncF5TX9PyHFjA_GpQi1ukUVeR4Q&usqp=CAU",
      path: "/wall",
    },
    {
      title: "Epoxy Covings",
      description: "Seamless epoxy covings for various applications.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtmUaA1V3l0u4nHnMQ4I5uu7Zn1a1L4LkB5tbQSPhncF5TX9PyHFjA_GpQi1ukUVeR4Q&usqp=CAU",
      path: "/Epoxy",
    },
    {
      title: "Food Grade Coating",
      description: "Safe and hygienic coatings for food industries.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtmUaA1V3l0u4nHnMQ4I5uu7Zn1a1L4LkB5tbQSPhncF5TX9PyHFjA_GpQi1ukUVeR4Q&usqp=CAU",
      path: "/Food",
    },
    {
      title: "Flexible Sealants",
      description: "High-quality sealants for flexible solutions.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtmUaA1V3l0u4nHnMQ4I5uu7Zn1a1L4LkB5tbQSPhncF5TX9PyHFjA_GpQi1ukUVeR4Q&usqp=CAU",
      path: "/Flexible",
    },
    {
      title: "Durable Exterior Wall System",
      description: "Weather-resistant and durable wall systems.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtmUaA1V3l0u4nHnMQ4I5uu7Zn1a1L4LkB5tbQSPhncF5TX9PyHFjA_GpQi1ukUVeR4Q&usqp=CAU",
      path: "/Durable",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".product-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on load in case cards are already in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container my-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary text-black">Our Products</h1>
        <p className="text-secondary fs-5">
          Explore our wide range of innovative and durable solutions
        </p>
      </div>

      {/* Product Grid */}
      <div className="row g-4">
        {products.map((product, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <Link to={product.path} className="text-decoration-none">
              <div className="card h-100 shadow border-0 product-card">
                <div className="card-img-container">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark fw-semibold">
                    {product.title}
                  </h5>
                  <p className="card-text text-muted">{product.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Footer */}
    </div>
  );
};

export default Products;
