import React from "react";
import "./App.scss";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
