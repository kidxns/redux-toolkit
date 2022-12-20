const initState = [
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
];

const todos = (state = initState, action) => {
  switch (action.type) {
    case "todos/addTodo":
      return [...state, action.payload];

    case "todos/toggleTodoStatus":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todos;
