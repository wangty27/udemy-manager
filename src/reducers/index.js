import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeListReducer from './EmployeeListReducer';

export default combineReducers({
  authState: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employeeList: EmployeeListReducer
});
