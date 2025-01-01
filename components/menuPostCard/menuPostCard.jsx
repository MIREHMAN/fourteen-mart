import Link from 'next/link';
import Image from 'next/image';

const MenuPostCard = ({ cardData }) => {
  return (
    <div className="mt-8 mb-12 flex flex-col gap-8">
      {cardData.slice(0, 4).map((post) => (
        <Link
          href={`/products/${post.id}`}
          className="flex flex-col gap-4 bg-white p-4 rounded-md shadow-md"
          key={post.id}
        >
          <div className="flex items-center gap-2">
            <span
              className={`text-sm px-2 py-1 rounded-md text-md text-white font-bold bg-blue-600`}
            >
              {post.category}
            </span>
          </div>
          <div className="flex gap-4">
            <div className="w-1/3 relative">
              <Image
                src={post.image}
                alt={post.title}
                width={250}
                height={250}
                className="object-cover object-center rounded-sm"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <h3 className="text-lg font-medium text-gray-600">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400">RS. {post.price}</p>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l-.02.022-.022-.022a1 1 0 00-.284-.814l-2.4-2.835a1.003 1.003 0 00-.588-1.809H6.65a1.003 1.003 0 00-.95-.69l-1.07-3.292z" />
                </svg>
                <p className="text-sm text-gray-400">{post.rating}/5</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPostCard;