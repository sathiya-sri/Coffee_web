import React from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import { Icons, Contacts } from "../data/Iconlist.js";
import Navlist from "../data/Navlist.js";
import { Link } from "react-scroll";
import "../animations/Footer.css";
const Footer = () => {
  return (
    <footer className="background">
      <div className="relative z-[1] grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 p-5 md:p-10">
        {/*----------------------------------    Grid 1    ----------------------------------*/}
        <div className="flex flex-wrap flex-col justify-center items-start gap-5">
          <div className="flex items-center gap-1 cursor-pointer"  onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
            <GiCoffeeBeans size={30} color="#ac7b48" />
            <h1>caffeine</h1>
          </div>
          <div className="text-pretty">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. rerum sed
              magni voluptatem autem neque impedit laboriosam iure quidem quos.
            </p>
          </div>
          <div className="flex gap-x-5">
            {Icons.map((Icon, index) => {
              return (
                <span
                  key={index}
                  className="cursor-pointer border-[1px] border-[hsl(27,34%,59%)] w-11 h-11 rounded-full p-[0.75rem] hover:bg-[hsl(27,34%,59%)] transition-all duration-500"
                >
                  {Icon.icon}
                </span>
              );
            })}
          </div>
        </div>
        {/*----------------------------------    Grid 2    ----------------------------------*/}
        <div className="flex flex-wrap flex-col justify-center items-start py-10 lg:py-0 gap-5">
          <h1 className="border-white border-b-[1.5px]">Contact Info</h1>
          <div>
            {Contacts.map((contact, index) => {
              return (
                <div className="flex items-center gap-x-3 py-2 cursor-pointer">
                  <span className="hover:scale-150 transition-all duration-500">
                    {contact.icon}
                  </span>
                  <div className="hover:scale-95 transition-all duration-500">
                    <p>{contact.title}</p>
                    <p>{contact.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/*----------------------------------    Grid 3    ----------------------------------*/}
        <div className="flex flex-wrap flex-col justify-center items-start gap-5">
          <h1 className="border-white border-b-[1.5px]">Quick Links</h1>
          <ul>
            {Navlist.map((list, index) => {
              return (
                <li key={index} className="curser-pointer py-1 list">
                  <Link to={list.link}>{list.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/*----------------------------------    Grid 4   ----------------------------------*/}
        <div className="flex flex-wrap flex-col justify-center items-start py-10 lg:py-0 gap-5">
          <h1 className="border-white border-b-[1.5px]">
            Subscribe to Newsletter
          </h1>
          <div className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Your Email"
              className="px-6 py-3 rounded-md outline-none bg-transparent border-[1px] border-white cursor-pointer"
            />
            <button className="px-6 py-2 rounded-md text-white shadow-inner tracking-widest border-[1.2px] border-[#ac7b48] outline-none cursor-pointer hover:bg-[#ac7b48]">
              subscribe now
            </button>
          </div>
          <div className="flex gap-5">
            <input type="checkbox" className="w-6 h-6" />
            <p>I have read and agree to all terms and conditions.</p>
          </div>
        </div>
      </div>
      {/*----------------------------------    copyright   ----------------------------------*/}
      <div className="relative z-[1] flex flex-wrap  justify-center items-center gap-3 tracking-widest pb-10">
        &copy; Copyright 2024 <h1 className=" text-[#ac7b48]">caffeine</h1> All
        Right Rerserved.
      </div>
    </footer>
  );
};

export default Footer;
