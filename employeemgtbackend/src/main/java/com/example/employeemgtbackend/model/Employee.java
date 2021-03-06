package com.example.employeemgtbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotEmpty
    private String name;
    @NotEmpty
    @Email
    private String email;
    @NotEmpty
    private String department;
    @NotEmpty
    private String title;
    @Column(length=1000)
    @NotEmpty
    private String description;

    public Employee(String name, String email, String department, String title, String description) {
        this.name = name;
        this.email = email;
        this.department = department;
        this.title = title;
        this.description = description;
    }
}


