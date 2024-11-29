import Carousel from "./components/Carousel/Carousel";

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
  return (
    <div className="w-full mx-auto">
      <Carousel items={images} />
      <h2 className="text-3xl font-bold mb-4 text-center">Welcome to Fourteen Mart</h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Your one-stop shop for all your needs.
      </p>
      <div className="flex flex-wrap justify-center mb-8">
        <div className="w-full md:w-1/3 xl:w-1/4 p-4">
          <h3 className="text-lg font-bold mb-2">Shop by Category</h3>
          <ul className="text-sm">
            <li className="mb-2">Electronics</li>
            <li className="mb-2">Fashion</li>
            <li className="mb-2">Home & Kitchen</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 xl:w-1/4 p-4">
          <h3 className="text-lg font-bold mb-2">Popular Products</h3>
          <ul className="text-sm">
            <li className="mb-2">Product 1</li>
            <li className="mb-2">Product 2</li>
            <li className="mb-2">Product 3</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 xl:w-1/4 p-4">
          <h3 className="text-lg font-bold mb-2">Why Choose Us</h3>
          <ul className="text-sm">
            <li className="mb-2">Free Shipping</li>
            <li className="mb-2">Best Prices</li>
            <li className="mb-2">Excellent Customer Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;