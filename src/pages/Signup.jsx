import React, { useState } from "react";
import { StepperContext } from "../contexts/StepperContext";
import logo from "../images/shadala.png";
import { Link } from "react-router-dom";
import icon from "../images/icon.png";
import { PiSteeringWheelFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import Stepper from "../components/Stepper";
import StepperControl from "../components/StepperControl";
import AccountType from "../components/steps/AccountType";
import AccountInfo from "../components/steps/AccountInfo";
import TermsOfService from "../components/steps/TermsOfService";
import Complete from "../components/steps/Complete";

const SignupForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const [steps, setSteps] = useState([
    "Account Type",
    "Account Information",
    "Terms Of Service",
    "Complete",
  ]);

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <AccountType />;
      case 2:
        return <AccountInfo />;
      case 3:
        return <TermsOfService />;
      case 4:
        return <Complete />;
      default:
        return null;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <div class="bg-gradient-to-b from-white via-white to-teal-200 mx-auto text-center flex flex-col justify-center p-5 min-h-[90vh]">
      <div class="font-Montserrat w-full max-w-[900px] mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 my-5">
        <div class="px-6 py-4">
          <div class="flex justify-center mx-auto">
            <Link to="/ph-en">
              <img class="w-auto h-14" src={icon} alt="" />
            </Link>
          </div>

          <h3 class="mt-3 text-xl font-extrabold text-center text-gray-600 dark:text-gray-200">
            Create an Account
          </h3>

          <p class="mb-3 text-[12px] text-center text-gray-500 dark:text-gray-400">
            Your Padala, Our Priority
          </p>
          <div className="container horizontal mt-5">
            <Stepper steps={steps} currentStep={currentStep} />
          </div>

          <div className="my-10 p-2">
            <StepperContext.Provider
              value={{
                userData,
                setUserData,
                finalData,
                setFinalData,
              }}
            >
              {displayStep(currentStep)}
            </StepperContext.Provider>
          </div>

          {currentStep !== steps.length && (
            <StepperControl
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />
          )}
        </div>

        {currentStep !== steps.length ? (
          <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
            <span class="text-sm text-gray-600 dark:text-gray-200">
              Already have an account?{" "}
            </span>

            <a
              href="#"
              class="mx-2 text-sm font-bold text-teal-500 dark:text-blue-400 hover:underline"
            >
              <Link to="/signin">Sign In</Link>
            </a>
          </div>
        ) : (
          <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
            <span class="text-sm text-gray-600 dark:text-gray-200">
              Not ready to log in just yet? No worries! Head back to{" "}
            </span>

            <a
              href="#"
              class="mx-1 text-sm font-bold text-teal-500 dark:text-blue-400 hover:underline"
            >
              <Link to="/ph-en">Home Page</Link>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
export default SignupForm;
