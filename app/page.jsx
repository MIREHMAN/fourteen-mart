import { Categories } from '@/components/Categories';
import { Hero } from '@/sections/HeroSection/Hero'
import { SpecialOffers } from '@/components/SpecialOffers';
import { FeaturedProducts } from '@/sections/FeaturedProducts/FeaturedProducts';
import { HotSalesCarousel } from '@/sections/HotProductCarousel/HotSalesCarousel';
import { FeaturedCategories } from '@/sections/FeaturedCategories/FeaturedCategories';
import { FlashSale } from '@/sections/FlashSales/FlashSale';

  

  
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
      <FlashSale />

      {/* FeaturedCategories Section */}
      <FeaturedCategories />
    </div>
  );
}

