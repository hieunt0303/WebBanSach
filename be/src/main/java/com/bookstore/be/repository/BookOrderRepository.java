package com.bookstore.be.repository;

import com.bookstore.be.model.Book_order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookOrderRepository extends JpaRepository<Book_order, Integer> {
}
