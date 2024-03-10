import React from "react";
import ClientNavBar from "../components/ClientNavBar";
import HistoryContext from "../contexts/HistoryContext";

function history() {
  return (
    <div>
      <ClientNavBar />
      <div className="min-h-[80vh] font-Montserrat bg-gradient-to-b from-white via-white to-teal-200 pb-2">
        <div className="max-w-[1240px] mx-auto grid px-4 bg-blue">
          <HistoryContext />
        </div>
      </div>
    </div>
  );
}

export default history;
