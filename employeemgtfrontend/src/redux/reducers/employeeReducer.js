import {ActionTypes} from "../actionTypes";

export const employeeReducer = (state=[],action) => {
    switch (action.type){
        case ActionTypes.LIST_EMPLOYEES :
            return {
                ...state, employees:action.payload
            }
        default:
            return state;
    }
};

export const selectedEmployeeReducer = (state={},action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_EMPLOYEE:
            return {
                ...state, ...action.payload
            }
        case ActionTypes.REMOVE_SELECTED_EMPLOYEE:
            return {};
        default:
            return state;
    }
}

export const addEmployeeReducer = (state={},action)=>{
    switch (action.type){
        case ActionTypes.ADD_EMPLOYEE:
            return{
                ...state, employee:action.payload
            }
        default:
            return state;
    }
}