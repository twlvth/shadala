import React, { useState } from "react";
import { RiMapPinFill } from "react-icons/ri";
import { FaRegCircleDot } from "react-icons/fa6";
import {
  FaMotorcycle,
  FaCarSide,
  FaTruckPickup,
  FaTruck,
  FaTruckMoving,
} from "react-icons/fa";
import { RiTruckFill } from "react-icons/ri";
function BookContext() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");

  const handlePickupLocationChange = (e) => {
    setPickupLocation(e.target.value);
  };

  const handleDropoffLocationChange = (e) => {
    setDropoffLocation(e.target.value);
  };

  return (
    <div className="font-Montserrat w-full max-w-[1240px] mx-auto over bg-white rounded-lg shadow-md dark:bg-gray-800 my-5 p-5">
      <h1 className="text-left my-2 font-semibold">Booking Details</h1>
      <div className="outline outline-gray-100 rounded-xl p-5 ">
        <div className="flex items-center">
          <FaRegCircleDot className="mr-2 text-teal-500" />
          <div className="relative z-0 w-full mb-5 ml-2 group">
            <input
              type=""
              name=""
              id=""
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={pickupLocation}
              onChange={handlePickupLocationChange}
            />
            <label
              htmlFor=""
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Pick-up Location
            </label>
          </div>
        </div>
        {pickupLocation && (
          <div
            className="bg-gray-100 rounded-xl p-5 ml-8 max-w-md mb-5"
            name="senderInfo"
          >
            <div className="">
              <div className="mb-2">
                <label
                  className="block text-sm font-medium text-gray-800 text-left"
                  htmlFor=""
                >
                  Sender Name
                </label>
                <input
                  type="text"
                  id=""
                  name=""
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                />
              </div>
              <div className="mb-2">
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
              <label
                className="block text-sm font-medium text-gray-800 text-left"
                htmlFor=""
              >
                Block / Floor / Room
              </label>
              <input
                type="text"
                id=""
                name=""
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>
        )}
        <div className="flex items-center">
          <RiMapPinFill className="mr-2 text-teal-500" />
          <div className="relative z-0 w-full mb-5 ml-2 group">
            <input
              type=""
              name=""
              id=""
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={dropoffLocation}
              onChange={handleDropoffLocationChange}
            />
            <label
              htmlFor=""
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Drop-off Location
            </label>
          </div>
        </div>
        {dropoffLocation && (
          <div
            className="bg-gray-100 rounded-xl p-5 ml-8 max-w-md  mb-5 transition-all duration-300 ease-in-out transform hover:scale-105"
            name="receiverInfo"
          >
            <div className="">
              <div className="mb-2">
                <label
                  className="block text-sm font-medium text-gray-800 text-left"
                  htmlFor=""
                >
                  Receiver Name
                </label>
                <input
                  type="text"
                  id=""
                  name=""
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-sm font-medium text-gray-800 text-left "
                  htmlFor=""
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
              <label
                className="block text-sm font-medium text-gray-800 text-left"
                htmlFor=""
              >
                Block / Floor / Room
              </label>
              <input
                type="text"
                id=""
                name=""
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>
        )}
        <hr />
        <label
          className="block font-bold text-gray-800 text-left my-2"
          htmlFor=""
        >
          Vehicle Type
        </label>
        <div className="flex flex-wrap justify-center gap-3 my-5 ">
          <label class="cursor-pointer">
            <input type="radio" class="peer sr-only" name="pricing" />
            <div class="w-[170px] max-w-xl rounded-md bg-white py-5 px-3 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-teal-600 peer-checked:ring-teal-400 peer-checked:ring-offset-2 outline outline-2 outline-gray-100">
              <FaMotorcycle size={50} />
              <div class="flex flex-col gap-1">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-semibold uppercase text-gray-500 ">
                    Motorcyle
                  </p>
                  <div className="ml-2">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                      />
                    </svg>
                  </div>
                </div>
                <p>
                  Up to <span class="text-lg font-bold mr-2">20 kg</span>
                </p>

                <p className="text-sm font-bold text-[11px]">₱49 Base Fare</p>
              </div>
            </div>
          </label>
          <label class="cursor-pointer">
            <input type="radio" class="peer sr-only" name="pricing" />
            <div class="w-[170px] max-w-xl rounded-md bg-white py-5 px-3 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-teal-600 peer-checked:ring-teal-400 peer-checked:ring-offset-2 outline outline-2 outline-gray-100">
              <FaCarSide size={50} />
              <div class="flex flex-col gap-1">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-semibold uppercase text-gray-500 ">
                    Sedan
                  </p>
                  <div className="ml-2">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                      />
                    </svg>
                  </div>
                </div>
                <p>
                  Up to <span class="text-lg font-bold mr-2">200 kg</span>
                </p>
                <p className="text-sm font-bold text-[11px]">₱100 Base Fare</p>
              </div>
            </div>
          </label>
          <label class="cursor-pointer">
            <input type="radio" class="peer sr-only" name="pricing" />
            <div class="w-[170px] max-w-xl rounded-md bg-white py-5 px-3 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-teal-600 peer-checked:ring-teal-400 peer-checked:ring-offset-2 outline outline-2 outline-gray-100">
              <FaTruckPickup size={50} />
              <div class="flex flex-col gap-1">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-semibold uppercase text-gray-500 ">
                    MPV
                  </p>
                  <div className="ml-2">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                      />
                    </svg>
                  </div>
                </div>
                <p>
                  Up to <span class="text-lg font-bold mr-2">600 kg</span>
                </p>

                <p className="text-sm font-bold text-[11px]">₱220 Base Fare</p>
              </div>
            </div>
          </label>
          <label class="cursor-pointer">
            <input type="radio" class="peer sr-only" name="pricing" />
            <div class="w-[170px] max-w-xl rounded-md bg-white py-5 px-3 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-teal-600 peer-checked:ring-teal-400 peer-checked:ring-offset-2 outline outline-2 outline-gray-100">
              <RiTruckFill size={50} />
              <div class="flex flex-col gap-1">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-semibold uppercase text-gray-500 ">
                    Small Truck
                  </p>
                  <div className="ml-2">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                      />
                    </svg>
                  </div>
                </div>
                <p>
                  Up to <span class="text-lg font-bold mr-2">1000 kg</span>
                </p>

                <p className="text-sm font-bold text-[11px]">₱310 Base Fare</p>
              </div>
            </div>
          </label>
          <label class="cursor-pointer">
            <input type="radio" class="peer sr-only" name="pricing" />
            <div class="w-[190px] max-w-xl rounded-md bg-white py-5 px-3 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-teal-600 peer-checked:ring-teal-400 peer-checked:ring-offset-2 outline outline-2 outline-gray-100">
              <FaTruck size={50} />
              <div class="flex flex-col gap-1">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-semibold uppercase text-gray-500 ">
                    Medium Truck
                  </p>
                  <div className="ml-2">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                      />
                    </svg>
                  </div>
                </div>
                <p>
                  Up to <span class="text-lg font-bold mr-2">2000 kg</span>
                </p>

                <p className="text-sm font-bold text-[11px]">
                  ₱1,160 Base Fare
                </p>
              </div>
            </div>
          </label>
          <label class="cursor-pointer">
            <input type="radio" class="peer sr-only" name="pricing" />
            <div class="w-[190px] max-w-xl rounded-md bg-white py-5 px-3 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-teal-600 peer-checked:ring-teal-400 peer-checked:ring-offset-2 outline outline-2 outline-gray-100">
              <FaTruckMoving size={50} />
              <div class="flex flex-col gap-1">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-semibold uppercase text-gray-500 ">
                    Large Truck
                  </p>
                  <div className="ml-2">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                      />
                    </svg>
                  </div>
                </div>
                <p>
                  Up to <span class="text-lg font-bold mr-2">3000 kg</span>
                </p>

                <p className="text-sm font-bold text-[11px]">
                  ₱2,000 Base Fare
                </p>
              </div>
            </div>
          </label>
        </div>
        <div className="grid grid-cols-2 items-center">
          <div className="flex-col">
            <p className="font-semibold">
              Total Price{" "}
              <span className="font-bold ml-3 text-[25px]">
                ₱2,000<sup className="text-sm ml-1">.00</sup>
              </span>
            </p>
            <p className="font-medium text-xs">Cash on Delivery </p>
          </div>
          <div className="ml-4">
            <a href="/">
              <button className="w-full px-8 py-3 rounded-[20px] block text-white font-semibold bg-teal-500 transition-colors duration-150 border border-gray-300 focus:shadow-outline hover:bg-teal-700 hover:text-teal-100">
                Book Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookContext;
