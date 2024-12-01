import Image from "next/image";

const Categories = [
  {
    id: 1,
    title: "Category 1",
    image: "/watch1.jpg",
  },
  {
    id: 2,
    title: "Category 2",
    image: "/watch1.jpg",
  },
  {
    id: 3,
    title: "Category 3",
    image: "/watch1.jpg",
  },
  {
    id: 4,
    title: "Category 4",
    image: "/watch1.jpg",
  },
];

const CategoryList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-8">
      {Categories.map((category) => (
        <div
          key={category.id}
          className="w-64 h-64 flex flex-col justify-center items-center shadow-md rounded-lg cursor-pointer"
        >
          <Image
            src={category.image}
            width={100}
            height={100}
            alt={category.title}
            className="w-full h-48 object-cover"
          />
          <h2 className="text-lg font-bold mt-4">{category.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
