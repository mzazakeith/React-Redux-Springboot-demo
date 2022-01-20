package com.example.employeemgtbackend.repository;

import com.example.employeemgtbackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    
}
