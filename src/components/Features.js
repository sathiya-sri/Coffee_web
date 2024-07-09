import React from "react";
import Featurelist from "../data/Featurelist";
import "../animations/Features.css";
const Features = () => {
  return (
    <section className="md:px-40 py-10 px-10">
      <h1 className="text-center text-3xl  tracking-wider mb-10">Our Best Features <hr className="w-20  mx-auto"/></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Featurelist.map((list, index) => {
          return (
            <div key={index} className="card">
              <div className="mb-5">{list.icon}</div>
              <h2  className="mb-3">{list.title}</h2>
              <p className="text-[12px]">{list.content}</p>
              <img src={list.imgurl} alt="bean_shape" className="shape" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
