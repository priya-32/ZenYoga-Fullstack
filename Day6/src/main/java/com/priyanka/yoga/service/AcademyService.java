package com.priyanka.yoga.service;


import java.util.List;

import com.priyanka.yoga.model.Academy;
import com.priyanka.yoga.request.AcademyRequest;
import com.priyanka.yoga.response.AcademyResponse;
import com.priyanka.yoga.response.CountResponse;




public interface AcademyService {

    boolean saveAcademy(AcademyRequest request);

    List<AcademyResponse> getAllAcademys();

    AcademyResponse getAcademy(Long aid);

    AcademyResponse updateAcademy(AcademyRequest request, Long aid);

    boolean deleteAcademy(Long aid);

    Academy getAcademyModelId(Long aid);

    CountResponse academyCount();

}
