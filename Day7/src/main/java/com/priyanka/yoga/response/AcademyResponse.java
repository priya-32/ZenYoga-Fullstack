package com.priyanka.yoga.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AcademyResponse {
    private Long aid;
    private String academyImage;
    private String academyName;
    private String academyLocation;
    private String academyPhone;
    private String academyEmail;
    private String academyDescription;
	
}