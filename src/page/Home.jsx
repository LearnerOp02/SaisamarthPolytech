/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Home.css";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Rotating banner images
  const bannerImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD71mSLIUzrRuKmq6Rn2R24IM22pSuAjwdtg&s",
    "https://w7.pngwing.com/pngs/551/467/png-transparent-businessperson-small-business-business-plan-advertising-business-service-people-business-thumbnail.png",
    "https://png.pngtree.com/png-vector/20231214/ourmid/pngtree-stylish-man-advertising-holiday-shopping-on-red-backdrop-png-image_11035797.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjn3B0eecR2nYzdAOo80ozxZTQIlRpyFHOA&s",
    "https://w7.pngwing.com/pngs/364/938/png-transparent-businessperson-thumb-signal-advertising-company-business-company-hand-service-thumbnail.png",
  ];

  // Rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval); // Clean up on unmount
  }, [bannerImages.length]);

  return (
    <div className="home-container" style={{ backgroundColor: "#f5f5dc" }}>
      {/* Rotating Banner Section */}
      <section className="rotating-banner d-flex justify-content-center mb-4">
        <div
          className="shadow"
          style={{
            backgroundImage: `url(${bannerImages[currentImage]})`,
            width: "1400px", // Adjust the width for smaller size
            height: "250px", // Adjust the height for a concise banner
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
          }}
        ></div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section text-center py-5">
        <div className="container">
          <h1 className="text-primary mb-4 font-weight-bold">
            Welcome to <span className="text-dark">Saisamarth Polytech Pvt. Ltd.</span>
          </h1>
          <p className="lead text-dark font-weight-bold mb-4">
            At <span className="text-primary">Saisamarth Polytech Pvt. Ltd.</span>, we pride ourselves on being leaders in delivering 
            advanced cleanroom finishing solutions. With over 20 years of 
            expertise, we are committed to providing innovative and reliable 
            polymer technologies tailored for diverse industries such as 
            pharmaceuticals, healthcare, and food processing.
          </p>
          <p className="text-secondary lead">
            Our mission is to enhance industry standards by offering exceptional 
            quality, cutting-edge innovation, and client-centric solutions. We 
            aim to be your trusted partner in creating state-of-the-art cleanroom 
            environments that stand the test of time.
          </p>
          <a href="#about-us" className="btn btn-primary btn-lg shadow">
            Explore Our Expertise
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us py-5" id="about-us">
        <div className="container">
          <h2 className="text-center text-primary mb-4 text-dark">About Us</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://media.istockphoto.com/id/526722121/photo/about-us-business-background.jpg?s=612x612&w=0&k=20&c=B0DCzpESLURkgFm_pAs3NnZWYrE3QuUmZFdhGf6glMw="
                alt="About Us"
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-md-6">
              <p className="text-dark lead">
                With over 20 years of expertise, we specialize in epoxy and
                polymer treatments for cleanroom environments. Our solutions are
                trusted by leading pharmaceutical, healthcare, and food industry
                clients, delivering both innovation and reliability.
              </p>
              <Link to="/aboutus">
                <button className="btn btn-primary mt-3 btn-lg shadow">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership text-center py-5">
        <div className="container">
          <h2 className="text-primary mb-4 text-dark">Our Leadership</h2>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/300x300?text=Atulkumar+Patil"
                alt="Atulkumar Patil"
                className="img-fluid rounded-circle shadow-lg mb-4"
              />
              <p className="text-dark lead">
                Under the visionary leadership of our Director, Mr. Atulkumar
                Patil, we are committed to delivering exceptional quality and
                ensuring client satisfaction at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section text-center py-4">
        <div className="container">
          <h2 className="font-weight-bold text-dark">Let's Build Together</h2>
          <p className="lead mb-4 text-dark">
            We specialize in cleanroom finishing solutions. Let's discuss your
            next project and take it to the next level.
          </p>
          <a
            href="mailto:info@saisamarthpolytech.com"
            className="btn btn-primary btn-lg shadow"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
