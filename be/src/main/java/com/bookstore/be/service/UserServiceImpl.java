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
        // Kiểm tra độ dài mật khẩu
        if (register.getPassword().length() < 8) {
            return "Password must be at least 8 characters long!";
        }
        // Kiểm tra xem mật khẩu có ít nhất 1 số, 1 chữ hoa và 1 kí tự đặc biệt
        if (!register.getPassword().matches("^(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$")) {
            return "Password must contain at least one digit, one uppercase letter, and one special character!";
        }
        // Kiểm tra định dạng email
        if (!register.getEmail().matches("^\\w+@gmail\\.com$")) {
            return "Email must be in the format example@gmail.com!";
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


    @Override
    public String changePassword(int userId, String password, String repassword) {
        // Kiểm tra xem userId có tồn tại trong hệ thống không
        User user = userReponsitory.findById(userId).orElse(null);
        if (user == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found!");
        }

        // Kiểm tra độ dài mật khẩu mới
        if (password.length() < 8) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Password must be at least 8 characters long!");
        }

        // Kiểm tra xem mật khẩu mới và nhập lại mật khẩu khớp nhau không
        if (!password.equals(repassword)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Passwords do not match!");
        }

        // Cập nhật mật khẩu mới
        user.setPassword(password);
        user.setRepassword(repassword);
        userReponsitory.save(user);

        return "Password updated successfully!";
    }



    @Override
    public boolean isUserExists(int userId) {
        return userReponsitory.existsById(userId);
    }





}

