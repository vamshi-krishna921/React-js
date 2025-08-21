import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Products from "./Components/Products.jsx";
import Services from "./Components/Services.jsx";

function Navbar() {
  return (
    <>
      <div className="w-full h-[7vh] bg-zinc-200 flex justify-center items-center gap-5">
        <Link to="/" className="text-md">
          Home
        </Link>
        <Link to="/products" className="text-md">
          Products
        </Link>
        <Link to="/services" className="text-md">
          Services
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default Navbar;
