/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Image Slider Section */}
      <section className="slider-section">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">
            {[
              "https://via.placeholder.com/1920x800?text=Welcome+to+Saisamarth",
              "https://via.placeholder.com/1920x800?text=Innovative+Cleanroom+Solutions",
              "https://via.placeholder.com/1920x800?text=Delivering+Excellence",
              "https://via.placeholder.com/1920x800?text=Client+Focused+Approach",
              "https://via.placeholder.com/1920x800?text=Building+Your+Future",
            ].map((image, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                  style={{ height: "80vh", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h2 className="display-4 text-white font-weight-bold">Welcome to Saisamarth Polytech Pvt. Ltd.</h2>
                  <p className="lead text-white">
                    Delivering excellence in cleanroom finishing solutions with cutting-edge polymer technologies.
                  </p>
                  <a href="#about-us" className="btn btn-light btn-lg mt-3">
                    Explore Our Expertise
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us py-5" id="about-us">
        <div className="container">
          <h2 className="text-center text-dark mb-4">About Us</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://media.istockphoto.com/id/526722121/photo/about-us-business-background.jpg?s=612x612&w=0&k=20&c=B0DCzpESLURkgFm_pAs3NnZWYrE3QuUmZFdhGf6glMw="
                alt="About Us"
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-md-6">
              <p className="text-dark">
                With over 20 years of expertise, we specialize in epoxy and polymer treatments for cleanroom environments. 
                Our solutions are trusted by leading pharmaceutical, healthcare, and food industry clients, delivering both 
                innovation and reliability.
              </p>
              <Link to="/aboutus">
                <button className="btn btn-primary mt-3">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership text-center py-5">
        <div className="container">
          <h2 className="text-dark mb-4">Our Leadership</h2>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/300x300?text=Atulkumar+Patil"
                alt="Atulkumar Patil"
                className="img-fluid rounded-circle shadow-lg mb-4"
              />
              <p className="text-dark">
                Under the visionary leadership of our Director, Mr. Atulkumar Patil, we are committed to delivering exceptional quality 
                and ensuring client satisfaction at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section text-center py-5 bg-light">
        <div className="container">
          <h2 className="font-weight-bold text-dark">Let's Build Together</h2>
          <p className="lead mb-4 text-dark">
            We specialize in cleanroom finishing solutions. Let's discuss your next project and take it to the next level.
          </p>
          <a href="mailto:info@saisamarthpolytech.com" className="btn btn-primary btn-lg">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
