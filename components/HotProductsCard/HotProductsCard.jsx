import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';


export default function HotProductsCard({ rating, image, title, price, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full md:w-80 h-24 bg-white shadow-md rounded-xl cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="relative w-24 h-24 flex-shrink-0">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-l-xl"
        />
      </div>
      <div className="flex-1 p-3 text-left">
        <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-1">{title}</h3>
        <div className="flex items-center mb-1">
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
            <AiFillStar className="w-3 h-3 text-yellow-500 mr-1" />
            <span className="text-xs font-semibold text-yellow-700">{rating}/5</span>
          </div>
        </div>
        <p className="text-lg font-bold text-blue-600">RS. {price.toLocaleString()}</p>
      </div>
    </button>
  );
}

