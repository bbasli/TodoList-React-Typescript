import React from "react";

import Todo from "../models/todo";
import TodoItem from "./Todo";

const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} item={item} onRemoveTodo={props.onRemoveTodo} />
      ))}
    </ul>
  );
};

export default Todos;
