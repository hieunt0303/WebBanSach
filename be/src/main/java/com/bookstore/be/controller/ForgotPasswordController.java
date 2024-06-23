package com.bookstore.be.controller;

import com.bookstore.be.model.PasswordGenerator;
import com.bookstore.be.model.User;
import com.bookstore.be.model.UserRequest;
import com.bookstore.be.repository.UserReponsitory;
import com.bookstore.be.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "https://webbansach-production.up.railway.app")
@RestController
public class ForgotPasswordController {
    @Autowired
    private JavaMailSender emailSender;

    @Autowired
    private UserReponsitory userRepository;
    @Autowired
    private UserServiceImpl userService;

    public ForgotPasswordController() {
    }

    @PostMapping("/forgotpassword")
    public String forgotPassword(@RequestBody UserRequest userRequest) {
        try {
            String email = userRequest.getEmail();
            User user = userRepository.findByEmail(email);

            if (user == null) {
                return "User not found";
            }

            // Generate new password
            String newPassword = PasswordGenerator.generateRandomPassword(10); // Change 10 to your desired password length

            // Update user's password
            String hashedPassword = userService.hashPassword(newPassword);
            user.setPassword(hashedPassword);
            user.setRepassword(hashedPassword);
            userRepository.save(user);

            // Send email with new password
            sendEmail(email, "New Password", "Mật khẩu mới của bạn là: " + newPassword);

            return "Mật khẩu đã được gửi về email của bạn. Vui lòng kiểm tra email để lấy lại mật khẩu.";
        } catch (Exception e) {
            return "Error occurred while resetting the password";
        }
    }

    private void sendEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        emailSender.send(message);
    }
 
}
