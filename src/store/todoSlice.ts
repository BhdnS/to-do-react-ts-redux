import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IRootTodos, ITodo } from './ITodo.ts'
import initialState from './initialTodos.ts'

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: ITodo = {
        id: Date.now(),
        title: action.payload,
        delete: false,
      }
      state.allTodos.push(newTodo)
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      const index = state.allTodos.findIndex(
        (todo) => todo.id === action.payload
      )

      if (index !== -1) {
        const [deletedTodo] = state.allTodos.splice(index, 1)
        state.deleteTodos.push(deletedTodo)
      }
    },
  },
})

export const { addTodo, deleteTodo } = todosSlice.actions

export const todoSelector = (state: IRootTodos) => state.todos

export default todosSlice.reducer
