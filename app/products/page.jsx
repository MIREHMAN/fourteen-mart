"use client";

import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";


const products = [
  {
    id: "1",
    title: "Wireless Bluetooth Earbuds",
    price: 999,
    rating: 4.5,
    media: { items: [{ url: "/placeholder.svg?height=160&width=256" }] },
    originalPrice: 1299,
  },
  {
    id: "2",
    title: "Smart Fitness Tracker",
    price: 1499,
    rating: 4.2,
    media: { items: [{ url: "/placeholder.svg?height=160&width=256" }] },
    originalPrice: 1799,
  },
  {
    id: "3",
    title: "Portable Power Bank",
    price: 799,
    rating: 4.7,
    media: { items: [{ url: "/placeholder.svg?height=160&width=256" }] },
    originalPrice: 999,
  },
  {
    id: "4",
    title: "Noise-Cancelling Headphones",
    price: 2499,
    rating: 4.8,
    media: { items: [{ url: "/placeholder.svg?height=160&width=256" }] },
    originalPrice: 2999,
  },
  // Add more products here
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      <div className="flex flex-col md:flex-row justify-between mb-8">
       
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={() => console.log("Added to cart:", product.id)}
            onBuyNow={() => console.log("Buy now:", product.id)}
          />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="outline" className="mr-2">
          Previous
        </Button>
        <Button variant="outline" className="mr-2">
          1
        </Button>
        <Button variant="outline" className="mr-2">
          2
        </Button>
        <Button variant="outline" className="mr-2">
          3
        </Button>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  );
}
