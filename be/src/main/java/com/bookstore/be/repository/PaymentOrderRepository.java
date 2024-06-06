package com.bookstore.be.repository;

import com.bookstore.be.model.Payment_order;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentOrderRepository extends JpaRepository<Payment_order, Integer> {
    boolean existsByOrderCode(String orderCode);
    @Transactional
    @Modifying
    @Query("UPDATE Payment_order p SET p.order_status = ?2 WHERE p.orderCode = ?1")
    int updateOrderStatusByOrderCode(String orderCode, String orderStatus);

}
