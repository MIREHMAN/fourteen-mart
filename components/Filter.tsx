"use client";
import { Label } from "@radix-ui/react-dropdown-menu";
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
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg">
      <div className="flex gap-4">
        <div>
          <Label className="text-lg font-bold mb-2">Category:</Label>
          <Select
            value={category}
            onChange={handleCategoryChange}
            className="p-2 border border-gray-400 rounded-lg"
          >
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home-goods">Home Goods</option>
            <option value="books">Books</option>
          </Select>
        </div>
        <div>
          <Label className="text-lg font-bold mb-2">Price Range:</Label>
          <Select
            value={priceRange}
            onChange={handlePriceRangeChange}
            className="p-2 border border-gray-400 rounded-lg"
          >
            <option value="">All</option>
            <option value="0-100">$0 - $100</option>
            <option value="101-200">$101 - $200</option>
            <option value="201-500">$201 - $500</option>
            <option value="501+">$501+</option>
          </Select>
        </div>
        <div>
          <Label className="text-lg font-bold mb-2">Rating:</Label>
          <Select
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
          </Select>
        </div>
        <Button type="submit" className="block sm:hidden">
          Apply Filters
        </Button>
      </div>
    </Form>
  );
};

export default Filter;
