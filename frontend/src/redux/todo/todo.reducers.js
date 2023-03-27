import { GET_TODOS } from "./todo.types"

const initialState = {
    todos: []
}

export const todosReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case GET_TODOS: {
            return {
                ...state,
                todos: payload
            }
        }

        default: {
            return state
        }
    }
}