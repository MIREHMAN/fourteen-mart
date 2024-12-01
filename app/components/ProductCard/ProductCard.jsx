import Image from "next/image";
import Link from "next/link";
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";

const ProductCard = ({ title, price, rating, image, originalPrice }) => {
  return (
    <div className="bg-white shadow-md rounded-lg w-64 h-100">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="w-full h-40 object-contain rounded-t-lg"
        />
        <div className="absolute top-2 left-2">
          <span className="text-sm text-white rounded-sm bg-gray-500 px-2">
            -10%
          </span>
        </div>
        <div className="absolute top-2 right-2">
          <AiOutlineHeart className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer" />
        </div>
      </div>
      <div className="px-2">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-light px-2 bg-green-700 rounded-lg text-white">
            New
          </span>
          <div className="flex items-center text-green-600">
            <AiFillStar className="mr-1 text-yellow-400" />
            <span className="font-bold">{rating}/5</span>
          </div>
        </div>
        <Link href="#">
          <h3 className="text-lg font-bold mb-2 text-blue-600 hover:text-blue-800">
            {title}
          </h3>
        </Link>
        <div className="flex items-center mb-4">
          <span className="text-2xl font-bold text-red-600 mr-2">
            RS. {price}
          </span>
          <span className="text-lg font-bold line-through text-gray-400">
            RS. {originalPrice}
          </span>
        </div>
      </div>
      <div className="flex justify-start gap-2 mb-4 ml-2 ">
        <Link href="#">
          <button className="bg-gray-700 text-white p-2 px-16 rounded-md hover:bg-gray-600">
            Buy Now
          </button>
        </Link>
        <button className="bg-gray-200 text-gray-600 p-2 rounded-md hover:bg-gray-300">
          <span className="flex items-center">
            <AiOutlineShoppingCart className="mr-1" />
           
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
