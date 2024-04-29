package com.bookstore.be.service;


import com.bookstore.be.model.Register;

import java.util.List;

public interface RegisterService {
    public String register(Register register) ;




    Register getUserRegister(int id);

    List<Register> getAllUserRegisters();
}
