import { combineReducers } from 'redux';
import dashboards from 'reducer/dashboard'
import auth from 'reducer/auth'
import { categories } from "reducer/common";

export default combineReducers({
  categories,
  auth
});