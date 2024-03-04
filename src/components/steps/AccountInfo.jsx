import React, { useContext } from "react";
import DriverReq from "./DriverReq";
import { StepperContext } from "../../contexts/StepperContext";
export default function AccountInfo() {
  const { userData } = useContext(StepperContext);

  return (
    <div>
      <h1 className="text-left my-2 font-semibold"> Account Information</h1>
      <div className="grid grid-cols-4 gap-4 mb-2">
        <div className="grid-cols-2">
          <label
            className="block text-sm font-medium text-gray-800 text-left"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-800 text-left"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
          />
        </div>
        <div className="col-span-2">
          <label
            className="block text-sm font-medium text-gray-800 text-left"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-2">
        <div>
          <label
            className="block text-sm font-medium text-gray-800 text-left "
            htmlFor="email"
          >
            Phone Number
          </label>
          <div class="flex flex-span items-center">
            <div
              id=""
              class="mt-1 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700  dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            >
              +63{" "}
            </div>
            <div class="relative w-full">
              <input
                type="text"
                id="phone-input"
                class="mt-1 block p-2.5 w-full z-20 text-sm text-gray-500 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder=""
                required
              />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <label
            className="block text-sm font-medium text-gray-800 text-left"
            htmlFor="email"
          >
            Home Address
          </label>
          <input
            type="text"
            id=""
            name=""
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div className="col-2">
          <label
            className="block text-sm font-medium text-gray-800 text-left"
            htmlFor="Password"
          >
            Password
          </label>
          <input
            type="password"
            id=""
            name=""
            placeholder="••••••••"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
          />
        </div>
        <div className="col-2">
          <label
            className="block text-sm font-medium text-gray-800 text-left"
            htmlFor="email"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id=""
            name=""
            placeholder="••••••••"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
          />
        </div>
      </div>

      {userData.accountType === "driver" && <DriverReq />}
    </div>
  );
}
