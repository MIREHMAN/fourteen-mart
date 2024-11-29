import React from 'react';
import { AiFillPhone, AiFillMail, AiFillStar } from 'react-icons/ai';
import { FiMapPin, FiMessageSquare, FiShoppingBag } from 'react-icons/fi';

function StoresCard({ store }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-80">
      <h2 className="text-lg font-bold mb-2">{store.name}</h2>
      <p className="text-sm text-gray-600 mb-4">{store.description}</p>
      <div className="flex justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-sm font-bold mb-2">Contact Info</h3>
          <ul className="text-sm">
            <li className="mb-2 flex items-center">
              <FiMapPin className="mr-2" />
              {store.address}
            </li>
            <li className="mb-2 flex items-center">
              <AiFillPhone className="mr-2" />
              {store.phone}
            </li>
            <li className="mb-2 flex items-center">
              <AiFillMail className="mr-2" />
              {store.email}
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-bold mb-2">Store Details</h3>
          <ul className="text-sm">
            <li className="mb-2 flex items-center">
              <AiFillStar className="mr-2 text-yellow-400" />
              {store.rating}/5
            </li>
            <li className="mb-2 flex items-center">
              <FiMessageSquare className="mr-2" />
              {store.reviews} Reviews
            </li>
            <li className="mb-2 flex items-center">
              <FiShoppingBag className="mr-2" />
              {store.products} Products
            </li>
          </ul>
        </div>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Visit Store
      </button>
    </div>
  );
}

export default StoresCard;