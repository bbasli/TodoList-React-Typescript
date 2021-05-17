import { useState } from "react";

import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Learn react"),
    new Todo("Learn TypeScript"),
  ]);

  const onAddTodo = (text: string) => {
    setTodos((prevTodos) => {
      return prevTodos.concat(new Todo(text));
    });
  };

  const onRemoveTodo = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={onAddTodo} />
      <Todos items={todos} onRemoveTodo={onRemoveTodo} />
    </div>
  );
}

export default App;
