import React from 'react';
import Menu from '../components/Menu/Menu';
import ProductCard from '../components/ProductCard/ProductCard';
import Filter from '../components/Filter/Filter';
import { ProductsData } from "../data/ProductsData";

const products = () => {
 
  

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col">
      <div className="w-full">
        <Filter />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 flex">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-4">Products</h1>
          <div className="flex flex-wrap gap-4">
            {ProductsData.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
        <div className="w-1/3 p-4">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default products;