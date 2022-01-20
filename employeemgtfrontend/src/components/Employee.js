import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const Employee = () =>{
    const employees = useSelector((state) => state.allEmployees.employees);
    return(
        <div className="ui grid container">
                {employees && employees.map((employee)=>{
                    return(
                        <div className="four wide column" key={employee.id}>
                            <Link to={`/employee/${employee.id}`}>
                                <div className="ui link cards">
                                    <div className="card">
                                        <div className="image">
                                            <img src="https://i.pravatar.cc" alt={employee.name} />
                                        </div>
                                        <div className="content">
                                            <div className="header">{employee.name}</div>
                                            <div className="meta description">{employee.title}</div>
                                            <div className="meta description">{employee.department}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
        </div>
    );
};

export default Employee;