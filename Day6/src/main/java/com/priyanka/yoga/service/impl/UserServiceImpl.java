package com.priyanka.yoga.service.impl;

import java.util.List;

import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.priyanka.yoga.enumerate.Role;
import com.priyanka.yoga.model.User;
import com.priyanka.yoga.repository.UserRepository;
import com.priyanka.yoga.request.UserRequest;
import com.priyanka.yoga.response.CountResponse;
import com.priyanka.yoga.response.UserResponse;
import com.priyanka.yoga.service.UserService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
//    private final OrderRepository orderRepository;

    @Override
    public List<UserResponse> getAllUsers() {
        List<User> userList = userRepository.findAll();
        return userList.stream()
                .filter(user -> !user.getRole().equals(Role.ADMIN))
                .map(this::mapUserToUserResponse)
                .collect(Collectors.toList());
    }

    @Override
    public UserResponse getUser(Long uid) {
        User user = userRepository.findByUid(uid);
        return mapUserToUserResponse(user);
    }

    @Override
    public UserResponse updateUser(UserRequest request, Long uid) {
        User user = userRepository.findByUid(uid);
        User newUser = new User();
        if (user != null) {
            newUser = User.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(user.getPassword())
                    .role(user.getRole())
                    .isEnabled(request.getIsEnabled())
                    .address(request.getAddress())
                    .phone(request.getPhone())
                    .build();
            userRepository.save(newUser);
        }
        return mapUserToUserResponse(newUser);
    }

//    @Override
//    public boolean deleteProduct(Long uid) {
//        User user = userRepository.findByUid(uid);
//
//        if (user != null) {
//            orderRepository.deleteByUserUid(uid);
//            userRepository.deleteByUid(uid);
//            return true;
//        } else {
//            return false;
//        }
//    }

    private UserResponse mapUserToUserResponse(User user) {
        return UserResponse.builder()
                .uid(user.getUid())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .isEnabled(user.getIsEnabled())
                .address(user.getAddress())
                .phone(user.getPhone())
                .build();
    }

    @Override
    public CountResponse userCount() {
        long count = userRepository.count();
        return CountResponse.builder().count(count).build();
    }

	@Override
	public boolean deleteProduct(Long uid) {
		// TODO Auto-generated method stub
		return false;
	}

}
