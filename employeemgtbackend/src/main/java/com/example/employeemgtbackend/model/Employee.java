package com.example.employeemgtbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String email;
    private String department;
    private String title;

    public Employee(String name, String email, String department, String title) {
        this.name = name;
        this.email = email;
        this.department = department;
        this.title = title;
    }
}


