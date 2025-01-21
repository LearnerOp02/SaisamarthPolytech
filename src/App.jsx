import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import ContactUs from "./page/ContactUs";
import Client from "./page/Client";
import Application from "./page/Application";
import AboutUs from "./page/AboutUs";
import Products from "./page/Product";
import FloorProtection from "./page/protection";
import CorrosionProtection from "./page/corrosion";
import HygienicWallProtection from "./page/hygine";
import ChemicalProtection from "./page/wall";
import EpoxyCovings from "./page/Epoxy";
import FoodGradeCoating from "./page/Food";
import FlexibleSealants from "./page/Flexible";
import ExteriorWallSystem from "./page/Durable";

function App() {
  const [showChatbot, setShowChatbot] = useState(false); // Chatbot visibility state

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot); // Toggle chatbot visibility
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/application" element={<Application />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/product" element={<Products />} />
        <Route path="/protection" element={<FloorProtection />} />
        <Route path="/corrosion" element={<CorrosionProtection />} />
        <Route path="/hygine" element={<HygienicWallProtection />} />
        <Route path="/wall" element={<ChemicalProtection />} />
        <Route path="/Epoxy" element={<EpoxyCovings />} />
        <Route path="/Food" element={<FoodGradeCoating />} />
        <Route path="/Flexible" element={<FlexibleSealants />} />
        <Route path="/Durable" element={<ExteriorWallSystem />} />
      </Routes>
      <Footer />

      {/* Chatbot toggle icon with image */}
      <div
        className="position-fixed"
        style={{
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          cursor: "pointer",
          backgroundColor: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
        onClick={toggleChatbot}
        title={showChatbot ? "Close Chatbot" : "Open Chatbot"}
      >
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/025/271/424/small_2x/robot-chatbot-generative-ai-free-png.png"
          alt="Chatbot"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Chatbot iframe */}
      {showChatbot && (
        <div
          className="position-fixed"
          style={{
            bottom: "90px",
            right: "20px",
            width: "350px",
            height: "500px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            backgroundColor: "white",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/TpoSPHBgtKbBIhhTAmIDQ"
            width="100%"
            height="100%"
            title="Chatbot"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default App;
