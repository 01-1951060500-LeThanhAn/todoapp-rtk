import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./itemSlice/TodoSlice";
const store = configureStore({
  reducer: {
    todos: TodoSlice,
  },
});

export default store
