import { combineReducers } from 'redux';
import auth from 'reducer/auth';
import { categories } from "reducer/common";
import dashboards from 'reducer/dashboard';
import * as history from "./history";

export default combineReducers({
  categories,
  auth,
  dashboards,
  history
});