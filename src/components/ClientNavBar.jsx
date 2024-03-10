import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import icon from "../images/icon.png";
import { Link } from "react-router-dom";

function ClientNavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 font-Montserrat font-semibold">
        <div className="flex items-center">
          <img className="h-8 w-auto" src={icon} alt=""></img>
          <ul className="hidden md:flex uppercase ml-4">
            <li className="p-4 hover:underline decoration-2">
              <Link to="/book">Book A Delivery</Link>
            </li>
            <li className="p-4 hover:underline decoration-2">
              <Link to="/history">History</Link>
            </li>
            <li className="p-4 hover:underline decoration-2">
              <Link to="/driver-report">Driver Report</Link>
            </li>
            <li className="p-4 hover:underline decoration-2">
              <Link to="/complaint">Complaint</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <li className="p-4 text-[#10969F] md:text-sm hover:text-teal-900 hover:scale-125 list-none">
            <Link>
              <IoIosNotifications size={25} />
            </Link>
          </li>
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-600 dark:text-gray-300 relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-teal-200 rounded-full dark:bg-gray-600">
              JL
            </span>
            <div className="font-medium dark:text-white">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in March 2024
              </div>
            </div>
          </div>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-white ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
          style={{ zIndex: 1 }}
        >
          <img className="m-4 h-8 w-auto mt-[32px]" src={icon} alt=""></img>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-200">
              <Link to="/">Book A Delivery</Link>
            </li>
            <li className="p-4 border-b border-gray-200">
              <Link to="/services">History</Link>
            </li>
            <li className="p-4 border-b border-gray-200">
              <Link to="/about">Driver Report</Link>
            </li>
            <li className="p-4">
              <Link to="/contact">Complaint</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ClientNavBar;
