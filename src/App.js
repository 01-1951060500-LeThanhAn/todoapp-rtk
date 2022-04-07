import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>Todo App Redux Toolkit</h1>
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
