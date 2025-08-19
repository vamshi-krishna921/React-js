import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Services from "./Components/Services.jsx";
import Products from "./Components/Products.jsx";
import Product_details from "./Components/Product_details.jsx";

function Static_routing() {
  return (
    <>
      <nav className="w-screen h-[8vh] flex items-center justify-center gap-3.5 bg-zinc-100">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 text-md font-bold"
              : "text-zinc-500 text-md hover:text-zinc-700"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 text-md font-bold"
              : "text-zinc-500 text-md hover:text-zinc-700"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 text-md font-bold"
              : "text-zinc-500 text-md hover:text-zinc-700"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 text-md font-bold"
              : "text-zinc-500 text-md hover:text-zinc-700"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 text-md font-bold"
              : "text-zinc-500 text-md hover:text-zinc-700"
          }
        >
          Products
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:name" element={<Product_details />} />
      </Routes>
    </>
  );
}

export default Static_routing;
