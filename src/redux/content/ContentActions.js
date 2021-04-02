import { ADD_TODO_ITEM } from "./ContentTypes";
import { DELETE_TODO_ITEM } from "./ContentTypes";
import { UPDATE_TODO_ITEM } from "./ContentTypes";
import { UPDATE_TIME } from "./ContentTypes";

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

export const updateToDoListItems = (index) => {
    return {
        type: UPDATE_TODO_ITEM,
        index,
    }
}

export const updateTime = (index) => {
    return {
        type: UPDATE_TIME,
        index,
    }
}

