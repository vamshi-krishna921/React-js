import React from "react";
import { useParams } from "react-router-dom";

function Product_details() {
  const { name } = useParams();
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: "$10",
      description: "A fast and reliable laptop.",
      image:
        "https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Mobile",
      price: "$20",
      description: "A modern smartphone with great features.",
      image:
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Camera",
      price: "$30",
      description: "A high-quality digital camera.",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const product = products.find((p)=> {
    return p.name.toLowerCase() === name.toLowerCase();
  })
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[80%] min-h-[90vh] bg-zinc-300 flex justify-center items-center flex-col gap-6">
        <div className="w-[40%] h-[50vh] rounded-md bg-amber-300 overflow-hidden">
          <img src={product.image} alt="" className="w-full h-full"/>
        </div>
        <h1 className="text-5xl font-semibold">{product.name}</h1>
        <h3 className="text-2xl font-semibold">{product.price}</h3>
        <p className="text-xl font-light">{product.description}</p>
      </div> 
    </div>
  );
}

export default Product_details;
