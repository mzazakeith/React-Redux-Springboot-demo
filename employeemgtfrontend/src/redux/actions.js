import {ActionTypes} from './actionTypes'
import axios from "axios";

export const listEmployees = employees => {
    return{
        type: ActionTypes.LIST_EMPLOYEES,
        payload:employees
    }
}

export const selectedEmployee = employee => {
    return{
        type: ActionTypes.SELECTED_EMPLOYEE,
        payload:employee
    }
}

export const removeSelectedEmployee = employee => {
    return{
        type: ActionTypes.REMOVE_SELECTED_EMPLOYEE
    }
}

export const addEmployee = (name, email,department,title,description) => async (dispatch) =>{
    const config = {
        headers:{
            "Content-Type": "application/json",
        }
    };
    const response = await axios.post(``,{name,email,department,title,description},config)
        .catch((err)=>{
            console.log("Err",err);
        });
        dispatch({
            type:ActionTypes.ADD_EMPLOYEE,
            payload:response.data
        })
}
