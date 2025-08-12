import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Cards from "./cards.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Cards /> */}
  </React.StrictMode>
);
