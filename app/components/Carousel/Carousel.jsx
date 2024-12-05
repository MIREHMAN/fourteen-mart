"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    }, 5000);
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
    <div className="relative w-full h-96 overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ height: "400px" }}
        >
          <div className="relative h-full">
            <Image
              src={item.url}
              alt={item.alt}
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-8">
              <h2 className="text-4xl font-bold mb-4 text-center">{item.title}</h2>
              <p className="text-xl mb-8">{item.description}</p>
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
                {item.ctaText}
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
        <button
          className="bg-white text-gray-800 rounded-full p-2 focus:outline-none"
          onClick={handlePrevClick}
        >
          <FaChevronLeft size={24} />
        </button>
      </div>

      <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
        <button
          className="bg-white text-gray-800 rounded-full p-2 focus:outline-none"
          onClick={handleNextClick}
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {carouselItems.map((item, index) => (
          <button
            key={item.id}
            className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
              index === activeIndex ? "bg-white" : "bg-gray-300"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
