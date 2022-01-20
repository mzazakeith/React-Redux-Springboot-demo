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