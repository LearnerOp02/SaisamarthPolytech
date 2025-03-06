/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Pagenotfound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Full viewport height
        background: "#0a192f",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* SEO Meta Tags */}
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. Please check the URL or return to the homepage."
        />
      </Helmet>

      {/* Content */}
      <div>
        <motion.h1
          style={{ color: "#64ffda", marginBottom: "20px" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          404 - Page Not Found
        </motion.h1>
        <motion.p
          style={{ color: "#ccd6f6", margin: "0 auto 20px", maxWidth: "700px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Sorry, the page you are looking for does not exist. Please check the
          URL or return to the homepage.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/"
            style={{
              background: "#64ffda",
              color: "#0a192f",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Pagenotfound;