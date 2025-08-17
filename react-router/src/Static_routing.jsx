import React, { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Services from "./Components/Services.jsx";
import Products from "./Components/Products.jsx";

function Static_routing() {
  return (
    <>
      <nav className="w-screen h-[8vh] flex items-center justify-center gap-3.5 bg-zinc-100">
        <Link to="/" className="text-md hover:text-zinc-700">
          Home
        </Link>
        <Link to="/About" className="text-md hover:text-zinc-700">
          About
        </Link>
        <Link to="/Contact" className="text-md hover:text-zinc-700">
          Contact
        </Link>
        <Link to="/Services" className="text-md hover:text-zinc-700">
          Services
        </Link>
        <Link to="/Products" className="text-md hover:text-zinc-700">
          Products
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </>
  );
}
export default Static_routing;