import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar, AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';

const ProductCard = ({ title, price, rating, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg w-64 h-80 cursor-pointer">
      <Link href="#">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-green-600 mb-4 flex items-center">
          <AiFillStar className="mr-1 text-yellow-400" />
          {rating}/5
        </p>
        <p className="text-lg font-bold mb-4">RS. {price}</p>
        <div className="flex justify-between">
        <div className="flex gap-1">
  <Link href="#">
    <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
      Buy Now
    </button>
  </Link>
  <button className="bg-orange-600 text-white p-2 rounded-lg hover:bg-orange-700">
    <span className="flex items-center">
      <AiOutlineShoppingCart className="mr-1" />
      Add to Cart
    </span>
  </button>
  <button className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700">
    <span className="flex items-center">
      <AiOutlineHeart className="mr-1" />
      Wishlist
    </span>
  </button>
</div>
             
          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;