import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todos/todoSlice';
import { loggerMiddleware } from './middleware/logger';

export const store = configureStore({
  reducer: {
    todos: todoReducer, // ✅ This is important
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware), // ✅ add logger
  devTools : true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
