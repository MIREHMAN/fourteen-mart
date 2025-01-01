import { Categories } from '@/components/Categories';
import { FlashSaleTimer } from '@/components/FlashSaleTimer';
import { Hero } from '@/sections/HeroSection/Hero'
import { ProductCard } from '@/components/ProductCard'
import { SpecialOfferCard } from '@/components/SpecialOfferCard';
import { SpecialOffers } from '@/components/SpecialOffers';
import { Button } from '@/components/ui/button';
import { Clock, Gift, TrendingUp } from 'lucide-react';
import { FeaturedProducts } from '@/sections/FeaturedProducts/FeaturedProducts';
import { HotSalesCarousel } from '@/sections/HotProductCarousel/HotSalesCarousel';
import { FeaturedCategories } from '@/sections/FeaturedCategories/FeaturedCategories';
import { TopProducts } from '@/sections/TopProducts/TopProducts';

  

  
  const offers = [
    {
      id: 1,
      title: "Offer 1",
      offer: "Get 10% off on your first purchase",
      image: "/camera.png",
      ctaText: "Shop Now",
      ctaLink: "/products",
    },
    {
      id: 2,
      title: "Offer 2",
      offer: "Get 15% off on your Cameras",
      image: "/camera.png",
      ctaText: "Shop Now",
      ctaLink: "/products",
    },
    
     
  ];



export const products = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    description:
      "Immerse yourself in crystal-clear sound with our premium wireless headphones.",
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
    description:
      "Track your fitness goals with our sleek and feature-packed smartwatch.",
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
    description:
      "Experience stunning visuals and smart features with our 55-inch 4K smart TV.",
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
    description:
      "Capture life's moments in stunning detail with our 4K 28x zoom camera.",
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
];



const topProducts = [
  { id: "5", name: "Smartphone X", rating: 4.9, sales: 1500 },
  { id: "6", name: "Laptop Pro", rating: 4.7, sales: 1200 },
  { id: "7", name: "Wireless Mouse", rating: 4.5, sales: 2000 },
  { id: "8", name: "Smart Watch", rating: 4.6, sales: 1800 },
];

const specialOffers = [
  {
    id: "1",
    title: "Summer Sale",
    discount: "30% OFF",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "New User Bonus",
    discount: "Extra 10% OFF",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    title: "Clearance",
    discount: "Up to 50% OFF",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Products Carousel Section */}
      <HotSalesCarousel />

      {/* FeaturedProducts Section */}
      <FeaturedProducts />

      {/* Categories Section */}
      <Categories />

      {/* Special Offers Section */}
      <SpecialOffers />

      {/* Flash Sales Section */}
      <FlashSaleTimer />
      <FeaturedProducts />
      <FeaturedCategories />
      
    </div>
  );
}

