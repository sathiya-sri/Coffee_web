import React from "react";

const Button = (props) => {
  return (
    <button className="px-4 py-2 md:px-6 rounded-md text-white shadow-inner tracking-widest border-[1.2px] border-[#ac7b48] outline-none cursor-pointer hover:bg-[#ac7b48]">
      {props.children}
    </button>
  );
};

export default Button;
