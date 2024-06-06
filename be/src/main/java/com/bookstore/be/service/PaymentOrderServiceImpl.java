package com.bookstore.be.service;

import com.bookstore.be.model.Payment_order;
import com.bookstore.be.repository.PaymentOrderRepository;
import com.bookstore.be.repository.UserReponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PaymentOrderServiceImpl implements PaymentOrderService{
    @Autowired
    private PaymentOrderRepository paymentOrderRepository;
    @Autowired
    private UserReponsitory userReponsitory;



    @Override
    public Payment_order savePaymentOrder(Payment_order paymentOrder) {
        if (orderCodeExists(paymentOrder.getOrderCode())) {
            throw new IllegalArgumentException("Mã đơn hàng đã tồn tại");
        } if (!userExists(paymentOrder.getUser_id())) {
            throw new IllegalArgumentException("Người dùng không tồn tại");
        }
        return paymentOrderRepository.save(paymentOrder);
    }

    @Override
    public boolean orderCodeExists(String orderCode) {
        return paymentOrderRepository.existsByOrderCode(orderCode);
    }
    @Override
    public boolean userExists(int userId) {
        return userReponsitory.existsById(userId);
    }
    @Override
    public int updateOrderStatus(String orderCode, String orderStatus) {
        return paymentOrderRepository.updateOrderStatusByOrderCode(orderCode, orderStatus);}
}
