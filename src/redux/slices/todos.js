import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      content: "Learn english",
      completed: false,
      priority: "Medium",
    },
    {
      id: 2,
      content: "Learn code",
      completed: false,
      priority: "Low",
    },
    {
      id: 3,
      content: "Something",
      completed: true,
      priority: "High",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => (todo.id === action.payload));
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
