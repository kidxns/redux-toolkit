import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers";

const composeEnhancers = new composeWithDevTools();

const store = createStore(rootReducers, composeEnhancers);

export default store;


