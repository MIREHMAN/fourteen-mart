import React from 'react';

function HotProductsCard({ rating, image, title, price, onClick }) {
  return (
    <button onClick={onClick} className="flex w-full md:w-80 h-24 bg-white shadow-md rounded-lg cursor-pointer">
      <img src={image} alt={title} className="w-20 h-20 object-cover rounded-lg" />
      <div className="flex-1 p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="flex items-center mb-2">
          <span className="text-sm font-bold mr-1">Rating:</span>
          <span className="text-sm">{rating}/5</span>
        </div>
        <p className="text-lg font-bold">RS. {price}</p>
      </div>
    </button>
  );
}

export default HotProductsCard;