import { combineReducers } from "redux";
import authenticationReducer from "./Authentication";
import pessoaReducer from "./Pessoa";

export default combineReducers({
  authenticationReducer,
  pessoaReducer
})