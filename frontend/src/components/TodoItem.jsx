import React, { useState } from 'react'
import { Box, Button, Checkbox, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import { BiEdit, BiX } from "react-icons/bi"
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../redux/todo/todo.actions'

const TodoItem = ({ _id, isCompleted, value }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [newTitle, setNewTitle] = useState(value)
  const dispatch = useDispatch();

  const changeStatusHandler = () => {
    dispatch(updateTodo(_id, { isCompleted: !isCompleted }))
  }

  const editHandler = () => {
    onClose()
    dispatch(updateTodo(_id, { value: newTitle }))
  }

  const deleteHandler = () => {
    dispatch(deleteTodo(_id))
  }

  return (
    <HStack justifyContent="space-between" borderBottom="1px solid #e4e4e4" p="10px">
      <HStack>
        <Checkbox isChecked={isCompleted} onChange={changeStatusHandler} />
        <Text textDecoration={isCompleted && "line-through"}>{value}</Text>
      </HStack>
      <HStack>
        <Box onClick={onOpen} cursor="pointer" p="5px">
          <BiEdit />
        </Box>
        <Box onClick={deleteHandler} cursor="pointer" p="5px">
          <BiX />
        </Box>
      </HStack>
      <Modal isOpen={isOpen} closeOnOverlayClick={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text>Edit todo</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder='New title' />
            <Button onClick={editHandler} mt="10px" width="100%">Save</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </HStack>
  )
}

export default TodoItem