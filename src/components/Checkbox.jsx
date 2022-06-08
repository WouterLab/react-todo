import React from "react";
import { BsCheck } from "react-icons/bs";

const Checkbox = ({ isCompleted }) => {
  return (
    <div
      className={`border-[3px] rounded-xl border-pink-600 w-8 h-8 mr-3 flex items-center justify-center ${
        isCompleted ? "bg-pink-600" : ""
      }`}
    >
      {isCompleted && <BsCheck size={26} className="text-gray-900" />}
    </div>
  );
};

export default Checkbox;
