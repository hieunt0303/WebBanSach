package com.bookstore.be.service;

import com.bookstore.be.model.User;
import com.bookstore.be.repository.UserReponsitory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service

public class UserServiceImpl implements UserService {
    @Autowired
    private UserReponsitory userReponsitory;


    public String register(User register) {
        // kiem tra  mat khau va nhap lai mk co khớp với nhau ko
        if (!register.getPassword().equals(register.getRepassword())) {
            return "Passwords do not match!";
        }
        // Kiểm tra xem email đã tồn tại chưa
        if (userReponsitory.existsByEmail(register.getEmail())) {
            return "Email đã tồn tại!";
        }



        register.setRole(User.DEFAULT_ROLE_STATUS);
        register.setStatus(User.DEFAULT_ROLE_STATUS);



        // lưu vao  database
        userReponsitory.save(register);
        return "User registered successfully!";
    }



//    public String login(String email, String password) {
//        // Kiểm tra xác thực người dùng
//        User user = userReponsitory.findByEmail(email);
//        if (user == null) {
//            return "Email không tồn tại!";
//        } else if (!user.getPassword().equals(password)) {
//            return "Sai mật khẩu!";
//        } else {
//            return "Đăng nhập thành công!";
//        }
//    }
public User login(String email, String password) {
    // Kiểm tra xác thực người dùng
    User user = userReponsitory.findByEmail(email);
    if (user == null) {
        // Email không tồn tại, ném ngoại lệ ResponseStatusException với mã trạng thái 403
        throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Email không tồn tại");
    } else if (!user.getPassword().equals(password)) {
        // Sai mật khẩu, ném ngoại lệ ResponseStatusException với mã trạng thái 403
        throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Sai mật khẩu");
    } else {
        // Đăng nhập thành công, trả về đối tượng User
        return user;
    }

}



    @Override
    public User getUserRegister(int userId) {
        return userReponsitory.findById(userId).orElse(null);
    }

    @Override
    public List<User> getAllUserRegisters() {
        return userReponsitory.findAll();
    }



}

