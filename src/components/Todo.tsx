import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import React, { useRef } from "react";

import TodoItem from "../models/todo";

const Todo: React.FC<{
  item: TodoItem;
  onRemoveTodo: (id: string) => void;
  onUpdateTodo: (todo: TodoItem) => void;
}> = ({ item, onRemoveTodo, onUpdateTodo }) => {
  const todoIdRef = useRef<HTMLInputElement>(null);

  const handleDeleteTodo = (event: React.FormEvent) => {
    event.preventDefault();

    const removeId = todoIdRef.current!.value;
    onRemoveTodo(removeId);
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      py={2}
      pl={5}
      mt={3}
      width="100%"
      color="white"
      borderColor="red.300"
      fontWeight="bold"
      background="orange.300"
    >
      <Editable defaultValue={item.text}>
        <EditablePreview />
        <EditableInput focusBorderColor="pink.400" />
      </Editable>
    </Box>
  );
};

export default Todo;
