/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import one from "./Images/1.jpg";
import two from "./Images/2.jpg";
import three from "./Images/3.jpg";
import four from "./Images/4.jpg";
import five from "./Images/pic2.png";
import six from "./Images/pic3.png";
import seven from "./Images/pic4.png";
import about from "./Images/about.png";
import leader from "./Images/leader.jpg";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Scroll to top on link click
  const handleLinkClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  // Carousel auto-rotation and intersection observer for animations
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

  // Carousel items
  const carouselItems = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <div className="home" style={{ background: "#0a192f" }}>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Saisamarth Polytech - Home</title>
        <meta
          name="description"
          content="Delivering excellence in cleanroom finishing solutions with cutting-edge polymer technologies."
        />
        <meta
          name="keywords"
          content="epoxy flooring, polymer solutions, cleanroom finishing, industrial flooring"
        />
      </Helmet>

      {/* Hero Carousel */}
      <section
        className="carousel slide"
        data-bs-ride="carousel"
        aria-label="Hero Carousel"
      >
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === activeIndex ? 1 : 0 }}
              transition={{ duration: 0.5 }}
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
                  loading="lazy"
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
            </motion.div>
          ))}
        </div>
        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          onClick={() => setActiveIndex((activeIndex - 1 + 3) % 3)}
          aria-label="Previous Slide"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </button>
        <button
          className="carousel-control-next"
          onClick={() => setActiveIndex((activeIndex + 1) % 3)}
          aria-label="Next Slide"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </button>
      </section>

      {/* Welcome Section */}
      <section
        className="welcome-section py-5 text-white text-center"
        data-aos="fade-up"
        id="welcome"
      >
        <div className="container">
          <h1
            className="display-4 fw-bold mb-4"
            style={{ color: "#64ffda" }}
            aria-label="Welcome to Saisamarth Polytech"
          >
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
        className="about-section py-5"
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
                With over 25+ years of expertise, we specialize in epoxy and
                polymer treatments for cleanroom environments.
              </p>
              <Link
                to="/aboutus"
                onClick={handleLinkClick}
                className="btn btn-lg px-4 text-dark fw-bold"
                style={{ background: "#64ffda" }}
                title="Learn More About Us"
                aria-label="Learn More About Us"
              >
                Learn More
              </Link>
            </div>
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src={about}
                className="img-fluid rounded shadow-lg"
                alt="About Us"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section
        className="leadership-section py-5 text-white text-center"
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
                loading="lazy"
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
      <section
        className="gallery-section py-5 text-center"
        data-aos="fade-up"
        id="gallery"
      >
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
                    loading="lazy"
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
              title="View All Clients"
              aria-label="View All Clients"
            >
              View All Clients
            </Link>
          </div>
        </div>
      </section>

      <style>
        {`
          .home {
            font-family: 'Poppins', sans-serif;
          }

          .carousel-item {
            transition: opacity 0.5s ease-in-out;
          }

          .welcome-section, .about-section, .leadership-section, .gallery-section {
            padding: 60px 0;
          }

          .btn {
            transition: all 0.3s ease;
          }

          .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(100, 255, 218, 0.3);
          }

          @media (max-width: 768px) {
            .container {
              padding-left: 20px;
              padding-right: 20px;
            }
          }

          @media (max-width: 576px) {
            .col-sm-12 {
              text-align: center !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default React.memo(Home);
