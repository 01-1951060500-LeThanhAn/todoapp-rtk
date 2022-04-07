import React, { useState, useRef, useEffect} from "react";
import { addTodos } from "../redux/itemSlice/TodoSlice";
import { useSelector, useDispatch } from 'react-redux'
import "../styles/TodoForm.css"
const TodoForm = () => {
  
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      alert("Enter a task before adding !!");
      setValue("");
      return;
    }

    dispatch(
      addTodos({
        title: value,
      })
    );

    setValue("");
  };

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })
  return (
    <div className="input">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter tasks"
        ref={inputRef}
      />
      <button onClick={onSubmit}>Add</button>
    </div>
  );
};

export default TodoForm;
