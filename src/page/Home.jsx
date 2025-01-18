/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import one from "./Images/1.jpg"; // Ensure the path is correct
import two from "./Images/2.jpg";
import three from "./Images/3.jpg";
import four from "./Images/4.jpg";
import five from "./Images/pic2.jpg";
import six from "./Images/pic3.jpg";
import seven from "./Images/pic4.jpg";
import about from "./Images/about.png";

const Home = () => {
  return (
    <div className="home-container">
      {/* Carousel Section */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={five} className="d-block w-100" alt="Health Industry" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Health Industry</h5>
              <p>Providing cutting-edge solutions for healthcare environments.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={six} className="d-block w-100" alt="Automobile Industry" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Automobile Industry</h5>
              <p>Delivering durable and high-performance flooring solutions.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={seven} className="d-block w-100" alt="Epoxy Flooring" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Epoxy Flooring</h5>
              <p>Ensuring seamless and hygienic flooring for industrial spaces.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Welcome Section */}
      <section className="welcome-section text-center bg-beige py-5">
        <div className="container">
          <h1 className="welcome-title fade-in">
            Welcome to <span className="highlight">Saisamarth Polytech Pvt. Ltd.</span>
          </h1>
          <p className="welcome-text fade-in">
            Delivering excellence in cleanroom finishing solutions with cutting-edge polymer technologies.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us py-5 bg-beige fade-in">
        <div className="container">
          <h2 className="section-title text-center mb-5">About Us</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={about} alt="About Us" className="img-fluid rounded shadow-lg" />
            </div>
            <div className="col-md-6">
              <p className="about-text">
                With over 20 years of expertise, we specialize in epoxy and polymer treatments for cleanroom environments. Our solutions are trusted by leading pharmaceutical, healthcare, and food industry clients, delivering both innovation and reliability.
              </p>
              <Link to="/aboutus">
                <button className="btn btn-primary mt-3">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership text-center py-5 bg-beige fade-in">
        <div className="container">
          <h2 className="section-title mb-2">Our Leadership</h2>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfLmfxe4brnWCY5YkxaNfIjvMHoC3a1TLs3_sayfZpXTi10nfDJs9W2w9qJC7LY52fCs&usqp=CAU" alt="Leader" className="img-fluid rounded shadow-lg" />
          <p className="leadership-text">
            Under the visionary leadership of our Director, Mr. Atulkumar Patil, we are committed to delivering exceptional quality and ensuring client satisfaction at every step.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery py-5 bg-beige fade-in">
        <div className="container">
          <h2 className="section-title text-center mb-5">Our Work in Action</h2>
          <div className="row">
            {[one, two, three, four].map((image, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card shadow-lg rounded">
                  <img src={image} alt={`Gallery Image ${index + 1}`} className="card-img-top rounded-top" />
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Link to="/clients">
              <button className="btn btn-primary">Learn More</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
