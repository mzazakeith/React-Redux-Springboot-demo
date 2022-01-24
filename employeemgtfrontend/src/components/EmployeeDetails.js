import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {removeSelectedEmployee, selectedEmployee} from "../redux/actions";
import {Link, useParams} from "react-router-dom";


const EmployeeDetails = () =>{
    const dispatch = useDispatch();
    const {employeeId} = useParams();
    const employee = useSelector((state) => state.employee);
    console.log(employee);
    const fetchDetails = async  () => {
        const response =
            await axios.get(`http://localhost:8080/api/employee/${employeeId}`)
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
            {Object.keys(employee).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <Link to={`/update/employee/${employee.id}`}>
                    <div>{employee.name}</div>
                </Link>
                )}

        </div>
    );
};

export default EmployeeDetails;