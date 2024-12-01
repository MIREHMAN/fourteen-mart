import ProductCard from '../components/ProductCard/ProductCard';

const Products = [
  {
    id: 1,
    title: 'Product 1',
    price: 100,
    rating: 4.5,
    image: '/watch1.jpg',
  },
  {
    id: 2,
    title: 'Product 2',
    price: 200,
    rating: 4.2,
    image: '/watch1.jpg',
  },
  {
    id: 3,
    title: 'Product 3',
    price: 300,
    rating: 4.8,
    image: '/watch1.jpg',
  },
  {
    id: 4,
    title: 'Product 4',
    price: 400,
    rating: 4.1,
    image: '/watch1.jpg',
  },
];

const TopProducts = () => {
  return (
    <div className='mt-12'>
      <h2 className="text-3xl font-bold mb-4 text-center">Top Products</h2>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {Products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TopProducts;