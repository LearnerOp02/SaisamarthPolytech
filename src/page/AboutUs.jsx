/* eslint-disable no-unused-vars */
import React from "react";
import '../style/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page" style={{ backgroundColor: '#f5f5dc' }}>

      {/* Hero Section */}
      <div className="hero-section-container">
        <section className="hero-section" style={{ backgroundImage: "url('https://via.placeholder.com/1920x800')" }}>
         
            <div className="container text-center text-white">
              <br></br>
              <h1 className="display-4 font-weight-bold text-black">About Us</h1>
              <p className="lead mb-4 text-black">Providing Ultimate Finishing Solutions for Clean Rooms & Beyond</p>
              <a href="#our-team" className="btn btn-primary btn-lg mt-4 hero-btn">Meet Our Team</a>
            </div>
         
        </section>
      </div>

      {/* About Us Section */}
      <div className="about-us-container py-5">
        <div className="container" id="about-us">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="font-weight-bold text-primary mb-4">Who We Are</h2>
              <p className="lead text-dark">
                <strong>We</strong> are leaders in clean room finishing services with over two decades of experience, specializing in epoxy flooring, epoxy coving, antibacterial wall coatings, and more.
              </p>
              <p className="lead text-dark">
                With a legacy of working with prominent industries, including pharmaceuticals, food industries, hospitals, and engineering projects, we provide tailored solutions for all project sizes.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="https://www.saisamarthpolytech.com/images/abx.jpg"
                alt="About Us"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="our-team-container py-5">
        <div className="container" id="our-team">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img
                src="https://img.freepik.com/free-photo/colleagues-giving-fist-bump_53876-13530.jpg?t=st=1736782729~exp=1736786329~hmac=006ecb673e05c5e456a913f4ef939e974a3057080e6f62cd0a6fdd344facf136&w=1060"
                alt="Our Team"
                className="img-fluid rounded-circle shadow-lg"
              />
            </div>
            <div className="col-md-6">
              <h2 className="font-weight-bold text-primary mb-4">Our Expert Team</h2>
              <p className="lead text-dark">
                Led by visionary director, Mr. Atulkumar Patil, with 18 years of experience, our team combines technical expertise and innovation to tackle challenges with precision.
              </p>
              <p className="lead text-dark">
                Our commitment to excellence has earned us the trust of industry leaders, developing customized solutions tailored to each client’s needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Provide Section */}
      <div className="services-container py-5">
        <section className="container" id="services">
          <h2 className="font-weight-bold text-center text-primary mb-5">What We Provide</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="service-card text-center shadow p-4 rounded">
                <img
                  src="https://5.imimg.com/data5/ANDROID/Default/2024/11/462550190/CO/BV/NL/40344453/product-jpeg-500x500.jpg"
                  alt="Service 1"
                  className="img-fluid rounded mb-3"
                />
                <h5 className="font-weight-bold text-dark">Premium Polymer Treatments</h5>
                <p className="text-muted">
                  We provide high-quality polymer treatments for diverse industries, ensuring durability and performance.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-card text-center shadow p-4 rounded">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsd8ole9G1UjZnCnzpY1WQ2Jg3xR3p1lpb4g&s"
                  alt="Service 2"
                  className="img-fluid rounded mb-3"
                />
                <h5 className="font-weight-bold text-dark">Tailored Finishing Solutions</h5>
                <p className="text-muted">
                  Our finishing solutions are customized for clean rooms, hospitals, pharma industries, and more.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-card text-center shadow p-4 rounded">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2023/6/318692909/CH/ZR/GS/28604821/hygienic-coating-services-500x500.jpeg"
                  alt="Service 3"
                  className="img-fluid rounded mb-3"
                />
                <h5 className="font-weight-bold text-dark">Hygienic Coatings</h5>
                <p className="text-muted">
                  We offer antibacterial and antifungal wall coatings, ensuring high standards of hygiene and safety.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default AboutUs;
