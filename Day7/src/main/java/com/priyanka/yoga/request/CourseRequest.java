package com.priyanka.yoga.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseRequest {
    private Long cid;
    private String courseName;
    private String courseDuration;
    private String courseTime;
    private String courseStudentNo;
    private String courseDescription;
	
}