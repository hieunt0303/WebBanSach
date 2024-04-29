package com.bookstore.be.service;


import com.bookstore.be.model.User;

import java.util.List;

public interface UserService {
    public String register(User register) ;
    String login(String email, String password);




    User getUserRegister(int id);

    List<User> getAllUserRegisters();


}
