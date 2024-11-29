import React from 'react';

function StoresCard({ store }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">{store.name}</h2>
      <p className="text-sm text-gray-600 mb-4">{store.description}</p>
      <div className="flex flex-wrap justify-between mb-4">
        <div className="w-full md:w-1/2 xl:w-1/3 mb-4 md:mb-0">
          <h3 className="text-sm font-bold mb-2">Contact Info</h3>
          <ul className="text-sm">
            <li className="mb-2">{store.address}</li>
            <li className="mb-2">{store.phone}</li>
            <li className="mb-2">{store.email}</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 mb-4 md:mb-0">
          <h3 className="text-sm font-bold mb-2">Store Details</h3>
          <ul className="text-sm">
            <li className="mb-2">Rating: {store.rating}</li>
            <li className="mb-2">Reviews: {store.reviews}</li>
            <li className="mb-2">Products: {store.products}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StoresCard;