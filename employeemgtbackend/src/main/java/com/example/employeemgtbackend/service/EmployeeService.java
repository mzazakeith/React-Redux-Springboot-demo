package com.example.employeemgtbackend.service;

import com.example.employeemgtbackend.exception.EmployeeNotFoundException;
import com.example.employeemgtbackend.model.Employee;
import com.example.employeemgtbackend.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public List<Employee> getEmployees() {
        log.info("Fetching all users");
        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(long id) throws EmployeeNotFoundException {
        log.info("Fetching user with id {}", id);
        return employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFoundException("Employee", "Id",id));
    }

    public Employee saveEmployee(Employee employee) {
        log.info("Saving new user {} to the database", employee.getName());
        return employeeRepository.save(employee);
    }
}
