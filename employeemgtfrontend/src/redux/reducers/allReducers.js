import { combineReducers } from "redux";
import {employeeReducer, selectedEmployeeReducer} from './employeeReducer'

const reducers = combineReducers({
    allEmployees: employeeReducer,
    employee: selectedEmployeeReducer
});

export default reducers

