import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Discover the latest gadgets and tech",
    link: "/category/electronics",
  },
  {
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Stay trendy with our fashion collection",
    link: "/category/fashion",
  },
  {
    name: "Home & Living",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Transform your living space",
    link: "/category/home-living",
  },
  {
    name: "Sports & Outdoors",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Transform your sports space",
    link: "/category/home-living",
  },
];

export function FeaturedCategories() {
  return (
    <section className="bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Button asChild>
                  <Link href={category.link}>Explore {category.name}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
