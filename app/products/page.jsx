import React from 'react';
import Menu from '../components/Menu/Menu';
import ProductCard from '../components/ProductCard/ProductCard';

const products = () => {
  const posts = [
    {
      id: 1,
      title: 'Product 1',
      price: 1000,
      rating: 4.5,
      image: '/watch1.jpg',
      category: 'Electronics',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 500,
      rating: 4.2,
      image: '/watch1.jpg',
      category: 'Fashion',
    },
    {
      id: 3,
      title: 'Product 3',
      price: 2000,
      rating: 4.8,
      image: '/watch1.jpg',
      category: 'Home & Kitchen',
    },
    {
      id: 4,
      title: 'Product 4',
      price: 1500,
      rating: 4.1,
      image: '/watch1.jpg',
      category: 'Beauty & Personal Care',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex">
      <div className="w-2/3 p-4">
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        <div className="flex flex-wrap gap-4">
          {posts.map((post) => (
            <ProductCard
              key={post.id}
              title={post.title}
              price={post.price}
              rating={post.rating}
              image={post.image}
            />
          ))}
        </div>
      </div>
      <div className="w-1/3 p-4">
        <Menu />
      </div>
    </div>
  );
};

export default products;