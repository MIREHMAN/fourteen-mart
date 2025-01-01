import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div className="flex justify-center items-center bg-white rounded-lg shadow-md p-1">
        <BiSearch/>
      <input
        className="w-full py-2 pl-2 text-sm text-gray-700 "
        type="search"
        placeholder="Search products..."
      />
     
    </div>
  );
};

export default Search;