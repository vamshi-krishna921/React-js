import React from "react";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Api from  "../Utils/Api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const Products = () => {
  // const { data, isError, isLoading, refetch } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: async () => {
  //     const res = await Api.get(`/products`);
  //     return res.data;
  //   },
  // });
  //* Pagination Example
  const [page, setPage] = useState(1);

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["products", page],
    queryFn: async () => {
      const res = await Api.get(
        `/posts?_start=${
          (page - 1) * 10
        }&_limit=10`
      );
      return res.data;
    },
    keepPreviousData: true,
  });
  if (isLoading)
    return (
      <h1 className="text-center font-bold text-green-300 ">Loading...</h1>
    );
  if (isError) return <h1>Something went wrong...</h1>;
  return (
    <div className="w-full flex flex-col justify-center items-center mt-5 gap-6">
      <h1 className="font-bold text-2xl">Our Products</h1>
      <div className="w-full flex justify-center items-center gap-6 flex-wrap p-6">
        {data.map((product) => {
          return (
            <Link to={`/products/${product.id}`} key={product.id}>
              <div className="w-82 h-126 bg-green-300 flex flex-col justify-start items-center gap-2 p-2 rounded-md cursor-pointer overflow-hidden">
                <div className="w-full shrink-0 h-60 bg-gray-200 flex justify-center rounded-md items-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-xl font-bold">{product.title}</h1>
                <p className="text-md">{product.price}</p>
                <p className="text-md">{product.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="w-full flex justify-center items-center gap-6 mb-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className={`px-3 py-2 ${
            page === 1
              ? "bg-gray-300 shadow-gray-600"
              : "bg-green-300 shadow-green-600"
          } shadow`}
        >
          Prev
        </button>
        <h1>{page}</h1>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-3 py-2 bg-green-300 shadow shadow-green-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};
