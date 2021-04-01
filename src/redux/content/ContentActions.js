import { ADD_TODO_ITEM } from "./ContentTypes";
import { DELETE_TODO_ITEM } from "./ContentTypes";
// import { DELETE_EMPLOYEE } from "./ContentTypes";

export const addToDoListItems = (payload) => {
    return {
        type: ADD_TODO_ITEM,
        payload,
    }
}

export const deleteToDoListItems = (payload,index) => {
    return {
        type: DELETE_TODO_ITEM,
        payload,
        index,
    }
}

export const updateToDoListItems = (payload,index) => {
    return {
        type: UPDATE_TODO_ITEM,
        index,
    }
}

