package com.bookstore.be.service;

import com.bookstore.be.model.Payment_order;

public interface PaymentOrderService {
    Payment_order savePaymentOrder(Payment_order paymentOrder);
    boolean orderCodeExists(String orderCode);
    boolean userExists(int userId);
    int updateOrderStatus(String orderCode, String orderStatus);
}
