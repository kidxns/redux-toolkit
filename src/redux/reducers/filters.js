const initState = {
  search: "",
  status: "All",
  priority: [],
};

const filters = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchTodo":
      return {
        ...state,
        search: action.payload,
      };

    case "filters/statusChange":
      return {
        ...state,
        status: action.payload,
      };

    case "filters/priotityChange":
      return {
        ...state,
        priority: action.payload,
      };
      
    default:
      return state;
  }
};

export default filters;
