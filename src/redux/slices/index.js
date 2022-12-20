import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todos";
import filtersSlice from "./filters";

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    filters: filtersSlice.reducer,
  },
});

export default store;
