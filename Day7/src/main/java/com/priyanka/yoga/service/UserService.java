package com.priyanka.yoga.service;

import java.util.List;


import com.priyanka.yoga.request.UserRequest;
import com.priyanka.yoga.response.CountResponse;
import com.priyanka.yoga.response.UserResponse;






public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

    CountResponse userCount();

}
