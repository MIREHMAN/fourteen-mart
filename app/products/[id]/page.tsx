"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ShoppingCart, Heart } from "lucide-react";
import ProductImages from "@/app/components/ProductImages/ProductImages";

const product = {
  id: "1",
  title: "Wireless Bluetooth Earbuds",
  description:
    "High-quality wireless earbuds with noise cancellation and long battery life.",
  price: 999,
  rating: 4.5,
  reviews: 120,
  media: {
    items: [
      {
        url: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
    ],
  },
  originalPrice: 1299,
  features: [
    "True wireless stereo",
    "Active noise cancellation",
    "24-hour battery life",
    "Water-resistant (IPX4)",
    "Touch controls",
  ],
  storeInfo: {
    name: "TechGadgets",
    rating: 4.8,
    products: 500,
  },
};

export default function ProductDetailPage({
  params,
}: {
  params: { id: string },
}) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 md:h-full">
          <ProductImages/>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.reviews} reviews)
            </span>
          </div>
          <div className="flex items-baseline mb-4">
            <span className="text-3xl font-bold text-primary mr-2">
              RS. {product.price.toLocaleString()}
            </span>
            <span className="text-lg font-medium line-through text-muted-foreground">
              RS. {product.originalPrice.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </Button>
            <span>{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </div>
          <div className="flex space-x-4 mb-6">
            <Button size="lg" className="flex-grow">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="mr-2 h-5 w-5" /> Add to Wishlist
            </Button>
          </div>

          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="store">About Store</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <h2 className="text-xl font-bold mb-2">Product Description</h2>
              <p className="mb-4">{product.description}</p>
              <h3 className="text-lg font-bold mb-2">Features</h3>
              <ul className="list-disc list-inside">
                {product.features.map((feature, index) => (
                  <li key={index} className="mb-1">
                    {feature}
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="reviews">
              <h2 className="text-xl font-bold mb-2">Customer Reviews</h2>
              <p>This section would contain customer reviews and ratings.</p>
            </TabsContent>
            <TabsContent value="store">
              <h2 className="text-xl font-bold mb-2">
                About {product.storeInfo.name}
              </h2>
              <p className="mb-2">Store Rating: {product.storeInfo.rating}/5</p>
              <p>Total Products: {product.storeInfo.products}</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
