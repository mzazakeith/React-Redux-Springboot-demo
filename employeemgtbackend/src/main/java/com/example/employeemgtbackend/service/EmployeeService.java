package com.example.employeemgtbackend.service;

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
}
