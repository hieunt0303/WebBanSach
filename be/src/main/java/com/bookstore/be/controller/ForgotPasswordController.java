package com.bookstore.be.controller;

import com.bookstore.be.model.PasswordGenerator;
import com.bookstore.be.model.User;
import com.bookstore.be.model.UserRequest;
import com.bookstore.be.repository.UserReponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ForgotPasswordController {
    @Autowired
    private JavaMailSender emailSender;

    @Autowired
    private UserReponsitory userRepository;

    public ForgotPasswordController() {
    }

    @PostMapping("/forgotpassword")
    public String forgotPassword(@RequestBody UserRequest userRequest) {
        String email = userRequest.getEmail();
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return "User not found";
        }

        // random pass
        String newPassword = PasswordGenerator.generateRandomPassword(10); // Change 10 to your desired password length

        // cập nhật pass cho user
        user.setPassword(newPassword);
        user.setRepassword(newPassword);
        userRepository.save(user);

        // gửi email với pass mới
        sendEmail(email, "New Password", "Mật khẩu mới của bạn là: " + newPassword);

        return "Mật khẩu đã được gửi về mail của bạn hãy check";
    }


    private void sendEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        emailSender.send(message);
    }
 
}
