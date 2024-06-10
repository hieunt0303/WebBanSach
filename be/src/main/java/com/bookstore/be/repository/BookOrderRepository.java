package com.bookstore.be.repository;

import com.bookstore.be.model.Book_order;
import com.bookstore.be.model.Payment_order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookOrderRepository extends JpaRepository<Book_order, Integer> {
    List<Book_order> findByPaymentOrder(Payment_order paymentOrder);
}
