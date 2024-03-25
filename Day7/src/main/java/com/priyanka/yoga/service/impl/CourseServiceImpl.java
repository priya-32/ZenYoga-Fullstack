package com.priyanka.yoga.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.priyanka.yoga.request.CourseRequest;
import com.priyanka.yoga.response.CountResponse;
import com.priyanka.yoga.response.CourseResponse;
import com.priyanka.yoga.service.CourseService;
import com.priyanka.yoga.model.Course;
import com.priyanka.yoga.repository.CourseRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepository  courseRepository;
//    private final CategoryRepository categoryRepository;
//    @Override
    public boolean saveCourse(CourseRequest request) {
        if (courseRepository.findByCourseName(request.getCourseName()).isPresent()) {
            return false;
        }

        Course course = Course.builder()
                .courseName(request.getCourseName())
                .courseDuration(request.getCourseDuration())
                .courseTime(request.getCourseTime())
                .courseStudentNo(request.getCourseStudentNo())
                .courseDescription(request.getCourseDescription())
//                .category(categoryRepository.findByCid(request.getCid()))
                .build();

        courseRepository.save(course);
        return true;
    }


    @Override
    public List<CourseResponse> getAllCourses() {
        List<Course> courseList = courseRepository.findAll();

        return courseList.stream()
                .map(this::mapCourseToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public CourseResponse getCourse(Long cid) {
    	Course course = courseRepository.findByCid(cid);
        return mapCourseToResponse(course);
    }

    @Override
    public CourseResponse updateCourse(CourseRequest request, Long cid) {
    	Course course = courseRepository.findByCid(cid);

        if (course != null) {
        	course.setCourseName(request.getCourseName());
        	course.setCourseDuration(request.getCourseDuration());
        	course.setCourseTime(request.getCourseTime());
        	course.setCourseStudentNo(request.getCourseStudentNo());
        	course.setCourseDescription(request.getCourseDescription());
            
//            product.setCategory(categoryRepository.findByCid(request.getCid()));
        	courseRepository.save(course);

            return mapCourseToResponse(course);
        } else {
            throw new EntityNotFoundException("Course with course_id " + cid + " not found");
        }
    }

    @Override
    public boolean deleteCourse(Long cid) {
    	Course course = courseRepository.findByCid(cid);

        if (course != null) {
        	courseRepository.deleteByCid(cid);
            return true;
        } else {
            return false;
        }
    }

    private CourseResponse mapCourseToResponse(Course course) {
        return CourseResponse.builder()
                .cid(course.getCid())
                .courseName(course.getCourseName())
                .courseDuration(course.getCourseDuration())
                .courseTime(course.getCourseTime())
                .courseStudentNo(course.getCourseStudentNo())
                .courseDescription(course.getCourseDescription())
                .build();
    }

    @Override
    public Course getCourseModelId(Long cid) {
        return courseRepository.findByCid(cid);
    }

    @Override
    public CountResponse courseCount() {
        long count = courseRepository.count();
        return CountResponse.builder().count(count).build();
    }

	
}