import React, { useState } from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import Navlist from "../data/Navlist.js";
import { Link } from "react-scroll";
import Button from "./Button.js";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import "../animations/Header.css";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed left-0 top-0 z-[100] bg-black">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className=" cursor-pointer flex items-center " onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
          <span className="mr-1 pt-2">
            <GiCoffeeBeans size={30} color="#ac7b48"  />
          </span>
          <h1>caffeine</h1>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <IoCloseOutline size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <ul
          className={`md:flex  md:items-center md:pb-0 pb-12 absolute md:static z-[-1] md:z-auto bg-black md:bg-transparent  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Navlist.map((list, index) => (
            <li key={index} className="md:mr-8 md:my-0 my-7 list">
              <Link  spy={true}
              smooth={true}
              duration={500} to={list.link} className="cursor-pointer">
                {list.title}
              </Link>
            </li>
          ))}
          <Button>Login</Button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
