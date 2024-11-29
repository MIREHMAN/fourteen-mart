"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

function Carousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    setCarouselItems(items);
  }, [items]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => {
        return prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1;
      });
    }, 3000);
    return () => clearInterval(intervalId);
  }, [carouselItems]);

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => {
      return prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => {
      return prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1;
    });
  };

  return (
    <div className="relative w-full h-96 overflow-hidden mt-0">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={item.url}
            alt={item.alt}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      ))}
     
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-center mb-2">
        {carouselItems.map((item, index) => (
          <button
            key={item.id}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === activeIndex ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
