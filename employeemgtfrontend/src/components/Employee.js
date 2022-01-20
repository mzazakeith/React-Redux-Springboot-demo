import React from "react";
import { useSelector } from "react-redux";

const Employee = () =>{
    const employees = useSelector((state) => state.allEmployees.employees);
    console.log(employees);
    return(
        <div className="ui grid container">
            <p>Hello Employee</p>
        </div>
    );
};

export default Employee;