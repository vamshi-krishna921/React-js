import React, { useEffect } from "react";
import { useState } from "react";
import Api from "../utils/Api";
import axios from "axios";

function Products() {
  const [prodts, setProducts] = useState([]);


  const fetchApi = () => {
    Api
      .get("/products")
      .then((response) => {
        setProducts(response.data); 
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };
  useEffect(() => {
    fetchApi();
    return () => {
      console.log("Products component unmounted");
    };
  }, []);
  return (
    <>
      <div className="flex items-center gap-2 flex-col justify-center h-screen text-2xl">
        <div className="flex gap-3 w-full h-[90%] bg-amber-200 flex-wrap overflow-auto p-4">
          {prodts.map((item, index) => (
             <div
              key={index}
              className="w-1/4 min-w-[200px] bg-white p-4 shadow-lg rounded-lg"
            >
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-gray-600">{item.category}</p>
              <p className="text-green-600 font-semibold">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
