import Link from "next/link";
import Image from "next/image";

const OfferCard = ({ title, offer, image, ctaText, ctaLink }) => {
  return (
    <div className="bg-red-400 shadow-md rounded-lg w-full h-40 cursor-pointer flex">
      <div className="w-2/3 p-4">
        <h3 className="text-lg text-white font-bold mb-2">{title}</h3>
        <p className="text-sm text-white mb-4">{offer}</p>
        <Link href={ctaLink}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            {ctaText}
          </button>
        </Link>
      </div>
      <div className="w-1/3">
        <Image
          src={image}
          alt={title}
          width={150}
          height={150}
          className=" object-cover rounded-r-lg"
        />
      </div>
    </div>
  );
};

export default OfferCard;