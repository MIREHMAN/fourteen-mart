import MenuPostCard from "../menuPostCard/menuPostCard";

const MenuPost = async () => {
  const data = [
    {
      id: 100,
      title: 'Product 1',
      price: 1000,
      rating: 4.5,
      image: '/watch1.jpg',
      category: 'Electronics',
    },
    {
      id: 200,
      title: 'Product 2',
      price: 500,
      rating: 4.2,
      image: '/watch1.jpg',
      category: 'Fashion',
    },
    {
      id: 300,
      title: 'Product 3',
      price: 2000,
      rating: 4.8,
      image: '/watch1.jpg',
      category: 'Home & Kitchen',
    },
    {
      id: 400,
      title: 'Product 4',
      price: 1500,
      rating: 4.1,
      image: '/watch1.jpg',
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