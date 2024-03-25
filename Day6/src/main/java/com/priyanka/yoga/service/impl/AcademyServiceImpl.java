package com.priyanka.yoga.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;


import com.priyanka.yoga.model.Academy;
import com.priyanka.yoga.repository.AcademyRepository;
import com.priyanka.yoga.request.AcademyRequest;
import com.priyanka.yoga.response.AcademyResponse;
import com.priyanka.yoga.response.CountResponse;
import com.priyanka.yoga.service.AcademyService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class AcademyServiceImpl implements AcademyService {

    private final AcademyRepository academyRepository;
//    private final CategoryRepository categoryRepository;
//    @Override
    public boolean saveAcademy(AcademyRequest request) {
        if (academyRepository.findByAcademyName(request.getAcademyName()).isPresent()) {
            return false;
        }

        Academy academy = Academy.builder()
                .academyImage(request.getAcademyImage())
                .academyName(request.getAcademyName())
                .academyLocation(request.getAcademyLocation())
                .academyPhone(request.getAcademyPhone())
                .academyEmail(request.getAcademyEmail())
                .academyDescription(request.getAcademyDescription())
//                .category(categoryRepository.findByCid(request.getCid()))
                .build();

        academyRepository.save(academy);
        return true;
    }

// 

   
 

    @Override
    public List<AcademyResponse> getAllAcademys() {
        List<Academy> academyList = academyRepository.findAll();

        return academyList.stream()
                .map(this::mapAcademyToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public AcademyResponse getAcademy(Long aid) {
        Academy academy = academyRepository.findByAid(aid);
        return mapAcademyToResponse(academy);
    }

    @Override
    public AcademyResponse updateAcademy(AcademyRequest request, Long aid) {
        Academy academy = academyRepository.findByAid(aid);

        if (academy != null) {
        	academy.setAcademyImage(request.getAcademyImage());
        	academy.setAcademyName(request.getAcademyName());
        	academy.setAcademyLocation(request.getAcademyLocation());
        	academy.setAcademyPhone(request.getAcademyPhone());
        	academy.setAcademyEmail(request.getAcademyEmail());
        	academy.setAcademyDescription(request.getAcademyDescription());
            
//            product.setCategory(categoryRepository.findByCid(request.getCid()));
        	academyRepository.save(academy);

            return mapAcademyToResponse(academy);
        } else {
            throw new EntityNotFoundException("Academy with academy_id " + aid + " not found");
        }
    }

    @Override
    public boolean deleteAcademy(Long aid) {
    	Academy academy = academyRepository.findByAid(aid);

        if (academy != null) {
        	academyRepository.deleteByAid(aid);
            return true;
        } else {
            return false;
        }
    }

    private AcademyResponse mapAcademyToResponse(Academy academy) {
        return AcademyResponse.builder()
                .aid(academy.getAid())
                .academyImage(academy.getAcademyImage())
                .academyName(academy.getAcademyName())
                .academyLocation(academy.getAcademyLocation())
                .academyPhone(academy.getAcademyPhone())
                .academyEmail(academy.getAcademyEmail())
                .academyDescription(academy.getAcademyDescription())
                
                .build();
    }

    @Override
    public Academy getAcademyModelId(Long aid) {
        return academyRepository.findByAid(aid);
    }

    @Override
    public CountResponse academyCount() {
        long count = academyRepository.count();
        return CountResponse.builder().count(count).build();
    }

	
}