package com.priyanka.yoga.repository;

import java.util.Optional;



import org.springframework.data.jpa.repository.JpaRepository;

import com.priyanka.yoga.model.Academy;



public interface AcademyRepository extends JpaRepository<Academy , Long> {

    Optional<Academy> findByAcademyName(String academyName);

    Academy findByAid(Long aid);

    void deleteByAid(Long aid);

}
