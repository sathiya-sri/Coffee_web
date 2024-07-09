import React from "react";
import GalleryImg from "../data/GalleryImg";
import "../animations/Gallery.css";
const Gallery = () => {
  return (
    <section className="md:px-40 py-24 px-10">
      <h1 className="text-center text-3xl  tracking-wider mb-10">
        Our Photo Gallery
        <hr className="w-20 mx-auto" />
      </h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {GalleryImg.map((list) => {
          return (
            <div key={list.id} className="gallery relative">
              <img
                src={list.imgurl}
                alt="gallery"
                className="w-96 h-80 object-cover rounded-xl image overflow-hidden"
              />
              <div className="icons">
                <span className="cursor-pointer border-[1px] border-[hsl(27,34%,59%)] w-11 h-11 rounded-full p-2 hover:bg-[hsl(27,34%,59%)] transition-all duration-500 ">
                  {list.cart}
                </span>
                <span className="cursor-pointer border-[1px] border-[hsl(27,34%,59%)] w-11 h-11 rounded-full p-2 hover:bg-[hsl(27,34%,59%)] transition-all duration-500">
                  {list.heart}
                </span>
                <span className="cursor-pointer border-[1px] border-[hsl(27,34%,59%)] w-11 h-11 rounded-full p-2 hover:bg-[hsl(27,34%,59%)] transition-all duration-500">
                  {list.share}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
