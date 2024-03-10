import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../images/icon.png";

const ForgotPassword = () => {
  return (
    <div class="bg-gradient-to-b from-white via-white to-teal-200 h-[89vh] mx-auto text-center flex flex-col justify-center ">
      <div class="font-Montserrat w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ">
        <div class="px-6 py-4">
          <div class="flex justify-center mx-auto">
            <Link to="/ph-en">
              <img class="w-auto h-14" src={icon} alt="" />
            </Link>
          </div>

          <h3 class="my-3 text-xl font-extrabold text-center text-gray-600 dark:text-gray-200">
            Forgot Password
          </h3>

          <form>
            <div class="text-left">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg mb-2 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>

            <a href="/forgot-pass/verification-code">
              <button
                type="button"
                className="w-full mt-3 block items-center text-white bg-[#10969f] hover:bg-[#20848b] transition-colors font-medium rounded-[20px] px-5 py-3"
              >
                Request Password Recovery
              </button>
            </a>
          </form>
        </div>

        <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span class="text-sm text-gray-600 dark:text-gray-200">
            Already remember your password?{" "}
          </span>

          <a
            href="#"
            class="mx-2 text-sm font-bold text-teal-500 dark:text-blue-400 hover:underline"
          >
            <Link to="/signin">Sign In</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
