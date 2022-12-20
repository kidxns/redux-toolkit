import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todos;
export const searchSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priority;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchSelector,
  filterStatusSelector,
  filterPrioritySelector,
  (todos, searchText, status, priorities) => {
    const statusReq = status !== "All";
    const priorityReq = priorities.length > 0;
    const todoCompletedCase = status === "Completed";

    return todos.filter((todo) => {
      const searchQuery = todo.content.includes(searchText);
      const priorityQuery = priorities.includes(todo.priority);
      const statusQuery = todoCompletedCase ? todo.completed : !todo.completed;

      if (statusReq && priorityReq) {
        return searchQuery && statusQuery && priorityQuery;
      }

      if (statusReq) {
        return searchQuery && statusQuery;
      }

      if (priorityReq) {
        return searchQuery && priorityQuery;
      }

      return searchQuery;
    });
  }
);

// export const todoListSelector = (state) => {
//   const searchText = searchSelector(state);
//   const todoRemaining = state.todos.data.filter((todo) => {
//     return todo.content.includes(searchText);
//   });

//   return todoRemaining;
// };
