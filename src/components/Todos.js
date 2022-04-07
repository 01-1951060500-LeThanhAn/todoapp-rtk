import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";

const Todos = () => {
  let todos = useSelector((state) => state.todos.value);

  return (
    <div className="todos">
      {todos.map((item) => (
        <TodoItem todo={item} />
      ))}
    </div>
  );
};

export default Todos;
