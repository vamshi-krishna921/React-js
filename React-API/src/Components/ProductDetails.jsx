import React from "react";
import { ProductContext } from "../ContextApi/ContextAPI";
import { useContext } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const {products} = useContext(ProductContext);
  const { name } = useParams();
  console.log(products);
  const product = products.find((item) => item.name === name);
  return (
    <>
      <div className="w-[20vw] h-fit bg-amber-300 flex flex-col justify-center items-center gap-8">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-600">{product.category}</p>
        <p className="text-green-600 font-semibold">${product.price}</p>
      </div>
    </>
  );
}

export default ProductDetails;
