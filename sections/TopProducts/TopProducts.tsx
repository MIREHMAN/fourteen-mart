"use client";

import { HotProductsCard } from "@/components/HotProductsCard";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  originalPrice: number;
  media: {
    items: {
      url: string;
    }[];
  };
}

const topProducts: Product[] = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    description:
      "Immerse yourself in crystal-clear sound with our premium wireless headphones.",
    price: 15999,
    rating: 4.5,
    originalPrice: 17999,
    media: { items: [{ url: "/headphone.png" }] },
  },
  {
    id: 2,
    title: "Smart Fitness Tracker Watch",
    description:
      "Track your fitness goals with our sleek and feature-packed smartwatch.",
    price: 8999,
    rating: 4.2,
    originalPrice: 9999,
    media: { items: [{ url: "/watch1.jpg" }] },
  },
  {
    id: 3,
    title: "Ultra HD 4K Smart TV - 55 inch",
    description:
      "Experience stunning visuals and smart features with our 55-inch 4K smart TV.",
    price: 54999,
    rating: 4.8,
    originalPrice: 59999,
    media: { items: [{ url: "/LED.png" }] },
  },
  {
    id: 4,
    title: "Ultra HD 4K 28 Zoom Camera",
    description:
      "Capture life's moments in stunning detail with our 4K 28x zoom camera.",
    price: 84999,
    rating: 4.8,
    originalPrice: 99999,
    media: { items: [{ url: "/camera.png" }] },
  },
];

export function TopProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Top Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {topProducts.map((product) => (
          <div
            key={product.id}
            className="py-2"
          >
            <HotProductsCard
              rating={product.rating}
              image={product.media.items[0].url}
              title={product.title}
              price={product.price}
              onClick={() => {}}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
