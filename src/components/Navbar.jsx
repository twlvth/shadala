import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../images/shadala.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 font-Montserrat font-semibold">
      <img className="h-8 w-auto" src={logo} alt=""></img>
      <ul className="hidden md:flex uppercase">
        <li className="p-4 hover:underline decoration-2">
          <Link to="/ph-en">Home</Link>
        </li>
        <li className="p-4 hover:underline decoration-2">
          <Link>Services</Link>
        </li>
        <li className="p-4 hover:underline decoration-2">
          <Link>About</Link>
        </li>
        <li className="p-4 hover:underline decoration-2">
          <Link>Contact</Link>
        </li>
        <li className="p-4 hover:underline decoration-2 text-[#10969F] md:text-sm">
          <Link to="/signin">SIGN IN</Link>
        </li>
        <button
          type="button"
          className="text-white bg-[#10969f] hover:bg-[#20848b] font-medium rounded-[20px] px-5 py-2.5 dark:bg-[#10969F] darkhover:bg-[#20848b] focus:outline-none"
        >
          <Link to="/signup">SIGN UP</Link>
        </button>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu siz={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
        style={{ zIndex: 1 }}
      >
        <img className="m-4 h-8 w-auto mt-[32px]" src={logo} alt=""></img>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-200">
            <a href="/">Home</a>
          </li>
          <li className="p-4 border-b border-gray-200">
            <a href="/">Services</a>
          </li>
          <li className="p-4 border-b border-gray-200">
            <a href="/">About</a>
          </li>
          <li className="p-4">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
