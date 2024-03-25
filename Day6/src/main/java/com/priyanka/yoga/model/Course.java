package com.priyanka.yoga.model;


import jakarta.persistence.Column;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Course_db")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cid;

    @Column(nullable = false)
    private String courseName;

    @Column(nullable = false)
    private String courseDuration;

    @Column(nullable = false)
    private String courseTime;

    @Column(nullable = false)
    private String courseStudentNo;

    @Column(nullable = false)
    private String courseDescription;
    
    
    

    
//    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//    private Category category;
}

