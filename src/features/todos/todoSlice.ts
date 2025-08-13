import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [], // ✅ must be an array
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: crypto.randomUUID(),
        title: action.payload,
        completed: false,
      });
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<{id: string, newTitle: string}>) => {
      const todo = state.todos.find(t => t.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.newTitle;
      }
    }

  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  }

});

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    // simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return [
      { id: crypto.randomUUID(), title: 'Learn Redux', completed: false },
      { id: crypto.randomUUID(), title: 'Build a project', completed: false },
    ];
  }
);


export const { addTodo, toggleTodo, deleteTodo, editTodo} = todoSlice.actions;
export default todoSlice.reducer;
