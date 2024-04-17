import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [
            {
                id: 1,
                text: 'Hello World'
            }
        ]
    },
    reducers: {
        addToDo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        deleteToDo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addToDo, deleteToDo} = todoSlice.actions;
export default todoSlice.reducer;