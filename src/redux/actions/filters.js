export const searchTodoAction = (q) => ({
  type: "filters/searchTodo",
  payload: q,
});

export const filterStatusAction = (status) => ({
  type: "filters/statusChange",
  payload: status,
});

export const filterPriorityAction = (priorities = []) => ({
  type: "filters/priotityChange",
  payload: priorities,
});
