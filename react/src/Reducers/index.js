import { combineReducers } from "redux";
import tutorials from "./tutorials";

const rootReducer = combineReducers({
  tutorials: tutorials,
});

export default rootReducer;
