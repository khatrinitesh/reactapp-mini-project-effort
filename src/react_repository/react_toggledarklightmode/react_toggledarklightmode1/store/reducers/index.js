import { combineReducers } from "redux";
import darkModeReducer from "./darkmodereducer";

export default combineReducers({
  darkMode: darkModeReducer,
});
