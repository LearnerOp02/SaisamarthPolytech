import React, { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import one from "./Images/1.jpg";
import two from "./Images/2.jpg";
import three from "./Images/3.jpg";
import four from "./Images/4.jpg";
import five from "./Images/pic2.png";
import six from "./Images/pic3.png";
import seven from "./Images/pic4.png";
import about from "./Images/about.png";
import leader from "./Images/leader.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const handleLinkClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % 3);
    }, 5000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll("[data-aos]").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const carouselItems = [
    {
      image: five,
      title: "Health Industry",
      description:
        "Providing cutting-edge solutions for healthcare environments.",
    },
    {
      image: six,
      title: "Automobile Industry",
      description:
        "Delivering durable and high-performance flooring solutions.",
    },
    {
      image: seven,
      title: "Epoxy Flooring",
      description:
        "Ensuring seamless and hygienic flooring for industrial spaces.",
    },
  ];

  return (
    <div style={{ background: "#0a192f" }}>
      {/* Hero Carousel */}
      <div className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <div className="position-relative w-100 vh-100">
                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(10,25,47,0.9), rgba(10,25,47,0.7))",
                    zIndex: 1,
                  }}
                />
                <img
                  src={item.image}
                  className="d-block w-100 h-100 object-fit-cover"
                  alt={item.title}
                />
                <div
                  className="position-absolute top-50 start-50 translate-middle text-center text-white px-3"
                  style={{ zIndex: 2 }}
                >
                  <h2
                    className="display-5 fw-bold mb-3"
                    style={{ color: "#64ffda" }}
                  >
                    {item.title}
                  </h2>
                  <p className="lead mb-4 text-light">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <section
        className="py-5 text-white text-center"
        data-aos="fade-up"
        id="welcome"
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-4" style={{ color: "#64ffda" }}>
            Welcome to Saisamarth Polytech
          </h1>
          <p className="lead mb-4" style={{ color: "#8892b0" }}>
            Delivering excellence in cleanroom finishing solutions with
            cutting-edge polymer technologies.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-5"
        data-aos="fade-up"
        id="about"
        style={{ background: "#112240" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h2
                className="display-5 fw-bold mb-4"
                style={{ color: "#64ffda" }}
              >
                About Us
              </h2>
              <p className="lead mb-4" style={{ color: "#8892b0" }}>
                With over 20 years of expertise, we specialize in epoxy and
                polymer treatments for cleanroom environments.
              </p>
              <Link
                to="/aboutus"
                onClick={handleLinkClick}
                className="btn btn-lg px-4 text-dark fw-bold"
                style={{ background: "#64ffda" }}
              >
                Learn More
              </Link>
            </div>
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src={about}
                className="img-fluid rounded shadow-lg"
                alt="About Us"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section
        className="py-5 text-white text-center"
        data-aos="fade-up"
        id="leadership"
        style={{ background: "#0a192f" }}
      >
        <div className="container">
          <h2 className="display-5 fw-bold mb-5" style={{ color: "#64ffda" }}>
            Our Leadership
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-4 text-center">
              <img
                src={leader}
                className="img-fluid rounded-circle shadow-lg mb-4"
                alt="Leader"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <h4 className="fw-bold" style={{ color: "#64ffda" }}>
                Mr. Atulkumar Patil
              </h4>
              <p className="lead" style={{ color: "#8892b0" }}>
                Founder & CEO - Leading innovation and excellence in polymer
                solutions for industrial environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-5 text-center" data-aos="fade-up" id="gallery">
        <div className="container">
          <h2 className="display-5 fw-bold mb-5" style={{ color: "#64ffda" }}>
            Our Work in Action
          </h2>
          <div className="row g-4">
            {[one, two, three, four].map((image, index) => (
              <div key={index} className="col-6 col-md-3">
                <motion.div
                  className="card h-100"
                  style={{
                    background: "#0a192f",
                    border: "1px solid #233554",
                    textAlign: "center",
                    padding: "10px",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(100,255,218,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={image}
                    className="img-fluid rounded shadow"
                    alt={`Gallery ${index + 1}`}
                  />
                </motion.div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link
              to="/clients"
              onClick={handleLinkClick}
              className="btn btn-lg px-4 text-dark fw-bold"
              style={{ background: "#64ffda" }}
            >
              View All Clients
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
