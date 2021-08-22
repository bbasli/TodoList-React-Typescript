import { AddIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Input } from "@chakra-ui/react";
import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = ({
  onAddTodo,
}) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = () => {
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) return;
    onAddTodo(enteredText);
    todoTextInputRef.current!.value = '';
  };

  const handleEnter = (event: any) => {
    if (event.key === "Enter") {
      submitHandler();
    }
  };

  return (
    <HStack align="stretch" mt={4}>
      <Input
        placeholder="e.g Tidy my room"
        ref={todoTextInputRef}
        onKeyDown={handleEnter}
      />
      <IconButton
        aria-label="Add todo"
        icon={<AddIcon />}
        onClick={submitHandler}
      />
    </HStack>
  );
};

export default NewTodo;
