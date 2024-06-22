package com.bookstore.be.service;


import com.bookstore.be.model.User;

import java.util.List;

public interface UserService {
    public String register(User register) ;
    User login(String email, String password);
    User getUserRegister(int id);

    List<User> getAllUserRegisters();
    String changePassword(int userId, String password, String repassword);
    public boolean isUserExists(int userId);
    String removeUser(int userId);

    String updateUser(int userId, User updatedUserData);
    public String addUser(User register) ;
}
