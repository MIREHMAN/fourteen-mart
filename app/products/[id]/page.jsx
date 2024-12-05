import React from 'react';
import Add from "../../components/Add/Add";
import CustomizeProducts from "../../components/CustomizeProducts/CustomizeProducts";
import ProductImages from "../../components/ProductImages/ProductImages";
import Reviews from "../../components/Reviews/Reviews";

const product = {
  name: "Product Name",
  description: "Product Description",
  media: {
    items: [
      {
        url: "https://via.placeholder.com/500",
      },
    ],
  },
  price: {
    price: 400,
  },
  options: [
    {
      name: "Color",
      choices: ["Red", "Blue", "Green"],
    },
    {
      name: "Size",
      choices: ["Small", "Medium", "Large"],
    },
  ],
};

const sections = [
  {
    title: "Section 1",
    description: "Section 1 description",
  },
  {
    title: "Section 2",
    description: "Section 2 description",
  },
];

const SinglePage = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-16 xl:p-32 2xl:p-64 relative flex flex-col lg:flex-row gap-16">
      {/* Product Images */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* Product Details */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <div className="h-[2px] bg-gray-100" />
        {/* Price */}
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$500</h3>
          <h2 className="font-medium text-2xl">$400</h2>
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
        {/* Additional Info */}
        {sections.map((section) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))}
        <div className="h-[2px] bg-gray-100" />
        {/* Reviews */}
        <h1 className="text-2xl">User Reviews</h1>
        <Reviews/>
      </div>
    </div>
  );
};

export default SinglePage;