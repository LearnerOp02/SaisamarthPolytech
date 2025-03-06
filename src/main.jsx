/* eslint-disable no-unused-vars */
import React, { StrictMode } from "react"; // Import StrictMode
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Create root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render application with StrictMode and BrowserRouter
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
