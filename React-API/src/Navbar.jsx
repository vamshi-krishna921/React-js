import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Products from "./Components/Products.jsx";
import ProductDetails from "./Components/ProductDetails.jsx";
import Services from "./Components/Services.jsx";
import { ProductContext } from "./ContextApi/ContextAPI";
import { useContext } from "react";

function Navbar() {
  const { theme } = useContext(ProductContext);
  return (
    <>
      <div
        className={`w-full h-[7vh] ${
          theme === "light"
            ? "bg-gray-200"
            : "bg-black text-white shadow shadow-white"
        } flex justify-center items-center gap-5`}
      >
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
        <Route path="/products/:name" element={<ProductDetails />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default Navbar;
