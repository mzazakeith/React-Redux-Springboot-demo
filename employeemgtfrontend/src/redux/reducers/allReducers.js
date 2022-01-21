import { combineReducers } from "redux";
import {addEmployeeReducer, employeeReducer, selectedEmployeeReducer} from './employeeReducer'

const reducers = combineReducers({
    allEmployees: employeeReducer,
    employee: selectedEmployeeReducer,
    newEmployee:addEmployeeReducer
});

export default reducers

