import { combineReducers } from "redux";
import {addEmployeeReducer, employeeReducer, selectedEmployeeReducer, updateEmployeeReducer} from './employeeReducer'

const reducers = combineReducers({
    allEmployees: employeeReducer,
    employee: selectedEmployeeReducer,
    newEmployee:addEmployeeReducer,
    updatedEmployee:updateEmployeeReducer,
});

export default reducers

