import React from "react";
import Carddetail from "../data/Carddetail.js";
import "../animations/Card.css";
import Button from "./Button.js";
const Card = () => {
  return (
    <section className="md:px-40 py-10 px-10 menu">
      <h1 className="relative z-[1] text-center text-3xl tracking-wider mb-10">
        Our Menu Card
        <hr className="w-20 mx-auto" />
      </h1>
      <div className="relative z-[1] grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Carddetail.map((list) => {
          return (
            <div
              key={list.id}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 p-3 bg-black rounded-lg menu_card"
            >
              <div>
                <img
                  src={list.imgurl}
                  alt="coffee"
                  className="w-20 h-20 rounded-full border-[1px] border-white border-dashed p-2"
                />
              </div>
              <div className="flex items-center w-[100%] md:w-[70%] justify-between">
                <div>
                  <h2 className="border-b-white border-b-[1px] w-[210px]">
                    {list.title}
                  </h2>
                </div>
                <div>
                  <span className="border-l-white border-l-[1px] border-dashed pl-2">
                    {list.price}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="relative z-[1] flex items-center justify-center mt-10">
      <Button>View More Menu</Button>
      </div>
    </section>
  );
};

export default Card;
