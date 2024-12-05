"use client"

import Image from "next/image";
import React from 'react';


const ProductImages = ({media}) => {
  const [index, setIndex] = React.useState(0);

  return (
    <div className="flex flex-col gap-8">
      <div className="h-[500px] relative  overflow-hidden">
        <Image
          src={media[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-contain "
        />
      </div>
      <div className="flex justify-between gap-4 rounded-md shadow-sm">
        {media.map((image, i) => (
          <div
            className={`w-1/4 h-32 relative gap-4 cursor-pointer rounded-md overflow-hidden ${
              i === index ? 'border-2 border-blue-500' : ''
            }`}
            key={image.index}
            onClick={() => setIndex(i)}
          >
            <Image
              src={image.url}
              alt=""
              fill
              sizes="30vw"
              className="object-contain rounded-md transition duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;