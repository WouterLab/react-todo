import React from "react";
import Checkbox from "./Checkbox";
import { BsTrash } from "react-icons/bs";

const ToDoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className="flex items-center justify-between mb-3 text-[18px] bg-gray-800 rounded-lg h-[65px] p-5 w-full">
      <button className="flex items-center" onClick={() => changeTodo(todo.id)}>
        <Checkbox isCompleted={todo.isCompleted} />
        <span className={`lining text-left ${todo.isCompleted ? "lined" : ""}`}>
          {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodo(todo.id)}>
        <BsTrash
          size={24}
          className="hover:text-red-700 transition-colors ease-in-out duration-200"
        />
      </button>
    </div>
  );
};

export default ToDoItem;
