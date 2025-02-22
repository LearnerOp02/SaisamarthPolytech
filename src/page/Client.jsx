import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import client1 from "./Images/1.jpg";
import client2 from "./Images/2.jpg";
import client3 from "./Images/3.jpg";
import client4 from "./Images/4.jpg";
import client5 from "./Images/5.jpg";
import client6 from "./Images/6.jpg";
import client7 from "./Images/7.jpg";
import client8 from "./Images/8.jpg";
import client9 from "./Images/9.jpg";
import client10 from "./Images/10.jpg";
import client11 from "./Images/11.jpg";
import client12 from "./Images/12.jpg";
import client13 from "./Images/13.jpg";
import client14 from "./Images/14.jpg";
import client15 from "./Images/15.jpg";
import client16 from "./Images/16.jpg";
import client17 from "./Images/17.jpg";
import client18 from "./Images/18.jpg";
import client19 from "./Images/19.jpg";
import client20 from "./Images/20.jpg";
import client21 from "./Images/21.jpg";
import client22 from "./Images/22.jpg";
import client23 from "./Images/23.jpg";
import client24 from "./Images/24.jpg";
import client25 from "./Images/25.jpg";
import client26 from "./Images/26.jpg";
import client27 from "./Images/27.jpg";
import client28 from "./Images/28.jpg";
import client29 from "./Images/29.jpg";
import client30 from "./Images/30.jpg";
import client31 from "./Images/31.jpg";
import client32 from "./Images/32.jpg";
import client33 from "./Images/33.jpg";
import client34 from "./Images/34.jpg";
import client35 from "./Images/35.jpg";
import client36 from "./Images/36.jpg";

// Store all images in an array
const clientImages = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16,
  client17,
  client18,
  client19,
  client20,
  client21,
  client22,
  client23,
  client24,
  client25,
  client26,
  client27,
  client28,
  client29,
  client30,
  client31,
  client32,
  client33,
  client34,
  client35,
  client36,
];

// Create an array of client objects
const clientData = clientImages.map((img, index) => ({
  img,
  name: `Client ${index + 1}`,
}));

const ClientCard = ({ client, index }) => (
  <motion.div
    className="col-md-4 col-lg-3"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
  >
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
        src={client.img}
        className="card-img-top"
        alt={client.name}
        style={{ height: "200px", objectFit: "cover" }}
        loading="lazy"
      />
    </motion.div>
  </motion.div>
);

const Clients = () => {
  return (
    <div style={{ background: "#0a192f" }}>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Clients - Saisamarth Polytech</title>
        <meta
          name="description"
          content="Explore our esteemed clients who have trusted us with their needs. We collaborate with leading companies across various industries."
        />
        <meta
          name="keywords"
          content="industrial flooring, epoxy flooring, cleanroom solutions, polymer treatments"
        />
      </Helmet>

      {/* Hero Section */}
      <header
        className="py-5 text-white"
        style={{ background: "linear-gradient(to bottom, #0a192f, #112240)" }}
      >
        <div className="container py-5">
          <motion.h1
            className="display-4 fw-bold text-center mb-4"
            style={{ color: "#64ffda" }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Clients
          </motion.h1>
          <motion.p
            className="text-center mb-5"
            style={{ color: "#ccd6f6", maxWidth: "700px", margin: "0 auto" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            We take pride in collaborating with leading companies across various
            industries. Here are some of our esteemed clients who have trusted
            us with their needs.
          </motion.p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {clientData.map((client, index) => (
              <ClientCard key={index} client={client} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Clients;
