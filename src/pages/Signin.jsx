import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../images/icon.png";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here (e.g., sending data to a server)

    // For now, let's log the form data to the console
    console.log("Form submitted:", formData);
  };

  return (
    <div class="bg-gradient-to-b from-white via-white to-teal-200 h-[89vh] mx-auto text-center flex flex-col justify-center ">
      <div class="font-Montserrat w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ">
        <div class="px-6 py-4">
          <div class="flex justify-center mx-auto">
            <Link to="/ph-en">
              <img class="w-auto h-14" src={icon} alt="" />
            </Link>
          </div>

          <h3 class="mt-3 text-xl font-extrabold text-center text-gray-600 dark:text-gray-200">
            Welcome Back!
          </h3>

          <p class="mb-3 text-[12px] text-center text-gray-500 dark:text-gray-400">
            Your Padala, Our Priority
          </p>

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
            <div class="text-left">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>

            <div class="mt-3 flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="remember"
                    class="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="/forgot-pass"
                class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="button"
              className="w-full mt-3 block items-center text-white bg-[#10969f] hover:bg-[#20848b] transition-colors font-medium rounded-[20px] px-5 py-3"
            >
              Sign in
            </button>
          </form>
        </div>

        <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span class="text-sm text-gray-600 dark:text-gray-200">
            Don't have an account?{" "}
          </span>

          <a
            href="#"
            class="mx-2 text-sm font-bold text-teal-500 dark:text-blue-400 hover:underline"
          >
            <Link to="/signup">Sign Up</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
