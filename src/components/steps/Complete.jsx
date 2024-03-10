import React from "react";
import { FaCheckCircle } from "react-icons/fa";
export default function Complete() {
  return (
    <div className="container md:my-10">
      <div className="flex flex-col items-center text-teal-500">
        <FaCheckCircle size={80} />
      </div>
      <div className="mt-3 text-xl font-semibold uppercase text-teal-500">
        Congratulations!
      </div>
      <div className="text-lg  text-gray-500">
        {" "}
        Your account has been created.
      </div>
      <a className="mt-10" href="/signin">
        <button className="px-8 py-3 rounded-[20px] mt-2 text-teal-700 transition-colors duration-150 border border-gray-300 focus:shadow-outline hover:bg-teal-500 hover:text-teal-100">
          Proceed to Sign in
        </button>
      </a>
    </div>
  );
}
