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

export const addEmployee = (name, email, role) => async (dispatch) =>{
    const config = {
        headers:{
            "Content-Type": "application/json",
        }
    };
    const response = await axios.post(``,{name, email, role},config)
        .catch((err)=>{
            console.log("Err",err);
        });
        dispatch({
            type:ActionTypes.ADD_EMPLOYEE,
            payload:response.data
        })
}
