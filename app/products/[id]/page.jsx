
import React from 'react';
import { ProductsData } from '../../data/ProductsData';
import Add from "../../components/Add/Add";
import CustomizeProducts from "../../components/CustomizeProducts/CustomizeProducts";
import ProductImages from "../../components/ProductImages/ProductImages";
import Reviews from "../../components/Reviews/Reviews";


const SinglePage = async ({ params }) => {
  const id = params.id;
  console.log(id);

  const product = ProductsData.find((product) => product.id === parseInt(id));
  console.log(product);
  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-16 xl:p-32 2xl:p-64 relative flex flex-col lg:flex-row gap-16">
      {/* Product Images */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages media ={product.media.items} />
      </div>
      {/* Product Details */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.title}</h1>
        <p className="text-gray-500">Description: {product.description}</p>
        <div className="h-[2px] bg-gray-100" />
        {/* Price */}
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">${product.originalPrice}</h3>
          <h2 className="font-medium text-2xl">${product.price}</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        {/* Options */}
        {product.options.map((option) => (
          <div className="flex flex-col gap-4" key={option.name}>
            <h4 className="font-medium text-lg">{option.name}</h4>
            <ul className="flex items-center gap-3">
              {option.choices.map((choice) => (
                <li key={choice}>{choice}</li>
              ))}
            </ul>
          </div>
        ))}
        {/* Customize or Add to Cart */}
        <CustomizeProducts />
        <div className="h-[2px] bg-gray-100" />
        <Add/>
       
        <div className="h-[2px] bg-gray-100" />
        {/* Reviews */}
        <h1 className="text-2xl">User Reviews</h1>
        <Reviews/>
      </div>
    </div>
  );
};

export default SinglePage;