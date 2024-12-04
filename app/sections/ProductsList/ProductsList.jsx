import ProductCard from '../../components/ProductCard/ProductCard';

const Products = [
  {
    title: "Premium Wireless Headphones",
    price: 15999,
    rating: 4.5,
    image: "/watch1.jpg",
    originalPrice: 17999
  },
  {
    title: "Smart Fitness Tracker Watch",
    price: 8999,
    rating: 4.2,
    image: "/watch1.jpg",
    originalPrice: 9999
  },
  {
    title: "Ultra HD 4K Smart TV - 55 inch",
    price: 54999,
    rating: 4.8,
    image: "/placeholder.svg?height=160&width=256",
    originalPrice: 59999
  },
  {
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