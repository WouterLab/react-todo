import React, { useState } from "react";
import NewTodo from "./NewTodo";
import ToDoItem from "./ToDoItem";

const data = [
  {
    id: 0,
    title:
      "Выучить React, JS, Redux, HTML, CSS, Webpack, Typescript, Ecmascript6",
    isCompleted: false,
  },
  {
    id: 1,
    title: "Купить Porsche",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Купить молоко, хлеб и масло",
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    const copy = [...todos].filter((t) => t.id !== id);
    setTodos(copy);
  };

  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="mb-5 text-[36px] font-bold">My To-Do List</h1>
      {todos.map((el) => (
        <ToDoItem
          key={el.id}
          todo={el}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <NewTodo setTodos={setTodos} />
    </div>
  );
};

export default Home;
