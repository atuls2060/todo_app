import { GET_TODOS } from "./todo.types"
import axios from "axios"

export const getTodos = () => async (dispatch) => {
    try {
        const { data } = await axios.get("http://localhost:8080/tasks")
        dispatch({ type: GET_TODOS, payload: data })
    } catch (error) {
        console.log("error", error.message)
    }
}


export const addTodo = (todo) => async (dispatch) => {

    try {
        const { data } = await axios.post("http://localhost:8080/tasks", todo)
        console.log(data)
        dispatch(getTodos())
    } catch (error) {
        console.log("error", error.message)
    }
}

export const updateTodo = (id, changes) => async (dispatch) => {

    try {
        const { data } = await axios.patch(`http://localhost:8080/tasks/${id}`, changes)
        console.log(data)
        dispatch(getTodos())
    } catch (error) {
        console.log("error", error.message)
    }
}

export const deleteTodo = (id) => async (dispatch) => {

    try {
        const { data } = await axios.delete(`http://localhost:8080/tasks/${id}`)
        console.log(data)
        dispatch(getTodos())
    } catch (error) {
        console.log("error", error.message)
    }
}


export const clearCompletedTodo = () => async (dispatch) => {

    try {
        const { data } = await axios.delete("http://localhost:8080/tasks")
        console.log(data)
        dispatch(getTodos())
    } catch (error) {
        console.log("error", error.message)
    }

}