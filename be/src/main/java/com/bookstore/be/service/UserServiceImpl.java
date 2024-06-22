package com.bookstore.be.service;

import com.bookstore.be.model.User;
import com.bookstore.be.repository.UserReponsitory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;

@Service

public class UserServiceImpl implements UserService {
    @Autowired
    private UserReponsitory userReponsitory;


    //pthuc ma hoa SHA
    public String hashPassword(String password) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        byte[] hashedBytes = md.digest(password.getBytes());
        StringBuilder sb = new StringBuilder();
        for (byte b : hashedBytes) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
    }



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



        try {
            // Mã hóa mật khẩu trước khi lưu vào database
            String hashedPassword = hashPassword(register.getPassword());
            register.setPassword(hashedPassword);
            register.setRepassword(hashedPassword);
        } catch (NoSuchAlgorithmException e) {
            return "Error occurred while hashing the password!";
        }

        register.setRole(User.DEFAULT_ROLE_STATUS);
        register.setStatus(User.DEFAULT_ROLE_STATUS);



        // lưu vao  database
        userReponsitory.save(register);
        return "User registered successfully!";
    }



public User login(String email, String password) {
    // Kiểm tra xác thực người dùng
    User user = userReponsitory.findByEmail(email);
    if (user == null) {
        // Email không tồn tại, ném ngoại lệ ResponseStatusException với mã trạng thái 403
        throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Email không tồn tại");
    } try {
        // Mã hóa mật khẩu nhập vào để so sánh với mật khẩu đã lưu
        String hashedPassword = hashPassword(password);
        if (!user.getPassword().equals(hashedPassword)) {
            // Sai mật khẩu, ném ngoại lệ ResponseStatusException với mã trạng thái 403
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Sai mật khẩu");
        }
    } catch (NoSuchAlgorithmException e) {
        throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error occurred while hashing the password");
    }
        return user;
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
        try {
            String hashedPassword = hashPassword(password);
            user.setPassword(hashedPassword);
            user.setRepassword(hashedPassword);
        } catch (NoSuchAlgorithmException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error occurred while hashing the password");
        }


        userReponsitory.save(user);

        return "Password updated successfully!";
    }



    @Override
    public boolean isUserExists(int userId) {
        return userReponsitory.existsById(userId);
    }



    public String removeUser(int userId) {
        // Triển khai logic xóa người dùng từ cơ sở dữ liệu
        Optional<User> userOptional = userReponsitory.findById(userId);
        if (userOptional.isPresent()) {
            userReponsitory.deleteById(userId);
            return "xóa thành công";
        } else {
            return "không tim thấy user";
        }
    }
    public String updateUser(int userId, User updatedUserData) {
        // Tìm người dùng hiện tại bằng userId
        Optional<User> optionalExistingUser = userReponsitory.findById(userId);

        if (optionalExistingUser.isPresent()) {
            User existingUser = optionalExistingUser.get();

            // Cập nhật các trường dữ liệu được phép cập nhật
            existingUser.setName(updatedUserData.getName());
            existingUser.setEmail(updatedUserData.getEmail());
            existingUser.setNumberphone(updatedUserData.getNumberphone());
            existingUser.setRole(updatedUserData.getRole());

            // Lưu người dùng đã cập nhật lại vào repository
            userReponsitory.save(existingUser);

            return "cập nhât thành công.";
        } else {
            return "không tìm thấy user.";
        }
    }
    //them user
    public String addUser(User register) {
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



        try {
            // Mã hóa mật khẩu trước khi lưu vào database
            String hashedPassword = hashPassword(register.getPassword());
            register.setPassword(hashedPassword);
            register.setRepassword(hashedPassword);
        } catch (NoSuchAlgorithmException e) {
            return "Error occurred while hashing the password!";
        }

        if (register.getRole() != User.ROLE_ADMIN && register.getRole() != User.DEFAULT_ROLE_STATUS) {
            //Mặc định vai trò người dùng nếu vai trò không hợp lệ được cung cấp
            register.setRole(User.DEFAULT_ROLE_STATUS);
        }
        register.setStatus(User.DEFAULT_ROLE_STATUS);



        // lưu vao  database
        userReponsitory.save(register);
        return "thêm user thành công";
    }


}

