import ProductCard from "../../components/ProductCard/ProductCard";

const Products = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 15999,
    rating: 4.5,
    originalPrice: 17999,
    media: {
      items: [
        {
          url: "/headphone.png",
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
    price: 8999,
    rating: 4.2,
    originalPrice: 9999,
    media: {
      items: [
        {
          url: "/watch1.jpg",
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
    price: 54999,
    rating: 4.8,
    originalPrice: 59999,
    media: {
      items: [
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
  {
    id: 4,
    title: "Ultra HD 4K 28 Zoom Camera",
    price: 84999,
    rating: 4.8,
    originalPrice: 99999,
    media: {
      items: [
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
];

const ProductsList = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {Products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
