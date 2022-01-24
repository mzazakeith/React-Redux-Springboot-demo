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
            "Access-Control-Allow-Origin": "*",
        }
    };
    const response = await axios.post("http://localhost:8080/api/employee/save",{name,email,department,title,description},config)
        .catch((err)=>{
            console.log("Err",err);
        });
        dispatch({
            type:ActionTypes.ADD_EMPLOYEE,
            payload:response.data
        })
}

export const updateEmployee = (employeeId,name, email, department, title, description) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        }
    };
    const response = await axios.put(`http://localhost:8080/api/employee/update/${employeeId}`,{name, email, department, title, description},config)
        .catch((err)=>{
            console.log("Err",err);
        });
        dispatch({
            type:ActionTypes.UPDATE_EMPLOYEE,
            payload:response.data
        })
}

export const deleteEmployee = (employeeId) => async (dispatch) => {
    const config = {
        headers:{
            "Access-Control-Allow-Origin": "*",
        }
    }
    const response = await axios.delete(`http://localhost:8080/api/employee/delete/${employeeId}`,config)
        .catch((err)=>{
            console.log("Err",err);
        });
    dispatch({
        type:ActionTypes.UPDATE_EMPLOYEE,
        payload:response.data
    })

}
