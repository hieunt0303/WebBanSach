package com.bookstore.be.controller;


import com.bookstore.be.model.User;
import com.bookstore.be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired

    private UserService userService;

    @PostMapping("/register")
    public String registerUser(@RequestBody User register) {
        return userService.register(register);
    }

    @GetMapping("/register/{id}")
    public User getUserRegister(@PathVariable int id) {
        return userService.getUserRegister(id);
    }
    @GetMapping("/registerall")
    public List<User> getAllUserRegisters() {
        return userService.getAllUserRegisters();
    }
    @PostMapping("/login")
    public String loginUser(@RequestBody User login) {
        // Gọi phương thức đăng nhập từ UserService
        return userService.login(login.getEmail(), login.getPassword());
    }


}
