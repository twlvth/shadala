import React from "react";
import { IoIosAirplane } from "react-icons/io";
import { FaShip } from "react-icons/fa6";
import { FaTruck, FaMotorcycle } from "react-icons/fa";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import { RiFileUserFill } from "react-icons/ri";
import service1 from "../images/service1.jpg";
import service2 from "../images/service2.jpg";
import service3 from "../images/service3.jpg";
import service4 from "../images/service4.jpg";
import service5 from "../images/service5.jpg";
import service6 from "../images/service6.jpg";

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
          <div class="mt-5 mx-auto grid justify-items-stretch gap-4 md:grid-cols-3 lg:gap-10">
            <div className="relative group overflow-hidden h-[300px] rounded-lg hover:drop-shadow-lg transition ease">
              <a href="#" className="absolute inset-0 flex items-end">
                <img
                  src={service1}
                  alt=""
                  className="inline-block w-full h-full object-cover rounded-lg transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out"
                />
              </a>
              <div className="font-Montserrat absolute inset-0 flex flex-col items-center justify-end p-5 rounded-lg bg-gradient-to-b from-transparent  to-teal-500  transition duration-300 ease-in-out opacity-100 hover:opacity-0">
                <p className="text-sm font-bold sm:text-xl text-white opacity-100 group-hover:opacity-0 transition duration-300 ease-in-out">
                  Motorcycle
                </p>
                <p className="text-center text-sm text-teal-100 opacity-100 group-hover:opacity-0 transition duration-300 ease-in-out">
                  Cheapest delivery option; perfect for small items such as food
                  and documents.
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden h-[300px] rounded-lg hover:drop-shadow-lg transition ease">
              <a href="#" className="absolute inset-0 flex items-end">
                <img
                  src={service2}
                  alt=""
                  className="inline-block w-full h-full object-cover rounded-lg transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out"
                />
              </a>
              <div className="font-Montserrat absolute inset-0 flex flex-col items-center justify-end p-5 rounded-lg bg-gradient-to-b from-transparent  to-teal-500  transition duration-300 ease-in-out opacity-100 hover:opacity-0">
                <p className="text-sm font-bold sm:text-xl text-white opacity-100 group-hover:opacity-0 transition duration-300 ease-in-out">
                  200kg Hatchback/Sedan
                </p>
                <p className="text-center text-sm text-teal-100 opacity-100 group-hover:opacity-0 transition duration-300 ease-in-out">
                  Cheapest 4-wheel option
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden h-[300px] rounded-lg hover:drop-shadow-lg transition ease">
              <a href="#" className="absolute inset-0 flex items-end">
                <img
                  src={service3}
                  alt=""
                  className="inline-block w-full h-full object-cover rounded-lg transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out"
                />
              </a>
              <div className="font-Montserrat absolute inset-0 flex flex-col items-center justify-end p-5 rounded-lg bg-gradient-to-b from-transparent  to-teal-500  transition duration-300 ease-in-out opacity-100 hover:opacity-0">
                <p className="text-sm font-bold sm:text-xl text-white opacity-100 group-hover:opacity-0 transition duration-300 ease-in-out">
                  600kg MPV
                </p>
                <p className="text-center text-sm text-teal-100 opacity-100 group-hover:opacity-0 transition duration-300 ease-in-out">
                  Flexible and affordable 4-wheel delivery option
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden h-[300px] rounded-lg hover:drop-shadow-lg transition ease">
              <a href="#" className="absolute inset-0 flex items-end">
                <img
                  src={service4}
                  alt=""
                  className="inline-block w-full h-full object-cover rounded-lg transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out"
                />
              </a>
              <div className="font-Montserrat absolute inset-0 flex flex-col items-center justify-end p-5 rounded-lg bg-gradient-to-b from-transparent  to-teal-500  transition duration-300 ease-in-out opacity-100 hover:opacity-0">
                <p className="text-sm font-bold sm:text-xl text-white opacity-100 group-hover:opacity-0 transition duration-300 ease-in-out">
                  1,000kg Small Truck
                </p>
                <p className="text-center text-sm text-teal-100 opacity-100 group-hover:opacity-0 transition duration-300 ease-in-out">
                  All-around 4-wheel option, great for general bulky delivery
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden h-[300px] rounded-lg hover:drop-shadow-lg transition ease">
              <a href="#" className="absolute inset-0 flex items-end">
                <img
                  src={service5}
                  alt=""
                  className="inline-block w-full h-full object-cover rounded-lg transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out"
                />
              </a>
              <div className="font-Montserrat absolute inset-0 flex flex-col items-center justify-end p-5 rounded-lg bg-gradient-to-b from-transparent  to-teal-500  transition duration-300 ease-in-out opacity-100 hover:opacity-0">
                <p className="text-sm font-bold sm:text-xl text-white opacity-100 group-hover:opacity-0 transition duration-300 ease-in-out">
                  2,000kg Medium Truck
                </p>
                <p className="text-center text-sm text-teal-100 opacity-100 group-hover:opacity-0 transition duration-300 ease-in-out">
                  Multiple items that can't fit L300
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden h-[300px] rounded-lg hover:drop-shadow-lg transition ease">
              <a href="#" className="absolute inset-0 flex items-end">
                <img
                  src={service6}
                  alt=""
                  className="inline-block w-full h-full object-cover rounded-lg transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out"
                />
              </a>
              <div className="font-Montserrat absolute inset-0 flex flex-col items-center justify-end p-5 rounded-lg bg-gradient-to-b from-transparent  to-teal-500  transition duration-300 ease-in-out opacity-100 hover:opacity-0">
                <p className="text-sm font-bold sm:text-xl text-white opacity-100 group-hover:opacity-0 transition duration-300 ease-in-out">
                  3,000kg Large Truck
                </p>
                <p className="text-center text-sm text-teal-100 opacity-100 group-hover:opacity-0 transition duration-300 ease-in-out">
                  Good for business and bulky delivery, furniture delivery &
                  lipat-bahay delivery
                </p>
              </div>
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
                    src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/412143591_660089532959948_7311236077537034920_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeF7lSBiKE10wmOHhoNHJv_Ke-Mcn8dEr_l74xyfx0Sv-dep8NMOoJDY8z_8c7nOG4TenRwxQDldlgUpHuAUfMCM&_nc_ohc=Ae69JUTXGUgAX94Qu_W&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfCEtooBVz5Li8mEB4zGJbJsSgZbOLML8mH-wnXOAUzvNQ&oe=65EA89DD"
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
                    src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-1/326387485_3395425007403403_3141908416753229492_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=11e7ab&_nc_eui2=AeF6CYlOF7rhGV46J4e-p5bi0C3THUx4b5HQLdMdTHhvkf6RMdgGFvQzgrAFAac-YzgTO-fTZlZUORY4UNeW4viJ&_nc_ohc=VmnMx1YkRj8AX-qovGi&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfAPfSdQo67uPlJHl4W7rX0jzT9ObC3BhuNyhchabcPo7g&oe=65EAEDFA"
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
                    src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/364159600_6805498239514955_3173472554989688912_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGCuGdp4bTDDjs5Aj1b2uTcDPUzf1BO4TYM9TN_UE7hNmyGVbMScZHnroinHer5CrO89D3ua2TNSgRAyGFEx3cL&_nc_ohc=RBoJTQpWawoAX89ev9E&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfDj5EaD3BGR5RSO7ubZg0XBje9LWenlZScZ51s4PHAd8Q&oe=65EC493B"
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
                    src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-1/393345572_2240187936186039_8946530797019771981_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeFvnnMVYCIyZCB07gJb5KhHv_kBhUKYrIK_-QGFQpisglQbsutu2FRDI-sZUm7mcvfy--sGLvcyAckwDu4u5nk1&_nc_ohc=KN2ByefynG0AX-oHWGW&_nc_oc=AQkbLZ7bXQOMWKmPQLT2XwHzVs4T2DH-TwWdKjGGVWwRHZ-b_4rUV_bqvml07yYSF60&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfCzhgKjLjhc866ltlaqzrhWwbLKWDsdNoMlz489fxPujA&oe=65EAEA7D"
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
              <a href="/signup">
                <button
                  type="button"
                  className="text-white bg-[#10969f] hover:bg-[#20848b] rounded-[20px] px-5 py-2.5 dark:bg-[#10969F] darkhover:bg-[#20848b] focus:outline-none font-bold"
                >
                  <span className="flex items-center font-bold ">
                    <RiFileUserFill className="mr-1" />
                    Apply Now
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
