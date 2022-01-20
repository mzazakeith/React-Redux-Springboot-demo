package com.example.employeemgtbackend.controller;

import com.example.employeemgtbackend.model.Employee;
import com.example.employeemgtbackend.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api")
@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeService employeeService;

    @GetMapping("/users")
    public ResponseEntity<List<Employee>>getEmployees(){
        return ResponseEntity.ok().body(employeeService.getEmployees());
    }
}
