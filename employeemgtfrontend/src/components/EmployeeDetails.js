import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {removeSelectedEmployee, selectedEmployee} from "../redux/actions";


const EmployeeDetails = () =>{
    const {employeeId} = useParams();
    const dispatch = useDispatch();
    const employee = useSelector((state) => state.employee);
    console.log(employee);
    const fetchDetails = async  () => {
        const response = await axios.get(`http://localhost:8080/api/employee/${employeeId}`)
            .catch((err)=>{
                console.log("Err",err);
            });
        dispatch(selectedEmployee(response.data))
    }

    useEffect(() => {
        if(employeeId && employeeId !== "") fetchDetails();
        return () => {
            dispatch(removeSelectedEmployee());
        }
    }, [employeeId]);
    return(
        <div className="ui grid container">
            <p>Hello Employee details</p>
        </div>
    );
};

export default EmployeeDetails;