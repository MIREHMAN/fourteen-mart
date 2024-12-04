import ProductCard from '../../components/ProductCard/ProductCard';

const Products = [
  {
    id:1,
    title: "Premium Wireless Headphones",
    price: 15999,
    rating: 4.5,
    image: "/headphone.png",
    originalPrice: 17999
  },
  {
    id:2,
    title: "Smart Fitness Tracker Watch",
    price: 8999,
    rating: 4.2,
    image: "/watch1.jpg",
    originalPrice: 9999
  },
  {
    id:3,
    title: "Ultra HD 4K Smart TV - 55 inch",
    price: 54999,
    rating: 4.8,
    image: "/LED.png",
    originalPrice: 59999
  },
  {
    id:4,
    title: "Ultra HD 4K 28 Zoom Camera",
    price: 84999,
    rating: 4.8,
    image: "/camera.png",
    originalPrice: 99999
  }
]

const ProductsList = () => {
  return (
    <div className='mt-12'>
      
      <div className="flex flex-wrap justify-center gap-8 mt-8">
      {Products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;