import Carousel from "./components/Carousel/Carousel";
import OfferCard from "./components/OfferCard/OfferCard";
import ProductsList from "./sections/ProductsList/ProductsList";
import CategoryList from "./sections/CategoryList/CategoryList";
import HotProductList from "./sections/HotProductList/HotProductList";

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

 
  
  return (
    <div className="w-full mx-auto">
      <Carousel items={images} />
     <HotProductList/>
      <h2 className="text-3xl font-bold mb-4 text-center mt-8">New Arrival</h2>
      <ProductsList/>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {offers.slice(0,1).map((offer) => (
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
      <h2 className="text-3xl font-bold mb-4 text-center mt-8">Flash Sales</h2>
      <ProductsList/>

   
        <CategoryList/>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
        {offers.slice(1,2).map((offer) => (
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

      <h2 className="text-3xl font-bold mb-4 text-center mt-8">For You</h2>
      <ProductsList/>
    
    </div>
  );
}

export default Home;