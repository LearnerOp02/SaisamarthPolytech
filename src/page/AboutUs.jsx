/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import about from "./Images/about.png";
import team from "./Images/team.png";
import tech from "./Images/tech.png";
import hyg from "./Images/hyg.jpg";
import pre from "./Images/pre.jpg";
import tai from "./Images/tai.jpg";

const AboutUs = () => {
  return (
    <div style={{ background: "#0a192f" }}>
      {/* Hero Section */}
      <section
        className="py-5 text-white"
        style={{ background: "linear-gradient(to bottom, #0a192f, #112240)" }}
      >
        <div className="container text-center">
          <motion.h1
            className="display-4 fw-bold mb-4 pt-5"
            style={{ color: "#64ffda" }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="lead mb-4"
            style={{ color: "#ccd6f6", maxWidth: "700px", margin: "0 auto" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Delivering Precision and Excellence in Clean Room Finishing
            Solutions
          </motion.p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-5 text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <motion.h2
                className="font-weight-bold mb-4"
                style={{ color: "#64ffda" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Who We Are
              </motion.h2>
              <motion.p
                className="lead text-light"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <strong>Saisamarth Polytech Pvt. Ltd.</strong> is a leading
                provider of clean room finishing solutions, specializing in
                epoxy and polymer treatments. With over 20 years of experience,
                we deliver innovative and durable solutions for industries
                requiring high hygiene standards.
              </motion.p>
              <motion.p
                className="lead text-light"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Our expertise spans epoxy flooring, antibacterial wall coatings,
                and custom polymer treatments. We serve pharmaceutical,
                healthcare, food processing, and engineering industries,
                ensuring compliance with global standards.
              </motion.p>
              <motion.p
                className="lead text-light"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                From small-scale projects to large industrial installations, we
                deliver tailored solutions that meet your unique requirements.
              </motion.p>
            </div>
            <div className="col-md-6 text-center">
              <motion.img
                src={about}
                alt="About Us"
                className="img-fluid rounded shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-5 text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <motion.img
                src={team}
                alt="Our Team"
                className="img-fluid rounded-circle shadow-lg w-50"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>
            <div className="col-md-6">
              <motion.h2
                className="font-weight-bold mb-4"
                style={{ color: "#64ffda" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Our Expert Team
              </motion.h2>
              <motion.p
                className="lead text-light"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Our team is led by <strong>Mr. Atulkumar Patil</strong>, a
                seasoned professional with 25+ years of experience in flooring
                and coatings. His expertise and leadership drive our commitment
                to excellence.
              </motion.p>
              <motion.p
                className="lead text-light"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                We combine technical knowledge, innovation, and precision to
                deliver solutions that exceed client expectations. Our team is
                dedicated to providing exceptional service and results.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      {/* Our Technology Section */}
      <section className="py-5 text-white">
        <div className="container">
          <motion.h2
            className="font-weight-bold text-center mb-5"
            style={{ color: "#64ffda" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5}}
          >
            Four-Dimensional Technology
          </motion.h2>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <motion.img
                src={tech}
                alt="Technology"
                className="img-fluid rounded shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8}}
              />
            </div>
          </div>
          <div className="row mt-5">
            {/* First Row */}
            <div className="col-md-6 d-flex">
              <motion.div
                className="technology-card p-4 mb-4 w-100"
                style={{
                  background: "#0a192f",
                  border: "1px solid #233554",
                  textAlign: "center",
                  padding: "10px",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5}}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(100,255,218,0.1)",
                }}
              >
                <h4 className="font-weight-bold text-light mb-3">
                  Right Material Selection
                </h4>
                <p className="text-light">
                  We select materials based on site-specific requirements,
                  ensuring optimal performance and durability.
                </p>
              </motion.div>
            </div>
            <div className="col-md-6 d-flex">
              <motion.div
                className="technology-card p-4 mb-4 w-100"
                style={{
                  background: "#0a192f",
                  border: "1px solid #233554",
                  textAlign: "center",
                  padding: "10px",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5}}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(100,255,218,0.1)",
                }}
              >
                <h4 className="font-weight-bold text-light mb-3">
                  Right Application Method
                </h4>
                <p className="text-light">
                  Our advanced application techniques ensure precision and
                  efficiency, minimizing downtime and disruption.
                </p>
              </motion.div>
            </div>
            {/* Second Row */}
            <div className="col-md-6 d-flex">
              <motion.div
                className="technology-card p-4 mb-4 w-100"
                style={{
                  background: "#0a192f",
                  border: "1px solid #233554",
                  textAlign: "center",
                  padding: "10px",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5}}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(100,255,218,0.1)",
                }}
              >
                <h4 className="font-weight-bold text-light mb-3">
                  Cost-Effective Solutions
                </h4>
                <p className="text-light">
                  We deliver high-quality solutions at competitive prices,
                  ensuring value without compromising on quality.
                </p>
              </motion.div>
            </div>
            <div className="col-md-6 d-flex">
              <motion.div
                className="technology-card p-4 mb-4 w-100"
                style={{
                  background: "#0a192f",
                  border: "1px solid #233554",
                  textAlign: "center",
                  padding: "10px",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(100,255,218,0.1)",
                }}
              >
                <h4 className="font-weight-bold text-light mb-3">Time Frame</h4>
                <p className="text-light">
                  Our efficient project management ensures timely delivery, even
                  in challenging conditions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="py-5 text-white">
        <div className="container">
          <motion.h2
            className="font-weight-bold text-center mb-5"
            style={{ color: "#64ffda" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            What We Provide
          </motion.h2>
          <div className="row">
            {[
              {
                img: pre,
                title: "Premium Polymer Treatments",
                description:
                  "High-performance polymer solutions for diverse industries, ensuring durability and compliance.",
              },
              {
                img: tai,
                title: "Tailored Finishing Solutions",
                description:
                  "Customized solutions for clean rooms, hospitals, and pharmaceutical facilities.",
              },
              {
                img: hyg,
                title: "Hygienic Coatings",
                description:
                  "Antibacterial and antifungal coatings for environments requiring high hygiene standards.",
              },
            ].map((service, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <motion.div
                  className="service-card text-center shadow p-4 rounded h-100"
                  style={{
                    background: "#0a192f",
                    border: "1px solid #233554",
                    textAlign: "center",
                    padding: "10px",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(100,255,218,0.1)",
                  }}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="img-fluid rounded"
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <h5 className="font-weight-bold text-light mt-3">
                    {service.title}
                  </h5>
                  <p className="text-light">{service.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
