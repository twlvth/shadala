import React from "react";
import ClientNavBar from "../components/ClientNavBar";
import BookContext from "../contexts/BookContext";

function book() {
  return (
    <div>
      <ClientNavBar />
      <div className="min-h-[80vh] font-Montserrat bg-gradient-to-b from-white via-white to-teal-200 pb-2">
        <div className="max-w-[1240px] mx-auto grid px-4 bg-blue">
          <BookContext />
        </div>
      </div>
    </div>
  );
}

export default book;
