package com.priyanka.yoga.controller;


import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.priyanka.yoga.constant.*;
import com.priyanka.yoga.request.CourseRequest;
import com.priyanka.yoga.response.CountResponse;
import com.priyanka.yoga.response.CourseResponse;
import com.priyanka.yoga.service.CourseService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.COURSE)
@RequiredArgsConstructor
@Tag(name = "Course")
public class CourseController {

    private final CourseService courseService;

    @PostMapping("/add")
    public ResponseEntity<String> saveCourse(@RequestBody CourseRequest request) {
        boolean isSaved = courseService.saveCourse(request);
        return isSaved ? ResponseEntity.status(201).body("Course added successfully!")
                : ResponseEntity.badRequest().build();
    }

    @GetMapping("/get")
    public ResponseEntity<List<CourseResponse>> getAllCourses() {
        List<CourseResponse> courseList = courseService.getAllCourses();
        return !courseList.isEmpty() ? ResponseEntity.status(200).body(courseList)
                : ResponseEntity.noContent().build();
    }

    @GetMapping("/getCount")
    public ResponseEntity<CountResponse> CourseCount() {
        CountResponse countResponse = courseService.courseCount();
        return countResponse.getCount() != 0 ? ResponseEntity.ok().body(countResponse)
                : ResponseEntity.noContent().build();
    }

    @GetMapping("/find/{cid}")
    public ResponseEntity<CourseResponse> getCourse(@PathVariable Long cid) {
    	CourseResponse courseResponse = courseService.getCourse(cid);
        return courseResponse != null ? ResponseEntity.ok().body(courseResponse) : ResponseEntity.notFound().build();
    }

    @PutMapping("/edit/{cid}")
    public ResponseEntity<CourseResponse> updateStudent(@RequestBody CourseRequest request, @PathVariable Long cid) {
    	CourseResponse courseResponse = courseService.updateCourse(request, cid);
        return courseResponse != null ? ResponseEntity.ok().body(courseResponse) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{cid}")
    public ResponseEntity<String> deleteCourse(@PathVariable Long cid) {
        boolean isDeleted = courseService.deleteCourse(cid);
        return isDeleted ? ResponseEntity.ok().body("Course deleted successfully!")
                : ResponseEntity.notFound().build();
    }

}