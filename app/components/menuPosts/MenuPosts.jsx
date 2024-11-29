import MenuPostCard from "../menuPostCard/menuPostCard";

const MenuPost = async () => {
  const data = [
    {
      id: 1,
      title: 'Product 1',
      price: 1000,
      rating: 4.5,
      image: '/product1.jpg',
      category: 'Electronics',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 500,
      rating: 4.2,
      image: '/product2.jpg',
      category: 'Fashion',
    },
    {
      id: 3,
      title: 'Product 3',
      price: 2000,
      rating: 4.8,
      image: '/product3.jpg',
      category: 'Home & Kitchen',
    },
    {
      id: 4,
      title: 'Product 4',
      price: 1500,
      rating: 4.1,
      image: '/product4.jpg',
      category: 'Beauty & Personal Care',
    },
  ];
  

  return (
    <div>
      <MenuPostCard cardData={data} />
    </div>
  );
};

export default MenuPost;