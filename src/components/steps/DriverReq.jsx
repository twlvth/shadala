import React from "react";
export default function DriverReq() {
  return (
    <div>
      <h1 className="text-left my-2 font-semibold"> Driver Requirements</h1>
      <div className="grid grid-cols-4 gap-4 mb-2">
        <div className="grid-cols-2">
          <label
            className="block text-sm font-medium text-gray-800 text-left"
            htmlFor=""
          >
            Vehicle Model
          </label>
          <input
            type="text"
            id=""
            name=""
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-800 text-left"
            htmlFor=""
          >
            Plate Number
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
            Vehicle Type
          </label>
          <select
            id=""
            class="mt-1 p-2 w-full border border-gray-300 text-gray-800 rounded-md focus:outline-none focus:border-teal-500"
          >
            <option selected>Choose a Vehicle Type</option>
            <option value="">Motorcycle</option>
            <option value="">200kg Sedan</option>
            <option value="">600kg MPV</option>
            <option value="">1000kg Small Truck</option>
            <option value="">2000kg Medium Truck</option>
            <option value="">3000kg Large Truck</option>
          </select>
        </div>
        <div className="grid-cols-2">
          <label
            className="block text-sm font-medium text-gray-800 text-left"
            htmlFor=""
          >
            Vehicle Color
          </label>
          <input
            type="text"
            id=""
            name=""
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-2">
        <div className="grid-cols-2">
          <label
            className="block text-sm font-medium text-gray-800 text-left"
            htmlFor=""
          >
            License Number
          </label>
          <input
            type="text"
            id=""
            name=""
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-800 text-left"
            htmlFor=""
          >
            Expiration Date
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
            htmlFor=""
          >
            Valid Professional Driver's License
          </label>
          <input
            class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-2">
        <div className="col-2">
          <label
            className="block text-sm font-medium text-gray-800 text-left"
            htmlFor=""
          >
            Certificate of Registration (CR)
          </label>
          <input
            class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
          />
        </div>

        <div className="col-2">
          <label
            className="block text-sm font-medium text-gray-800 text-left"
            htmlFor=""
          >
            Official Receipt of Vehicle Registration (OR)
          </label>
          <input
            class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
          />
        </div>
      </div>
    </div>
  );
}
