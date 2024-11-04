import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}

interface TodoState {
  items: Todo[];
  filter: 'all' | 'active' | 'completed';
}

const initialState: TodoState = {
  items: [
    {
      id: 1,
      text: 'Learn Redux Toolkit',
      completed: false,
      priority: 'high',
      dueDate: '2024-03-20',
    },
    {
      id: 2,
      text: 'Build a demo application',
      completed: true,
      priority: 'medium',
      dueDate: '2024-03-18',
    },
    {
      id: 3,
      text: 'Write documentation',
      completed: false,
      priority: 'low',
      dueDate: '2024-03-25',
    },
  ],
  filter: 'all',
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<Todo, 'id'>>) => {
      const newTodo = {
        id: Date.now(),
        ...action.payload,
      };
      state.items.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.items.find(item => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<'all' | 'active' | 'completed'>) => {
      state.filter = action.payload;
    },
    updateTodoPriority: (
      state,
      action: PayloadAction<{ id: number; priority: Todo['priority'] }>
    ) => {
      const todo = state.items.find(item => item.id === action.payload.id);
      if (todo) {
        todo.priority = action.payload.priority;
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setFilter, updateTodoPriority } =
  todoSlice.actions;
export default todoSlice.reducer;