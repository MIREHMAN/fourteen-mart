import React from "react";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className="hidden md:flex flex-col mt-6  xl:flex-2">
      <h2 className="text-gray-600 text-base font-normal mt-8 mb-2">
        Discover by Features
      </h2>
      <h1 className="text-2xl font-bold mb-8">Categories</h1>
      <MenuCategories />

      <h2 className="text-gray-600 text-base font-normal mb-2">What&apos;s Hot</h2>
      <h1 className="text-2xl font-bold mb-8">Most Popular</h1>
      
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;