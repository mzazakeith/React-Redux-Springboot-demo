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
    @Column(length=1000)
    private String description;

    public Employee(String name, String email, String department, String title, String description) {
        this.name = name;
        this.email = email;
        this.department = department;
        this.title = title;
        this.description = description;
    }
}


