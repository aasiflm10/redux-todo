import { type Middleware } from '@reduxjs/toolkit';

export const loggerMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  console.log('%c Dispatching:', 'color: green;', action);
  const result = next(action);
  console.log('%c Next state:', 'color: blue;', storeAPI.getState());
  return result;
};
