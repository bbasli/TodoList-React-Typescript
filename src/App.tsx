import { useState } from "react";

import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import { Center, Container } from "@chakra-ui/react";

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

  const onUpdateTodo = (updatedTodo: Todo) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );
    });
  };

  return (
    <Container maxW="container.lg" my={4}>
      <Center
        bg="teal"
        w="100%"
        p={4}
        color="white"
        fontWeight="bold"
        fontSize="lg"
      >
        Welcome to TODO App!
      </Center>
      <NewTodo onAddTodo={onAddTodo} />
      <Todos
        items={todos}
        onRemoveTodo={onRemoveTodo}
        onUpdateTodo={onUpdateTodo}
      />
    </Container>
  );
}

export default App;
