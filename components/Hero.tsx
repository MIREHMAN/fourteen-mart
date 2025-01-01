"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselItem {
  id: number;
  url: string;
  alt: string;
  title: string;
  description: string;
  ctaText: string;
}

interface HeroProps {
  items: CarouselItem[];
}

export function Hero({ items }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [items]);

  const handlePrevClick = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {items.map((item, index) => (
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
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-8">
            <h2 className="text-4xl font-bold mb-4 text-center">
              {item.title}
            </h2>
            <p className="text-xl mb-8 text-center">{item.description}</p>
            <Button variant="secondary" size="lg">
              {item.ctaText}
            </Button>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 rounded-full"
        onClick={handlePrevClick}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 rounded-full"
        onClick={handleNextClick}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-300"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
