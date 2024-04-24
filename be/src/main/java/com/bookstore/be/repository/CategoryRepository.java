package com.bookstore.be.repository;

import com.bookstore.be.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository <Category, Integer> {
    // Tìm category dựa trên tên
    Category findByNameC(String nameC);
}
