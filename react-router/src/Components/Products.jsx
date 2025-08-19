import React from 'react';
import { NavLink } from 'react-router-dom';

function Products() {
  const products = [
    { id: 1, name: 'Laptop', price: '$10', description: 'A fast and reliable laptop.' },
    { id: 2, name: 'Mobile', price: '$20', description: 'A modern smartphone with great features.' },
    { id: 3, name: 'Camera', price: '$30', description: 'A high-quality digital camera.' },
  ];
  return (
    <div className="w-screen h-[92vh] flex items-center justify-center flex-col gap-7">
      <h1 className="text-3xl font-bold text-zinc-800">Products Page</h1>
      <ul className="mt-4 space-y-2">
        {products.map(product => (
          <li key={product.id} className="text-black font-bold">
            <NavLink 
              to={`/products/${product.name}`} 
              className="hover:text-blue-500"
            >
              {product.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-zinc-500">
        <p>Explore our range of products!</p>
      </div>
    </div>
 
  )
}

export default Products