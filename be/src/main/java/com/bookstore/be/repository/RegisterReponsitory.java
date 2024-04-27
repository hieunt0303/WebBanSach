package com.bookstore.be.repository;

import com.bookstore.be.model.Register;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface RegisterReponsitory extends JpaRepository<Register, Integer> {
    boolean existsByEmail(String email);
}
