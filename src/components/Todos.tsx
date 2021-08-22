import { Box } from "@chakra-ui/react";
import React from "react";

import Todo from "../models/todo";
import TodoItem from "./Todo";

const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (id: string) => void;
  onUpdateTodo: (todo: Todo) => void;
}> = ({ items, onRemoveTodo, onUpdateTodo }) => {
  return (
    <Box width="100%" mt={10}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onRemoveTodo={onRemoveTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </Box>
  );
};

export default Todos;
