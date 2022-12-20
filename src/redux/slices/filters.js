import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchTodo: (state, action) => {
      state.search = action.payload;
    },

    statusChange: (state, action) => {
      state.status = action.payload;
    },

    priotityChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});
