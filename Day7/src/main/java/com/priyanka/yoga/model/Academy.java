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
@Table(name = "Academy_DB")

public class Academy {

	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long aid;

	    @Column(nullable = false)
	    private String academyImage;

	    @Column(nullable = false)
	    private String academyName;


	    @Column(nullable = false)
	    private String academyLocation;
	    
	    @Column(nullable = false)
	    private String academyPhone;
	    
	    @Column(nullable = false)
	    private String academyEmail;


	    @Column(nullable = false)
	    private String academyDescription;
}
