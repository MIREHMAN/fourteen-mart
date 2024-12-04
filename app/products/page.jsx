import React from 'react';
import Menu from '../components/Menu/Menu';
import ProductCard from '../components/ProductCard/ProductCard';
import Filter from '../components/Filter/Filter';

const products = () => {
  const Items = [
    {
      id:1,
      title: "Premium Wireless Headphones",
      price: 15999,
      rating: 4.5,
      image: "/headphone.png",
      originalPrice: 17999
    },
    {
      id:2,
      title: "Smart Fitness Tracker Watch",
      price: 8999,
      rating: 4.2,
      image: "/watch1.jpg",
      originalPrice: 9999
    },
    {
      id:3,
      title: "Ultra HD 4K Smart TV - 55 inch",
      price: 54999,
      rating: 4.8,
      image: "/LED.png",
      originalPrice: 59999
    },
    {
      id:4,
      title: "Ultra HD 4K 28 Zoom Camera",
      price: 84999,
      rating: 4.8,
      image: "/camera.png",
      originalPrice: 99999
    }
  ]
  

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col">
    <div className="w-full">
      <Filter/>
    </div>
    <div className="max-w-7xl mx-auto px-4 py-8 flex">
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        <div className="flex flex-wrap gap-4">
        {Items.map((product, index) => (
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