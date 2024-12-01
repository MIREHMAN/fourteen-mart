import Carousel from "./components/Carousel/Carousel";
import HotProductsCard from "./components/HotProductsCard/HotProductsCard";
import OfferCard from "./components/OfferCard/OfferCard";
import TopProducts from "./sections/ProductsList"

function Home() {
  const images = [
    {
      id: 1,
      url: "/cover.jpg",
      alt: "Banner 1",
    },
    {
      id: 2,
      url: "/cover1.jpg",
      alt: "Banner 2",
    },
    {
      id: 3,
      url: "/cover2.jpg",
      alt: "Banner 3",
    },
  ];

  const hotProducts = [
    {
      id: 1,
      rating: 4.5,
      image: "/watch1.jpg",
      title: "Product 1",
      price: 1000,
    },
    {
      id: 2,
      rating: 4.2,
      image: "/camera.png",
      title: "Product 2",
      price: 500,
    },
    {
      id: 3,
      rating: 4.8,
      image: "/watch1.jpg",
      title: "Product 3",
      price: 2000,
    },
    {
      id: 4,
      rating: 4.3,
      image: "/camera.png",
      title: "Product 4",
      price: 1800,
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
    
     
  ];

 
  
  return (
    <div className="w-full mx-auto">
      <Carousel items={images} />
      <h2 className="text-3xl font-bold mb-4 text-center">Hot Products</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {hotProducts.map((product) => (
          <HotProductsCard
            key={product.id}
            rating={product.rating}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
  
      <TopProducts/>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            title={offer.title}
            offer={offer.offer}
            image={offer.image}
            ctaText={offer.ctaText}
            ctaLink={offer.ctaLink}
          />
        ))}
      </div>

      <TopProducts/>

    
    </div>
  );
}

export default Home;