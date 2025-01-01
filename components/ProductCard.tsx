"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  rating: number;
  media: { items: { url: string }[] };
  originalPrice: number;
  onAddToCart: () => void;
  onBuyNow: () => void;
}

export function ProductCard({
  id,
  title,
  price,
  rating,
  media,
  originalPrice,
  onAddToCart,
  onBuyNow,
}: ProductCardProps) {
  return (
    <div className="bg-card text-card-foreground shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 flex flex-col h-full">
      <div className="relative">
        <Image
          src={media.items[0].url}
          alt={title}
          width={256}
          height={160}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className="text-xs font-semibold text-white rounded-full bg-red-500 px-2 py-1 shadow-md">
            -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background rounded-full shadow-md"
        >
          <Heart className="h-5 w-5 text-muted-foreground hover:text-red-500" />
        </Button>
      </div>
      <div className="p-4 flex-grow">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-800 rounded-full">
            New
          </span>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="text-xs font-semibold text-yellow-700">
              {rating}
            </span>
          </div>
        </div>
        <Link href={`/products/${id}`}>
          <h3 className="text-sm sm:text-base font-bold mb-2 hover:text-primary transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
        </Link>
        <div className="flex items-baseline mb-4">
          <span className="text-lg sm:text-xl font-bold text-primary mr-2">
            RS. {price.toLocaleString()}
          </span>
          <span className="text-xs sm:text-sm font-medium line-through text-muted-foreground">
            RS. {originalPrice.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="px-4 pb-4 mt-auto">
        <div className="flex justify-between gap-2">
          <Button onClick={onBuyNow} className="flex-grow text-xs sm:text-sm">
            Buy Now
          </Button>
          <Button variant="outline" size="icon" onClick={onAddToCart}>
            <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
