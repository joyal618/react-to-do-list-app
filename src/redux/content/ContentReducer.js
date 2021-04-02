import { ADD_TODO_ITEM } from "./ContentTypes";
import { DELETE_TODO_ITEM } from "./ContentTypes";
import { UPDATE_TODO_ITEM } from "./ContentTypes";


const initialState = {
    toDoListItems: [],
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO_ITEM:
            var date = new Date();
            date = date.toLocaleString('en-US');
            const addToDoListItems = [...state.toDoListItems];
            const newData = {...action.payload, ...{itemCreateTime: date,itemCompletionTime:""}};
            addToDoListItems.push(newData);
            
            return {
                ...state,
                toDoListItems: addToDoListItems,
            }
        case DELETE_TODO_ITEM:
            const deleteToDoListItems = [...state.toDoListItems];
            deleteToDoListItems.splice(action.index, 1);
            return {
                ...state,
                toDoListItems: deleteToDoListItems,
            }

            case UPDATE_TODO_ITEM:
                const updateToDoListItems = [...state.toDoListItems];
                updateToDoListItems[action.index] = action.payload;
                return {
                    ...state,
                    toDoListItems: updateToDoListItems,
                }


        default: return state;
    }
}

export default contentReducer;