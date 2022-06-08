import React, { useState } from "react";

const NewTodo = ({ setTodos }) => {
  const [title, setTitle] = useState("");

  const addTodo = (title) => {
    setTodos((prev) => [
      {
        id: new Date(),
        title,
        isCompleted: false,
      },
      ...prev,
    ]);
    setTitle('')
  };

  return (
    <div className="flex items-center justify-between mb-3 text-[18px] border-gray-800 border-2 rounded-lg h-[50px] p-5 w-full mt-10">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyPress={(e) => e.key === "Enter" && addTodo(title)}
        className="bg-transparent w-full border-none outline-none"
        placeholder="Add a task"
      />
    </div>
  );
};

export default NewTodo;
