import React, { useRef } from "react";

import TodoItem from "../models/todo";

const Todo: React.FC<{ item: TodoItem; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  const todoIdRef = useRef<HTMLInputElement>(null);

  const handleDeleteTodo = (event: React.FormEvent) => {
    event.preventDefault();

    const removeId = todoIdRef.current!.value;
    props.onRemoveTodo(removeId);
  };

  return (
    <li>
      <form onSubmit={handleDeleteTodo}>
        <b>Task: {props.item.text}</b>
        <br />
        <input type="hidden" value={props.item.id} ref={todoIdRef} />
        <span>Date: {new Date(props.item.date).toDateString()}</span>
        <br />
        <button>Delete</button>
        <br />
        <br />
      </form>
    </li>
  );
};

export default Todo;
