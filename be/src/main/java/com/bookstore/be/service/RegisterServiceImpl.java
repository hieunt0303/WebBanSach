package com.bookstore.be.service;

import com.bookstore.be.model.Register;
import com.bookstore.be.repository.RegisterReponsitory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class RegisterServiceImpl implements RegisterService{
    @Autowired
    private RegisterReponsitory registerReponsitory;

    public String register(Register register) {
        // kiem tra  mat khau va nhap lai mk co khớp với nhau ko
        if (!register.getPassword().equals(register.getRepassword())) {
            return "Passwords do not match!";
        }
        // Kiểm tra xem email đã tồn tại chưa
        if (registerReponsitory.existsByEmail(register.getEmail())) {
            return "Email đã tồn tại!";
        }

//        // Kiểm tra xác thực số điện thoại
//        if (register.getNumberphone() < 0 && register.getNumberphone() != 0) {
//            return "Số điện thoại không hợp lệ!";
//        }
        register.setRole(Register.DEFAULT_ROLE_STATUS);
        register.setStatus(Register.DEFAULT_ROLE_STATUS);



        // lưu vao  database
        registerReponsitory.save(register);
        return "User registered successfully!";
    }
}

