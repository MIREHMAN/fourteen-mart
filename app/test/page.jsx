import React from 'react'
import React from 'react';
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Comments from "../../../components/comments/Comments";

const test = () => {
  return (
    <div className="max-w-7xl mx-auto md:p-8 flex md:flex-row">
      <div className="mt-12 w-full flex-2 justify-start md:basis-[80%] basis-full">
        <h1 className="text-6xl md:text-5xl lg:text-6xl mb-12">
          Product Title
        </h1>
        <div className="flex items-center gap-5 mb-12">
          <div className="w-12 h-12 relative">
            <Image
              src="https://via.placeholder.com/100"
              alt=""
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 text-gray-400">
            <span className="text-lg font-medium">Brand Name</span>
            <span className="text-base font-light">
              Posted on: 12.12.2022
            </span>
          </div>
        </div>
        <div className="hidden md:block h-80 relative mb-12">
          <Image src="https://via.placeholder.com/500" alt="" fill className="object-cover" />
        </div>
        <div className="description text-lg font-light mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
        </div>
        <Comments />
      </div>
      <div className="flex-1 basis-1/4 md:block hidden">
        <Menu />
      </div>
    </div>
  );
};



export default test