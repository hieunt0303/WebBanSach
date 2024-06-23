package com.bookstore.be.controller;


import com.bookstore.be.model.User;
import com.bookstore.be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "https://web-ban-sach-five.vercel.app")
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
    public User loginUser(@RequestBody User login) {
        // Gọi phương thức đăng nhập từ UserService
        return userService.login(login.getEmail(), login.getPassword());
    }
    @PutMapping("/change-password/{userId}")
    public String changePassword(
            @PathVariable int userId,
            @RequestBody Map<String, String> passwords
    ) {
        String password = passwords.get("newPassword");
        String repassword = passwords.get("confirmPassword");
        // Gọi phương thức changePassword từ UserService
        return userService.changePassword(userId, password, repassword);
    }

    @DeleteMapping("/removeuser/{userId}")
    public String removeUser(@PathVariable int userId) {
        return userService.removeUser(userId);
    }

    @PutMapping("/updateuser/{userId}")
    public ResponseEntity<String> updateUser(@PathVariable int userId, @RequestBody User updatedUserData) {
        String result = userService.updateUser(userId, updatedUserData);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/adduser")
    public String adduser(@RequestBody User register) {

        return userService.addUser(register);
    }



}
