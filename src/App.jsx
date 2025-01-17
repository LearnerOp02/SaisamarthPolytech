import React, { useEffect } from "react"; // Import useEffect
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/navbar";
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
  // Embed chatbot script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js"; // Chatbot source URL
    script.id = "aron61ax8mt303a3tbkvg8shv119by0n"; // Replace with your Chatbot ID
    script.async = true;
    script.onload = () => {
      console.log("Chatbot script loaded successfully!");
    };
    document.body.appendChild(script);

    // Cleanup script on unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saisamarth-web" element={<Home />} />
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
    </div>
  );
}

export default App;
