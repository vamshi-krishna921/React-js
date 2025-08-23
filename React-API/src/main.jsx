import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContextAPI from "./ContextApi/ContextAPI.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ContextAPI>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextAPI>
);

