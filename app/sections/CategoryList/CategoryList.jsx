import React from 'react';
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  const categories = [
    {
      id: 1,
      name: "Category 1",
      slug: "category-1",
      media: {
        mainMedia: {
          image: {
            url: "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
          },
        },
      },
    },
    {
      id: 2,
      name: "Category 2",
      slug: "category-2",
      media: {
        mainMedia: {
          image: {
            url: "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
          },
        },
      },
    },
  ];

  return (
    <div className="className=flex flex-wrap justify-center gap-8 mt-8">
      <div className="flex gap-4 md:gap-8">
        {categories.map((category) => (
          <Link
            href={`/list?cat=${category.slug}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
            key={category.id}
          >
            <div className="relative bg-slate-100 w-full h-48">
              <Image
                src={category.media.mainMedia.image.url}
                alt=""
                fill
                sizes="10vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">
              {category.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;