import { combineReducers } from "redux";
import indico from "./indico";
import colors from "./colors";
import questions from "./questions";

export default combineReducers({
  indico,
  colors,
  questions
});
