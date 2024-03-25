package com.priyanka.yoga.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.priyanka.yoga.model.Course;




public interface CourseRepository  extends JpaRepository<Course , Long> {

    Optional<Course> findByCourseName(String academyName);

    Course findByCid(Long cid);

    void deleteByCid(Long cid);

}
