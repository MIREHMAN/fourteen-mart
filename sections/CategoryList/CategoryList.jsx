import Image from "next/image";

const Categories = [
  {
    id: 1,
    title: "Category 1",
    image: "/watch1.jpg",
    description: "Explore our collection of premium watches"
  },
  {
    id: 2, 
    title: "Category 2",
    image: "/watch1.jpg",
    description: "Discover elegant timepieces"
  },
  {
    id: 3,
    title: "Category 3", 
    image: "/watch1.jpg",
    description: "Browse luxury watch brands"
  },
  {
    id: 4,
    title: "Category 4",
    image: "/watch1.jpg",
    description: "Find your perfect watch"
  }
];

const CategoryList = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Our Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <div className="relative h-60">
              <Image
                src={category.image}
                fill
                style={{objectFit: "cover"}}
                alt={category.title}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
              <p className="text-gray-600 text-sm">{category.description}</p>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                View Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
