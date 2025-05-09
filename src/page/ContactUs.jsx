/* eslint-disable react/no-unescaped-entities */
import React, { useRef} from "react";
import { Link } from "react-router-dom";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_35evjmh",
        "template_2od4x3r",
        form.current,
        "aYJwPKPk2z2MMpKy5"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="contact-us"
      style={{ background: "#0a192f" }}
    >
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Us - Saisamarth Polytech</title>
        <meta
          name="description"
          content="Get in touch with Saisamarth Polytech for any inquiries or assistance. We're here to help with your clean room finishing solutions."
        />
        <meta
          name="keywords"
          content="contact, epoxy flooring, polymer treatments, cleanroom solutions"
        />
      </Helmet>

      {/* Hero Section */}
      <header
        className="hero-section py-5 text-white"
        style={{ background: "linear-gradient(to bottom, #0a192f, #112240)" }}
      >
        <div className="container py-5">
          <motion.h1
            className="display-4 fw-bold text-center mb-4"
            style={{ color: "#64ffda" }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            aria-label="Contact Us"
          >
            Contact Us
          </motion.h1>

          <motion.p
            className="text-center mb-5"
            style={{
              color: "#ccd6f6",
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.1rem",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Have a question, need assistance, or want to collaborate? We're here
            to help! Feel free to reach out via the form below, or contact us
            directly. Our team will get back to you as soon as possible.
          </motion.p>

          <div className="row g-4 justify-content-center">
            {/* Contact Information */}
            <motion.div
              className="col-md-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div
                className="card p-4 h-100"
                style={{ background: "#0a192f", border: "1px solid #233554" }}
              >
                <h3 className="text-center mb-4" style={{ color: "#64ffda" }}>
                  Our Office
                </h3>
                <p className="text-center text-light">
                  <FaLocationDot className="me-2 text-primary" /> 213, 2nd
                  Floor, Sai Arcade, Mulund-West, Mumbai - 400080, India.
                </p>
                <p className="text-center text-light">
                  <MdEmail className="me-2 text-primary" />{" "}
                  <Link
                    to="mailto:saisamarthpolytech@gmail.com"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    saisamarthpolytech@gmail.com
                  </Link>
                </p>
                <p className="text-center text-light">
                  <FaPhone className="me-2 text-primary" />{" "}
                  <Link
                    to="tel:+919324529411"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    +91 9324529411
                  </Link>
                </p>
                <div className="mt-4">
                  <iframe
                    title="Google Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4993866080677!2d72.95142017781153!3d19.173378735771904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b912dfbe021d%3A0x1549238dfcb8009f!2sUnion%20Bank%20Of%20India!5e0!3m2!1sen!2sin!4v1721754958442!5m2!1sen!2s"
                    width="100%"
                    height="250"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="col-md-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div
                className="card p-4 h-100"
                style={{ background: "#0a192f", border: "1px solid #233554" }}
              >
                <h3 className="text-center mb-4" style={{ color: "#64ffda" }}>
                  Get in Touch
                </h3>
                <form ref={form} onSubmit={sendEmail}>
                  <motion.div className="mb-3" whileFocus={{ scale: 1.05 }}>
                    <input
                      className="form-control"
                      type="text"
                      name="user_name"
                      placeholder="Name"
                      required
                    />
                  </motion.div>
                  <motion.div className="mb-3" whileFocus={{ scale: 1.05 }}>
                    <input
                      className="form-control"
                      type="text"
                      name="user_phone"
                      placeholder="Phone No"
                      required
                    />
                  </motion.div>
                  <motion.div className="mb-3" whileFocus={{ scale: 1.05 }}>
                    <input
                      className="form-control"
                      type="email"
                      name="user_email"
                      placeholder="E-mail"
                      required
                    />
                  </motion.div>
                  <motion.div className="mb-3" whileFocus={{ scale: 1.05 }}>
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Your Message"
                      rows="4"
                      required
                    ></textarea>
                  </motion.div>
                  <div className="text-center">
                    <motion.button
                      type="submit"
                      className="btn ms-lg-3 px-4"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        background: "linear-gradient(45deg, #64ffda, #00e676)",
                        color: "#0a192f",
                        fontWeight: "bold",
                        borderRadius: "25px",
                        boxShadow: "0 0 15px rgba(100, 255, 218, 0.3)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Submit Inquiry
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <style>
        {`
          .contact-us {
            font-family: 'Poppins', sans-serif;
          }

          .hero-section {
            padding: 60px 0;
          }

          .card {
            transition: all 0.3s ease;
          }

          .card:hover {
            transform: translateY(-5px);
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
    </motion.div>
  );
};

export default React.memo(ContactUs);
