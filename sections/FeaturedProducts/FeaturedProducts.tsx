import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products =  [
    {
    id: 1,
    title: "Premium Wireless Headphones",
    description: "Immerse yourself in crystal-clear sound with our premium wireless headphones.",
    price: 15999,
    rating: 4.5,
    originalPrice: 17999,
    media: {
      items: [
        {
          url: "/headphone.png",
        },
        {
          url: "/watch1.jpg",
        },
        {
          url: "/LED.png",
        },
        {
          url: "/camera.png",
        },
      ],
    },
    options: [
      {
        name: "Color",
        choices: ["Red", "Blue", "Green"],
      },
      {
        name: "Size",
        choices: ["Small", "Medium", "Large"],
      },
    ],
  },
  {
    id: 2,
    title: "Smart Fitness Tracker Watch",
    description: "Track your fitness goals with our sleek and feature-packed smartwatch.",
    price: 8999,
    rating: 4.2,
    originalPrice: 9999,
    media: {
      items: [
        {
          url: "/watch1.jpg",
        },
        {
          url: "/headphone.png",
        },
        {
          url: "/LED.png",
        },
        {
          url: "/camera.png",
        },
      ],
    },
    options: [
      {
        name: "Color",
        choices: ["Red", "Blue", "Green"],
      },
      {
        name: "Size",
        choices: ["Small", "Medium", "Large"],
      },
    ],
  },
  {
    id: 3,
    title: "Ultra HD 4K Smart TV - 55 inch",
    description: "Experience stunning visuals and smart features with our 55-inch 4K smart TV.",
    price: 54999,
    rating: 4.8,
    originalPrice: 59999,
    media: {
      items: [
        {
          url: "/LED.png",
        },
        {
          url: "/headphone.png",
        },
        {
          url: "/watch1.jpg",
        },
        {
          url: "/camera.png",
        },
      ],
    },
    options: [
      {
        name: "Color",
        choices: ["Red", "Blue", "Green"],
      },
      {
        name: "Size",
        choices: ["Small", "Medium", "Large"],
      },
    ],
  },
  {
    id: 4,
    title: "Ultra HD 4K 28 Zoom Camera",
    description: "Capture life's moments in stunning detail with our 4K 28x zoom camera.",
    price: 84999,
    rating: 4.8,
    originalPrice: 99999,
    media: {
      items: [
        {
          url: "/camera.png",
        },
        {
          url: "/headphone.png",
        },
        {
          url: "/watch1.jpg",
        },
        {
          url: "/LED.png",
        },
      ],
    },
    options: [
      {
        name: "Color",
        choices: ["Red", "Blue", "Green"],
      },
      {
        name: "Size",
        choices: ["Small", "Medium", "Large"],
      },
    ],
  },
]

export function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Featured Products</h2>
        <Button variant="link" className="flex items-center">
          View All <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4  gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
