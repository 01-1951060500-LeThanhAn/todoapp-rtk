import { createSlice, nanoid } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("todos") !== null
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

const initialState = {
  value: items,
};
export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const newTodos = {
        id: nanoid(),
        title: action.payload.title,
      };
      state.value.push(newTodos);
      localStorage.setItem("todos", JSON.stringify(state.value));
    },
    deleteTodos: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(state.value));
    },
    updateTodos: (state, action) => {
       state.value = state.value.map((todo) => {
         if(todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title
          }
         }

         return todo;
       })
    },
  },
});

export const { addTodos, deleteTodos, updateTodos } = TodoSlice.actions;
export default TodoSlice.reducer;
