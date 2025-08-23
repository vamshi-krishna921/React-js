import React, { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

const ContextApi = (props) => {
    const [products, setProducts] = useState([
        {id: 1, name: "Mango", category: "Fruits", price: 200},
        {id: 2, name: "Banana", category: "Fruits", price: 50},
        {id: 3, name: "Orange", category: "Fruits", price: 100},
        {id: 4, name: "Apple", category: "Fruits", price: 150},
    ]);
    console.log(products);
    
  return (
    <ProductContext.Provider value={{products, setProducts}}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ContextApi;
