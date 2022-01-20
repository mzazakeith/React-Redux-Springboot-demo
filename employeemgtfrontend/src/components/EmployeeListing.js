import React, {useEffect} from "react";
import Employee from "./Employee";
import { useDispatch } from "react-redux";
import axios from "axios";
import {listEmployees} from '../redux/actions'

const EmployeeListing = () =>{
    const dispatch = useDispatch();

    const fetchEmployees = async () => {
        const response =
            await axios.get('http://localhost:8080/api/employees')
                .catch((err)=>{
                    console.log("Err",err);
                });
        dispatch(listEmployees(response.data));
    };

    useEffect(() => {
        fetchEmployees();
    },[]);

    return(
        <div className="ui grid container">
            <Employee/>
        </div>
    );
};

export default EmployeeListing;