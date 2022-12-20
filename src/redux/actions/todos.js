export const addTodoAction = (data) => ({
  type: "todos/addTodo",
  payload: data,
});

export const toggleTodoStatus = (id) => ({
  type: "todos/toggleTodoStatus",
  payload: id,
});
