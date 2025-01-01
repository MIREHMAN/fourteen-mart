import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FlashSaleProductCardProps {
  id: string|number;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
  onAddToCart: () => void;
}

export function FlashSaleProductCard({
  id,
  title,
  price,
  originalPrice,
  rating,
  image,
  onAddToCart,
}: FlashSaleProductCardProps) {
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="bg-card text-card-foreground shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          layout="responsive"
          className="object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className="text-xs font-semibold text-white rounded-full bg-red-500 px-2 py-1 shadow-md">
            -{discount}%
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{title}</h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm ml-1">{rating}</span>
          </div>
        </div>
        <div className="flex items-baseline mb-4">
          <span className="text-2xl font-bold text-primary mr-2">
            RS. {price.toLocaleString()}
          </span>
          <span className="text-sm font-medium line-through text-muted-foreground">
            RS. {originalPrice.toLocaleString()}
          </span>
        </div>
        <Button onClick={onAddToCart} className="w-full">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
