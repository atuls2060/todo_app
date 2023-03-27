import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { todosReducer } from "./todo/todo.reducers";


const rootReducer = combineReducers({
    todosManager: todosReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))