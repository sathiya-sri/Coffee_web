import React from "react";
import Review_detail from "../data/Review_detail.js";
import { ImQuotesRight } from "react-icons/im";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../animations/Testimonial.css";
import { Pagination } from "swiper/modules";
const Testimonial = () => {
  return (
    <section className="md:px-40 py-24 px-10">
      <h1 className="text-center text-3xl tracking-wider mb-10">
        Our Client's Reviews
        <hr className="w-20 mx-auto" />
      </h1>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {Review_detail.map((list) => {
          return (
            <SwiperSlide key={list.id}>
              <div className="flex flex-col justify-center items-center w-full py-5">
                <div className="relative flex items-start justify-center gap-5 md:gap-10 bg-black rounded-lg  h-fit w-full  px-5 md:px-10 py-4 shadow-2xl">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white mt-2">
                    <img src={list.imgurl} alt="users" className="w-12 p-2" />
                  </div>
                  <div className=" w-[80%] py-1">
                    <h1 className="mb-1">{list.name}</h1>
                    <ul className="flex items-center md:gap-5 gap-2 mb-2">
                      <li className="text-yellow-500">{list.star}</li>
                      <li className="text-yellow-500">{list.star}</li>
                      <li className="text-yellow-500">{list.star}</li>
                      <li className="text-yellow-500">{list.star}</li>
                      <li>{list.star}</li>
                    </ul>
                    <p className="text-[10px] md:text-xs text-pretty">
                      {list.review}
                    </p>
                    <ImQuotesRight className="absolute top-5 right-10 text-xl md:text-3xl" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
