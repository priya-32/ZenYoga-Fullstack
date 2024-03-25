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

import com.priyanka.yoga.response.AcademyResponse;
import com.priyanka.yoga.response.CountResponse;
import com.priyanka.yoga.service.AcademyService;
import com.priyanka.yoga.constant.*;
import com.priyanka.yoga.request.AcademyRequest;


import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.ACADEMY)
@RequiredArgsConstructor
@Tag(name = "Academy")
public class AcademyController {

    private final AcademyService academyService;

    @PostMapping("/add")
    public ResponseEntity<String> saveAcademy(@RequestBody AcademyRequest request) {
        boolean isSaved = academyService.saveAcademy(request);
        return isSaved ? ResponseEntity.status(201).body("Academy added successfully!")
                : ResponseEntity.badRequest().build();
    }

    @GetMapping("/get")
    public ResponseEntity<List<AcademyResponse>> getAllAcademys() {
        List<AcademyResponse> academyList = academyService.getAllAcademys();
        return !academyList.isEmpty() ? ResponseEntity.status(200).body(academyList)
                : ResponseEntity.noContent().build();
    }

    @GetMapping("/getCount")
    public ResponseEntity<CountResponse> AcademyCount() {
        CountResponse countResponse = academyService.academyCount();
        return countResponse.getCount() != 0 ? ResponseEntity.ok().body(countResponse)
                : ResponseEntity.noContent().build();
    }

    @GetMapping("/find/{aid}")
    public ResponseEntity<AcademyResponse> getAcademy(@PathVariable Long aid) {
        AcademyResponse academyResponse = academyService.getAcademy(aid);
        return academyResponse != null ? ResponseEntity.ok().body(academyResponse) : ResponseEntity.notFound().build();
    }

    @PutMapping("/edit/{aid}")
    public ResponseEntity<AcademyResponse> updateAcademy(@RequestBody AcademyRequest request, @PathVariable Long aid) {
    	AcademyResponse academyResponse = academyService.updateAcademy(request, aid);
        return academyResponse != null ? ResponseEntity.ok().body(academyResponse) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{aid}")
    public ResponseEntity<String> deleteAcademy(@PathVariable Long aid) {
        boolean isDeleted = academyService.deleteAcademy(aid);
        return isDeleted ? ResponseEntity.ok().body("Academy deleted successfully!")
                : ResponseEntity.notFound().build();
    }

}