import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {deleteEmployee, removeSelectedEmployee, selectedEmployee} from "../redux/actions";
import {Link, useParams, useHistory} from "react-router-dom";


const EmployeeDetails = () =>{
    const dispatch = useDispatch();
    const history = useHistory();
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

    const deleteHandler = () => {
        dispatch(deleteEmployee(employeeId))
        history.push("/");
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
                <div className="ui grid container">
                    <Link to={`/update/employee/${employee.id}`}>
                        <div>{employee.name}</div>
                    </Link>
                    <button onClick={deleteHandler} className="trash-btn"><i className="trash alternate icon"/></button>
                </div>
                )}
        </div>
    );
};

export default EmployeeDetails;