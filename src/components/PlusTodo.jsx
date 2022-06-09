import React from "react";
import { MdAdd } from "react-icons/md";

const PlusTodo = ({ addTodo, title }) => {
  return (
    <button
      className="w-8 h-8 mr-3 flex items-center justify-center hover:text-pink-600 transition-colors ease-in-out duration-200"
      onClick={() => addTodo(title)}
    >
      <MdAdd size={30} />
    </button>
  );
};

export default PlusTodo;
