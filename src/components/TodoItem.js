import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodos, updateTodos } from "../redux/itemSlice/TodoSlice";
import "../styles/TodoItem.css" 
const TodoItem = ({todo}) => {
  // const { id, title } = todo;
  const dispatch = useDispatch();
  const [name, setName] = useState(todo.title);
  const [edit, setEdit] = useState(false);
  return (
    <div 
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
      key={todo.id}
      className="crud_todo"
    >
      <div className="crud_todo_edit">
        {edit ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="crud_todo_edit_change"
          />
        ) : (
          <p>{todo.title}</p>
        )}
      </div>
     <div className="crud_todo_delete">
     <div  onClick={() => dispatch(deleteTodos({id: todo.id}))} className="crud_todo_delete_icon">
        <i class="bi bi-trash"></i>
     </div>
    
      <div
        onClick={() => {
          dispatch(
            updateTodos({
              id: todo.id,
              title: name
            })
          );
         
          setEdit(!edit);
        }}
      >
        {edit ? <i class="bi bi-pen"></i> : <i class="bi bi-pen"></i>}
      </div>
      </div>
    </div>
  );
};

export default TodoItem;
