import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodoInput from "./components/AddTodoInput";
import TodoItem from "./components/TodoItem";
import { clearCompletedTodo, getTodos } from "./redux/todo/todo.actions";

function App() {
  const dispatch = useDispatch()
  const { todos } = useSelector((store) => store.todosManager)

  const clearCompletedHandler = () => {
    dispatch(clearCompletedTodo())
  }

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  return (
    <>
      <Box height="100vh">
        <VStack align="stretch" spacing="20px" mt="50px" maxW="500px" mx="auto">
          <Heading>Tasks</Heading>
          <AddTodoInput />
          <Box border="1px solid #e4e4e4">
            {
              todos.map((todo) => {
                return <TodoItem key={todo._id} {...todo} />
              })
            }
            <HStack p="10px" justifyContent="space-between" color="gray.500">
              <Text>{todos.length} items left</Text>
              <Text onClick={clearCompletedHandler} cursor="pointer">Clear Completed</Text>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
}

export default App;
