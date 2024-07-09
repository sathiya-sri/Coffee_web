import React from "react";
import Button from "../components/Button.js"
const About = () => {
  return (
    <section className="md:px-40 py-20 px-10">
      <h1 className="relative z-[1] text-center text-3xl  tracking-wider mb-10">
        About us
        <hr className="w-20 mx-auto" />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <img
            src="https://i.pinimg.com/474x/30/86/09/308609e6658ba50974542c3baaa80dd9.jpg"
            alt="about_us"
            className="w-[26rem] rounded-xl cursor-pointer"
          />
        </div>
        <div>
          <h1 className="relative z-[1] text-center text-2xl md:text-3xl tracking-wider mb-10 md:mt-0 mt-20 cursor-pointer">
            Our Coffee Journey at Caffeine
            <hr className="w-20 mx-auto" />
          </h1>
          <p className="p-2 text-justify leading-6 tracking-wider cursor-pointer">
            We pride ourselves on bringing the best coffee to the heart of New
            York City. We also offer a daily assortment of fresh baked goods and
            our Award Winning Chocolate Chip Cookies.
          </p>
          <p className="p-2 text-justify leading-6 tracking-wider cursor-pointer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            architecto, officiis incidunt sapiente eos facilis eius dolorum
            nulla repudiandae odit unde accusamus deleniti aperiam quaerat.
          </p>
          <div className="relative z-[1] flex items-center justify-center mt-5">
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
