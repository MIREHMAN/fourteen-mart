"use client";
import React, { useState } from "react";

const Filter = () => {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [rating, setRating] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API or perform filtering logic here
    console.log("Filtered by:", category, priceRange, rating);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
  <form onSubmit={handleSubmit}>
    <div className="flex gap-4">
      <div>
        <label className="text-lg font-bold mb-2">Category:</label>
        <select
          value={category}
          onChange={handleCategoryChange}
          className="p-2 border border-gray-400 rounded-lg"
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="home-goods">Home Goods</option>
          <option value="books">Books</option>
        </select>
      </div>
      <div>
        <label className="text-lg font-bold mb-2">Price Range:</label>
        <select
          value={priceRange}
          onChange={handlePriceRangeChange}
          className="p-2 border border-gray-400 rounded-lg"
        >
          <option value="">All</option>
          <option value="0-100">$0 - $100</option>
          <option value="101-200">$101 - $200</option>
          <option value="201-500">$201 - $500</option>
          <option value="501+">$501+</option>
        </select>
      </div>
      <div>
        <label className="text-lg font-bold mb-2">Rating:</label>
        <select
          value={rating}
          onChange={handleRatingChange}
          className="p-2 border border-gray-400 rounded-lg"
        >
          <option value="">All</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5</option>
          <option value="5">5+</option>
        </select>
      </div>
      
      <button
        type="submit"
        className="block sm:hidden bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
      >
        Apply Filters
      </button>
    </div>
  </form>
</div>
  );
};

export default Filter;
