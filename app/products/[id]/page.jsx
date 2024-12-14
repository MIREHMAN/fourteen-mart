
import React from 'react';
import { ProductsData } from '../../data/ProductsData';
import Add from "../../components/Add/Add";
import ProductImages from "../../components/ProductImages/ProductImages";
import Reviews from "../../components/Reviews/Reviews";


const SinglePage = async ({ params }) => {
  const id = params.id;
  console.log(id);

  const product = ProductsData.find((product) => product.id === parseInt(id));
  console.log(product);
  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-16 xl:p-32 2xl:p-64 relative flex flex-col lg:flex-row gap-24">
      {/* Product Images */}
      <div className="w-full lg:w-1/2 lg:sticky top-10 h-max">
        <ProductImages media={product.media.items} />
      </div>
      {/* Product Details */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-bold mb-2 text-gray-600">
          {product.title}
        </h1>
        <p className="text-lg text-gray-600">{product.description}</p>
        <div className="h-[2px] bg-gray-100" />
        {/* Price */}
        <div className="p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-blue-600">
                PKR.{product.price}/-
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  PKR.{product.originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="h-[2px] bg-gray-100" />
        {/* Options */}
        {product.options.map((option, index) => (
          <div className="flex flex-col gap-4" key={option.name}>
            <h4 className="font-medium text-lg">{option.name}</h4>
            {index === 0 && (
              <div className="flex items-center gap-3">
                {option.choices.map((choice) => (
                  <button
                    key={choice}
                    className={`h-12 w-12 px-4 rounded-full ${
                      choice === "Red"
                        ? "bg-red-500 text-white"
                        : choice === "Blue"
                        ? "bg-blue-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    
                  </button>
                ))}
              </div>
            )}
            {index === 1 && (
              <div className="flex items-center gap-3">
                {option.choices.map((choice) => (
                  <button
                    key={choice}
                    className={`py-2 px-4 rounded-md shadow-md ${
                      choice === "Small"
                        ? "text-xs"
                        : choice === "Medium"
                        ? "text-sm"
                        : "text-base"
                    }`}
                  >
                    {choice}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
       
        <div className="h-[2px] bg-gray-100" />
        <Add />

        <div className="h-[2px] bg-gray-100" />
        {/* Reviews */}
        <h1 className="text-2xl">User Reviews</h1>
        <Reviews />
      </div>
    </div>
  );
};

export default SinglePage;