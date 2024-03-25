package com.priyanka.yoga.service;

import org.springframework.stereotype.Service;

import com.priyanka.yoga.request.AuthenticationRequest;
import com.priyanka.yoga.request.RegisterRequest;
import com.priyanka.yoga.response.AuthenticationResponse;




@Service
public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
