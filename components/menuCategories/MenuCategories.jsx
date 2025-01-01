import Link from 'next/link';

const categories = [
  { id: 1, title: 'Electronics', slug: 'electronics' },
  { id: 2, title: 'Fashion', slug: 'fashion' },
  { id: 3, title: 'Home & Kitchen', slug: 'home-kitchen' },
  { id: 4, title: 'Beauty & Personal Care', slug: 'beauty-personal-care' },
  { id: 5, title: 'Sports & Fitness', slug: 'sports-fitness' },
];

const MenuCategories = () => {
  return (
    <div className="mt-8 mb-12 flex flex-wrap gap-5">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/products?cat=${category.id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          {category.title}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;