import { combineReducers } from "redux";
import auth from './auth';
import errors from './errors';
import texts from './texts';

const reducers = combineReducers({
  auth,
  errors,
  texts
});
export default reducers;