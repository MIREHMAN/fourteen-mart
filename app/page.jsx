import { Categories } from '@/components/Categories';
import { FlashSaleTimer } from '@/components/FlashSaleTimer';
import { Hero } from '@/components/Hero'
import { ProductCard } from '@/components/ProductCard'
import { SpecialOfferCard } from '@/components/SpecialOfferCard';
import { SpecialOffers } from '@/components/SpecialOffers';
import { Button } from '@/components/ui/button';
import { Clock, Gift, TrendingUp } from 'lucide-react';

  const images = [
    {
      id: 1,
      url: "/cover.jpg",
      alt: "Banner 1",
      title:"Explore New Trends",
      description:'This is demo description',
      ctaText:"Shop Now"
    },
    {
      id: 2,
      url: "/cover1.jpg",
      alt: "Banner 2",
      title:"Explore New Jackets",
      description:'This is demo description',
      ctaText:"Shop Now"
    },
    {
      id: 3,
      url: "/cover2.jpg",
      alt: "Banner 3",
      title:"Explore New Trendy Watches",
      description:'This is demo description',
      ctaText:"Shop Now"
    },
  ];

  
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


const heroItems = [
  {
    id: 1,
    url: '/placeholder.svg?height=400&width=800',
    alt: 'Hero Image 1',
    title: 'Welcome to FourteenMart',
    description: 'Discover amazing products at unbeatable prices',
    ctaText: 'Shop Now',
  },
  // Add more hero items as needed
]

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

const categories = [
  { name: "Electronics", icon: "🖥️" },
  { name: "Fashion", icon: "👕" },
  { name: "Home & Living", icon: "🏠" },
  { name: "Beauty", icon: "💄" },
  { name: "Sports", icon: "⚽" },
  { name: "Books", icon: "📚" },
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
      <Hero items={images} />
      {/* Flash Sale Timer */}
      <section className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <FlashSaleTimer
            endTime={new Date().getTime() + 24 * 60 * 60 * 1000}
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Categories Section */}
        <Categories />

      {/* Special Offers Section */}
      <SpecialOffers/>
      

      {/* Special Offers Section */}
      <section className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Special Offers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg shadow-md flex items-center">
              <TrendingUp className="h-10 w-10 text-primary mr-4" />
              <div>
                <h3 className="font-bold mb-1">Trending Deals</h3>
                <p className="text-sm text-muted-foreground">
                  Get up to 50% off on trending items
                </p>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md flex items-center">
              <Gift className="h-10 w-10 text-primary mr-4" />
              <div>
                <h3 className="font-bold mb-1">Gift Cards</h3>
                <p className="text-sm text-muted-foreground">
                  Perfect for any occasion
                </p>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md flex items-center">
              <Clock className="h-10 w-10 text-primary mr-4" />
              <div>
                <h3 className="font-bold mb-1">Flash Sales</h3>
                <p className="text-sm text-muted-foreground">
                  Limited-time offers every day
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-muted p-8 rounded-lg text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-6">
            Stay updated with our latest offers and products
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-md border border-input bg-background"
              required
            />
          </form>
        </div>
      </section>
    </div>
  );
}

