import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import ProductDetails from "./components/ProductDetails";

export const Navbar = () => {
  return (
    <>
      <div className="w-full h-[10vh] bg-gray-200 flex justify-center items-center gap-6">
        <NavLink
          to="/"
          className={({ isActive }) => 
            isActive
              ? "text-blue-500 text-md font-bold"
              : "text-zinc-500 text-md hover:text-zinc-700"
          }
          element={<Home />}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => 
            isActive
              ? "text-blue-500 text-md font-bold"
              : "text-zinc-500 text-md hover:text-zinc-700"
          }
          element={<Products />}
        >
          Products
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => 
            isActive
              ? "text-blue-500 text-md font-bold"
              : "text-zinc-500 text-md hover:text-zinc-700"
          }
          element={<Services />}
        >
          Services
        </NavLink>
      </div>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};
export default Navbar;
