package com.priyanka.yoga.service;


import java.util.List;

import com.priyanka.yoga.model.Course;
import com.priyanka.yoga.request.CourseRequest;
import com.priyanka.yoga.response.CountResponse;
import com.priyanka.yoga.response.CourseResponse;




public interface CourseService{

    boolean saveCourse(CourseRequest request);

    List<CourseResponse> getAllCourses();

    CourseResponse getCourse(Long cid);

    CourseResponse updateCourse(CourseRequest request, Long cid);

    boolean deleteCourse(Long cid);

    Course getCourseModelId(Long cid);

    CountResponse courseCount();

}
