import React from "react";
import { useParams } from "react-router-dom";
import APi from "../Utils/Api";
import { useQuery } from "@tanstack/react-query";

function ProductDetails() {
  const { id } = useParams();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await APi.get(`/posts/${id}`);
      return res.data;
    },
  });
  if (isLoading)
    return (
      <h1 className="text-center font-bold text-green-300 ">Loading...</h1>
    );
  if (isError) return <h1>Something went wrong...</h1>;
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
      <img src={data.image} alt={data.title} className="h-48 mb-4 mx-auto" />
      <p className="text-lg font-semibold">${data.price}</p>
      <p className="mt-2">{data.description}</p>
      <p className="mt-2 italic">Category: {data.category}</p>
    </div>
  );
}

export default ProductDetails;
