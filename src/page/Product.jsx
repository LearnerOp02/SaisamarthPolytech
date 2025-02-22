import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import hyg from "./Images/hyg.jpg";
import epoxy from "./Images/epoxy.jpg";
import floor from "./Images/floor.jpg";
import seal from "./Images/seal.jpg";
import paint from "./Images/paint.jpeg";
import a5 from "./Images/a5.jpg";
import chemical from "./Images/chemical.jpg";

const productData = [
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

const ProductCard = ({ product, index }) => (
  <motion.div
    className="col-md-4 col-lg-3"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Link to={product.path} className="text-decoration-none">
      <motion.div
        className="card h-100"
        style={{
          background: "#0a192f",
          border: "1px solid #233554",
          textAlign: "center",
          padding: "10px",
          cursor: "pointer",
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 10px 30px rgba(100,255,218,0.1)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={product.img}
          className="card-img-top"
          alt={product.title}
          style={{ height: "200px", objectFit: "cover" }}
          loading="lazy"
        />
        <div className="card-body">
          <p className="card-text" style={{ color: "#64ffda" }}>
            {product.title}
          </p>
          <p className="card-text" style={{ color: "#ccd6f6" }}>
            {product.description}
          </p>
        </div>
      </motion.div>
    </Link>
  </motion.div>
);

const Products = () => {
  return (
    <div style={{ background: "#0a192f" }}>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Products - Saisamarth Polytech</title>
        <meta
          name="description"
          content="Explore our diverse range of high-performance protection systems designed for various industries. Our solutions provide durability, safety, and innovation."
        />
        <meta
          name="keywords"
          content="epoxy flooring, polymer treatments, cleanroom solutions, industrial coatings"
        />
      </Helmet>

      {/* Hero Section */}
      <header
        className="py-5 text-white"
        style={{ background: "linear-gradient(to bottom, #0a192f, #112240)" }}
      >
        <div className="container py-5">
          <motion.h1
            className="display-4 fw-bold text-center mb-3"
            style={{ color: "#64ffda" }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Products
          </motion.h1>
          <motion.p
            className="text-center mb-4"
            style={{ color: "#ccd6f6", maxWidth: "700px", margin: "0 auto" }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            We offer a diverse range of high-performance protection systems
            designed for various industries. Our solutions provide durability,
            safety, and innovation, ensuring superior quality and performance.
          </motion.p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {productData.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
