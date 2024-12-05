"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const OfferCard = ({ title, offer, image, ctaText, ctaLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-gradient-to-r from-emerald-500 to-emerald-400 shadow-lg rounded-lg w-[960px] h-48 overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`w-full h-full bg-gradient-to-r from-emerald-600 to-emerald-500 opacity-0 transition duration-500 ease-in-out ${
            isHovered ? "opacity-100" : ""
          }`}
        ></div>
      </div>
      <div className="relative z-10 flex items-center p-6">
        <div className="w-2/3">
          <h3 className="text-2xl text-white font-bold mb-2">{title}</h3>
          <p className="text-lg text-white mb-4">{offer}</p>
          <Link href={ctaLink}>
            <button className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-full shadow-md hover:bg-emerald-50 transition duration-300">
              {ctaText}
            </button>
          </Link>
        </div>
        <div className="w-1/3 flex justify-end">
          <div className="relative w-40 h-40 ">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="contain"
              className="rounded-md drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;