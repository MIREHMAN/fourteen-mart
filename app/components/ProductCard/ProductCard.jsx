"use client"

import Image from "next/image";
import Link from "next/link";
import { useCart } from '../../contexts/CartContext';
import { useRouter } from "next/navigation";
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";

const ProductCard = ({id, title, price, rating, image, originalPrice }) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleBuyNow = () => {
    addToCart({ id, title, price, quantity: 1 });
    router.push("http://localhost:3000/checkout");
  };

  const handleAddToCart = () => {
    addToCart({ id, title, price, quantity: 1 });
  };

  return (
    <div className="bg-white shadow-lg rounded-xl w-64 h-[400px] overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={256}
          height={160}
          className="w-full h-40 object-contain rounded-t-xl"
        />
        <div className="absolute top-2 left-2">
          <span className="text-xs font-semibold text-white rounded-full bg-red-500 px-2 py-1 shadow-md">
            -10%
          </span>
        </div>
        <div className="absolute top-2 right-2">
          <button className="bg-white p-2 rounded-full shadow-md transition-colors duration-300 hover:bg-red-50">
            <AiOutlineHeart className="w-5 h-5 text-gray-600 hover:text-red-500" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-800 rounded-full">
            New
          </span>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
            <AiFillStar className="mr-1 text-yellow-500" />
            <span className="text-xs font-semibold text-yellow-700">
              {rating}
            </span>
          </div>
        </div>
        <Link href="/">
          <h3 className="text-lg font-bold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
        </Link>
        <div className="flex items-baseline mb-4">
          <span className="text-2xl font-bold text-blue-600 mr-2">
            RS. {price.toLocaleString()}
          </span>
          <span className="text-sm font-medium line-through text-gray-400">
            RS. {originalPrice.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="px-4 ">
        <div className="flex justify-between gap-2">
          
            <button
              onClick={handleBuyNow}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Buy Now
            </button>
         
          <button
            onClick={handleAddToCart}
            className="bg-gray-100 text-gray-600 p-2 rounded-lg transition-all duration-300 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
          >
            <AiOutlineShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
