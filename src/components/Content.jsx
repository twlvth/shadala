import React from "react";
import { IoIosAirplane } from "react-icons/io";
import { FaShip } from "react-icons/fa6";
import { FaTruck, FaMotorcycle } from "react-icons/fa";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import { RiFileUserFill } from "react-icons/ri";

const Content = () => {
  return (
    <div>
      <div class="px-5 py-12 mx-auto lg:px-16">
        <div class="mx-auto text-center">
          <div class="grid grid-cols-5 gap-2 mx-auto lg:grid-cols-5 ">
            <div>
              <img
                class="h-4 mx-auto lg:h-12 hover:scale-110 transition duration-300 ease-in-out"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png"
                alt="Shopee"
              />
            </div>
            <div>
              <img
                class="h-4 mx-auto lg:h-12  hover:scale-110 transition duration-300 ease-in-out"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Lazada_%282019%29.svg/2560px-Lazada_%282019%29.svg.png"
                alt="Lazada"
              />
            </div>
            <div>
              <img
                class="h-4 mx-auto lg:h-12  hover:scale-110 transition duration-300 ease-in-out"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png"
                alt="Sketch "
              />
            </div>
            <div>
              <img
                class="h-4 mx-auto lg:h-12  hover:scale-110 transition duration-300 ease-in-out"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Aliexpress_logo.svg/2560px-Aliexpress_logo.svg.png"
                alt="Sketch "
              />
            </div>
            <div>
              <img
                class="h-4 mx-auto lg:h-12  hover:scale-110 transition duration-300 ease-in-out"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Watsons_logotype.svg/2560px-Watsons_logotype.svg.png"
                alt="Invision"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid py-12 px-4">
        <div className="text-center font-Montserrat">
          <h1 className="text-[#131313] font-bold text-3xl pb-2">
            Which Shipping Solution Fits your Parcel?
          </h1>
          <p className="font-semibold text-[15px]">
            Discover the ideal service for your parcel based on size and
            urgency.
          </p>
        </div>
        <div className="font-Montserrat my-5">
          <div class="space-y-8 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:gap-3 xl:gap-5 lg:space-y-0 ">
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-[20px] border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white hover:scale-110 transition duration-300 ease-in-out">
              <div className="flex flex-col items-center color-">
                <IoIosAirplane size={80} style={{ color: "#10969f" }} />
                <h3 className="mt-2 text-2xl font-semibold">Air Service</h3>
              </div>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Fast and efficient service suitable for time-sensitive
                shipments.{" "}
              </p>
              <div class="flex justify-center items-baseline my-5 ">
                <span class="text-2xl font-extrabold"> 0.5 kg to 100 kg</span>
              </div>
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Expedited delivery options for urgent parcels.</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Real-time flight tracking for international shipments.
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Special handling for fragile or perishable items.</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Recommended for time-sensitive deliveries requiring quick
                    transit.
                  </span>
                </li>
              </ul>
            </div>

            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-[20px] border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white hover:scale-110 transition duration-300 ease-in-out">
              <div className="flex flex-col items-center">
                <FaShip size={80} style={{ color: "#10969f" }} />
                <h3 className="mt-2 text-2xl font-semibold">Sea Service</h3>
              </div>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Economical option for large shipments with longer lead times.
              </p>
              <div class="flex justify-center items-baseline my-5 ">
                <span class="text-2xl font-extrabold"> 100 kg to 10k kg</span>
              </div>
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Mainly for international shipments, particularly bulk cargo.
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Extended tracking intervals due to longer transit times.
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Cost-effective solutions for businesses with less
                    time-sensitive shipments.
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Ideal for businesses with bulk cargo and flexible delivery
                    timelines.
                  </span>
                </li>
              </ul>
            </div>

            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-[20px] border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white hover:scale-110 transition duration-300 ease-in-out">
              <div className="flex flex-col items-center">
                <FaTruck size={80} style={{ color: "#10969f" }} />
                <h3 className="mt-2 text-2xl font-semibold">Truck Service</h3>
              </div>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Versatile service for domestic deliveries, various parcel sizes.
              </p>
              <div class="flex justify-center items-baseline my-5 ">
                <span class="text-2xl font-extrabold"> 50 kg to 10k kg</span>
              </div>
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Well-suited for regional and local transportation.
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Real-time GPS tracking for precise location updates.
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Specialized handling for sensitive or valuable items.
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Ideal for businesses with diverse cargo types and larger
                    volumes.
                  </span>
                </li>
              </ul>
            </div>

            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-[20px] border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white hover:scale-110 transition duration-300 ease-in-out">
              <div className="flex flex-col items-center">
                <FaMotorcycle size={80} style={{ color: "#10969f" }} />
                <h3 className="mt-2 text-2xl font-semibold">Motor Service</h3>
              </div>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Swift and agile service for local deliveries with smaller
                parcels..{" "}
              </p>
              <div class="flex justify-center items-baseline my-5 ">
                <span class="text-2xl font-extrabold"> 0.5 kg to 50 kg</span>
              </div>
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Efficient for navigating through urban areas with traffic.
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Quick and reliable last-mile delivery option.</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Ideal for time-sensitive documents and small packages.
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Perfect for small businesses, documents, and urgent
                    deliveries.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section>
          <div class="container px-5 py-10 mx-auto font-Montserrat">
            <div className="text-center ">
              <h1 className="text-[#131313] font-bold text-3xl pb-2">
                Meet The Team
              </h1>
              <p className="font-semibold text-[15px] mb-5">
                At Shadala, our team is a dynamic mix of dedicated professionals
                who bring passion, expertise, and a touch of Filipino warmth to
                the world of logistics. Together, we work tirelessly to ensure
                your shipments are handled with care and precision.
              </p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-[20px] w-full h-56 object-cover object-center mb-4"
                    src="https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/412143591_660089532959948_7311236077537034920_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeF7lSBiKE10wmOHhoNHJv_Ke-Mcn8dEr_l74xyfx0Sv-dep8NMOoJDY8z_8c7nOG4TenRwxQDldlgUpHuAUfMCM&_nc_ohc=qq7FDjJYgTkAX9_BryR&_nc_ht=scontent-mnl1-2.xx&oh=00_AfDYE5rOzuZJ4CkWwltKUuxYqBO60B_VC-Tms6XHJ1LfEQ&oe=65D6C35D"
                  />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">
                      Stefano Franco Medina
                    </h2>
                    <h3 class="text-gray-500 mb-3">Operations Manager</h3>
                    <p class="mb-4 text-[13px]">
                      Manages daily logistics operations for optimal efficiency
                      and performance.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-[20px] w-full h-56 object-cover object-center mb-4"
                    src="https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/333228922_863755081353574_3771273486797470398_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeEL2KhySTLD7QBbZHpv6Hr60bv6byZrd8bRu_pvJmt3xiO0OReqj_OApHNj1NeXnRJwhhQy164DITtzaQh-rd8m&_nc_ohc=I47A23cxqccAX_dbyMD&_nc_ht=scontent.fmnl30-1.fna&oh=00_AfAHTBlvzIM1f0SfGnZfi09-n_B-M_atGIcid-cwSJH6fw&oe=65D71198"
                  />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">
                      Marie Bernadette Gerali
                    </h2>
                    <h3 class="text-gray-500 mb-3">Logistic Coordinator</h3>
                    <p class="mb-4 text-[13px]">
                      Coordinates shipments and routes, ensuring timely and
                      efficient delivery.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-[20px] w-full h-56 object-cover object-center mb-4"
                    src="https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/364159600_6805498239514955_3173472554989688912_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGCuGdp4bTDDjs5Aj1b2uTcDPUzf1BO4TYM9TN_UE7hNmyGVbMScZHnroinHer5CrO89D3ua2TNSgRAyGFEx3cL&_nc_ohc=l63z__GoMKMAX_4BRuh&_nc_ht=scontent-mnl1-2.xx&oh=00_AfAVJ2xeHbpKU3dihWXeJRHTseQH9mABzBs2QDGX3E0m8A&oe=65D6887B"
                  />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">
                      Hyacinth Ashley Radovan
                    </h2>
                    <h3 class="text-gray-500 mb-3">
                      Sales & Business Dev Manager
                    </h3>
                    <p class="mb-4 text-[13px]">
                      Drives growth through strategic sales and client
                      partnerships.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-[20px] w-full h-56 object-cover object-center mb-4"
                    src="https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/393345572_2240187936186039_8946530797019771981_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFvnnMVYCIyZCB07gJb5KhHv_kBhUKYrIK_-QGFQpisglQbsutu2FRDI-sZUm7mcvfy--sGLvcyAckwDu4u5nk1&_nc_ohc=2DfYdnoRfioAX8LoUc9&_nc_oc=AQlUFaSROfCXpR1KwIlOEu1QvJtT4gUJNw_Pj5Ml2cbOJWx51U50bmCkkojSoRlbIZE&_nc_ht=scontent-mnl1-2.xx&oh=00_AfDVg9RjBXr1GsID6PL1CCK9mziWqTdld-snctWz4PozPA&oe=65D713BF"
                  />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">
                      Patricia Anne Sugapong
                    </h2>
                    <h3 class="text-gray-500 mb-3">Technical Lead</h3>
                    <p class="mb-4 text-[13px]">
                      Guides development and innovation for Shadala's
                      application and website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container px-5 pt-10 mx-auto font-Montserrat sm:grid">
            <div className="text-center">
              <h1 className="text-[#131313] font-bold text-3xl pb-2">
                And There's More - the Heart and Soul of Shadala
              </h1>
              <p className="font-semibold text-[15px] mb-5">
                Behind every successful delivery is a team dedicated to
                excellence. Our hub administrators and riders go beyond
                logistics – they infuse life into every parcel's journey.
              </p>
            </div>
            <div className="lg:grid lg:grid-cols-2 gap-4">
              <img
                className="h-100 object-cover"
                src={image2}
                alt="Left Image"
              />
              <img
                className="lg:mt-10 mt-5 sm:mt-5 object-cover"
                src={image3}
                alt="Right Image"
              />
            </div>
          </div>
        </section>

        <div class="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center font-Montserrat">
          <div class="md:w-1/2 mb-10 md:mb-0 lg:mt-[-80px]">
            <img class="object-center rounded" alt="hero" src={image1} />
          </div>
          <div class="lg:flex-grow md:w-1/2 md:pl-16 flex flex-col lg:ml-[-50px] md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Be Part of the Shadala Story –{" "}
              <br class="hidden lg:inline-block" />
              Join Our Team!
            </h1>
            <p class="leading-relaxed font-semibold text-[#131313] sm: mb-3">
              We're not just delivering parcels; we're crafting experiences. If
              you're passionate, agile, and ready to add your touch to every
              delivery, we invite you to be part of our Shadala family.
              Together, let's redefine the logistics journey and turn every
              shipment into a tale of excellence.
            </p>
            <div class="flex justify-start">
              <button
                type="button"
                className="text-white bg-[#10969f] hover:bg-[#20848b] rounded-[20px] px-5 py-2.5 dark:bg-[#10969F] darkhover:bg-[#20848b] focus:outline-none font-bold"
              >
                <span className="flex items-center font-bold ">
                  <RiFileUserFill className="mr-1" />
                  Apply Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
