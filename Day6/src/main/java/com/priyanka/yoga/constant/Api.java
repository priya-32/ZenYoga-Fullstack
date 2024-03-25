package com.priyanka.yoga.constant;

import java.util.Arrays;
import java.util.List;

public class Api {
    public static final String REACT = "http://localhost:3000";
    public static final String AUTH = "/auth";
    public static final String USER = "/user";
    public static final String ACADEMY = "/academy";
    public static final String COURSE = "/course";
//    public static final String RESULT = "/result";
//    public static final String FEEDBACK = "/feedback";

//    public static final String ORDER = "/order";
    public static final String DEFAULT="http://localhost:8181";
    public static final List<String> HEADERS = Arrays.asList("Authorization", "Content-Type");
    public static final List<String> METHODS = Arrays.asList("GET", "POST", "PUT", "DELETE");
    public static final List<String> ORIGINS = Arrays.asList("http://localhost:3000");
}