import React, { useState } from 'react'
import { Button, Checkbox, HStack, Input } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todo/todo.actions'

const AddTodoInput = () => {
  const [value, setValue] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  const dispatch = useDispatch();

  const addHandler = () => {
    const newTodo = { value, isCompleted }
    if (value === "") {
      alert("Task Can't be empty")
      return
    }
    dispatch(addTodo(newTodo))
    setValue("")
    setIsCompleted(false)
  }

  return (
    <HStack px="10px" py="5px" border="1px solid #e4e4e4" borderRadius="4px">
      <Checkbox isChecked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)} />
      <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Create a new Task...' border="none" focusBorderColor="transparent" />
      <Button onClick={addHandler}>Add</Button>
    </HStack>
  )
}

export default AddTodoInput