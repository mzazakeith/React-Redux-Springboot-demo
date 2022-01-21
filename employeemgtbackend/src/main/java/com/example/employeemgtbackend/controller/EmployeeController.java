package com.example.employeemgtbackend.controller;

import com.example.employeemgtbackend.exception.EmployeeNotFoundException;
import com.example.employeemgtbackend.model.Employee;
import com.example.employeemgtbackend.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
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
    @PostMapping("/employee/save")
    public ResponseEntity<Employee>saveUser(@Valid @RequestBody Employee employee){
        return new ResponseEntity<Employee>(employeeService.saveEmployee(employee), HttpStatus.CREATED);
    }

    @PutMapping("/employee/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable("id") @Valid long employeeId, @RequestBody Employee employee) throws EmployeeNotFoundException {
        return new ResponseEntity<Employee>(employeeService.updateEmployee(employee,employeeId),HttpStatus.ACCEPTED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") long employeeId) throws EmployeeNotFoundException {
        employeeService.deleteEmployee(employeeId);
        return new ResponseEntity<String>("Employee deleted successfully", HttpStatus.OK);
    }
}
