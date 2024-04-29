package com.bookstore.be.controller;


import com.bookstore.be.model.Register;
import com.bookstore.be.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @PostMapping("/register")
    public String registerUser(@RequestBody Register register) {
        return registerService.register(register);
    }

    @GetMapping("/register/{id}")
    public Register getUserRegister(@PathVariable int id) {
        return registerService.getUserRegister(id);
    }
    @GetMapping("/registerall")
    public List<Register> getAllUserRegisters() {
        return registerService.getAllUserRegisters();
    }


}
