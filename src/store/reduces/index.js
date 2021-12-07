import { combineReducers } from "redux";
import authenticationReducer from "./Authentication";
import pessoaReducer from "./Pessoa";
import cepReducer from "./Cep";

export default combineReducers({
  authenticationReducer,
  pessoaReducer,
  cepReducer
})