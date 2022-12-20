import { combineReducers } from "redux";
import todos from "./todos";
import filters from "./filters";

const rootReducers = combineReducers({
  todos, filters
});

export default rootReducers;
