package com.example.employeemgtbackend.controller;

import com.example.employeemgtbackend.exception.EmployeeNotFoundException;
import com.example.employeemgtbackend.model.Employee;
import com.example.employeemgtbackend.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api")
@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeService employeeService;

    @GetMapping("/employees")
    public ResponseEntity<List<Employee>>getEmployees(){
        return ResponseEntity.ok().body(employeeService.getEmployees());
    }
    @GetMapping("/employee/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") long employeeId) throws EmployeeNotFoundException {
        return new ResponseEntity<Employee>(employeeService.getEmployeeById(employeeId), HttpStatus.OK);
    }


}
