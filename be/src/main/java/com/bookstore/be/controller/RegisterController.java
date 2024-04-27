package com.bookstore.be.controller;


import com.bookstore.be.model.Register;
import com.bookstore.be.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @PostMapping("/register")
    public String registerUser(@RequestBody Register register) {
        return registerService.register(register);
    }
}
