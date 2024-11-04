import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import { saveState, loadState } from './localStorage';
import { debounce } from 'lodash';

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: persistedState,
});

// Save state to localStorage whenever it changes
store.subscribe(
  debounce(() => {
    saveState({
      todos: store.getState().todos
    });
  }, 1000)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;