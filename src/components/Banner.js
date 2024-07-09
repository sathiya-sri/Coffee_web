import React from "react";
import Button from "./Button";
import "../animations/Banner.css";
const Banner = () => {
  return (
    <section className="bg">
      <div className="relative z-[1] flex flex-col items-start w-auto md:w-[80%] p-7 md:p-36 pt-40 md:pt-52">
        <h1 className="text-4xl mb-5 leading-[3.5rem]">
          Start your day with cup of coffee at caffeine
        </h1>
        <p className="text-xs mb-5 leading-[1.5rem]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod facilis
          blanditiis nesciunt maiores, accusantium voluptate sed necessitatibus
          molestiae atque amet! Eligendi suscipit quis quam quidem alias cumque,
          culpa hic corporis.
        </p>
        <div className="flex gap-x-8 md:gap-10 py-10">
        <button className="px-4 py-2 md:px-6 rounded-md text-white shadow-inner tracking-widest border-[1.2px] border-[#ac7b48] bg-[#ac7b48] outline-none cursor-pointer hover:bg-transparent">
      shop now 
    </button>
          <Button>Book a table</Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
