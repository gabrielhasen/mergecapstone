import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import billingReducer from "./billingReducer";
import userReducer from './userReducer';
import machineReducer from './machineReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  codes: billingReducer,
  users: userReducer,
  machines: machineReducer
});
