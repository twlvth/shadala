import React, { useContext, useState } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import { FaUser } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { FaBug } from "react-icons/fa";

const AccountType = () => {
  console.log("AccountType component rendered");

  const { userData, setUserData } = useContext(StepperContext);
  const [selectedAccountType, setSelectedAccountType] = useState("");

  const handleAccountTypeChange = (accountType) => {
    setUserData({ ...userData, accountType });
    setSelectedAccountType(accountType);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex">
        <button
          onClick={() => handleAccountTypeChange("customer")}
          className={`text-teal-500 p-8 flex flex-col items-center justify-center mr-4 outline outline-teal-500 rounded-xl bg-[#feffff] transition duration-300 ease-in-out hover:bg-teal-500 hover:text-white focus:outline-none focus:scale-105 focus:bg-teal-500 focus:text-white ${
            selectedAccountType === "customer" ? "bg-teal-500 text-white" : ""
          }`}
        >
          <FaUser size={80} />
          <span className="mt-2 font-extrabold">Customer</span>
          <span className="">Explore hassle-free bookings for your needs.</span>
        </button>

        <button
          onClick={() => handleAccountTypeChange("driver")}
          className={`text-teal-500 p-8 flex flex-col items-center justify-center mr-4 outline outline-teal-500 rounded-xl bg-[#feffff] transition duration-300 ease-in-out hover:bg-teal-500 hover:text-white focus:outline-none focus:scale-105 focus:bg-teal-500 focus:text-white ${
            selectedAccountType === "driver" ? "bg-teal-500 text-white" : ""
          }`}
        >
          <GiSteeringWheel size={80} />
          <span className="mt-2 font-extrabold">Driver</span>
          <span className="">
            Join us as a delivery rider and hit the road!
          </span>
        </button>
      </div>

      {selectedAccountType && (
        <p className="mt-4 text-red-500 flex items-center text-sm">
          <span className="mr-2">
            <FaBug size={12} />
          </span>
          <span>
            Debugging Information: Account Type Selected:{" "}
            <strong className="">{selectedAccountType}</strong>
          </span>
          <span className="ml-2">
            <FaBug size={12} />
          </span>
        </p>
      )}
    </div>
  );
};

export default AccountType;
