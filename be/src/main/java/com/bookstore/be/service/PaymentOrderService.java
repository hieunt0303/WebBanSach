package com.bookstore.be.service;

import com.bookstore.be.model.Payment_order;

import java.util.List;

public interface PaymentOrderService {
    Payment_order savePaymentOrder(Payment_order paymentOrder);
    boolean orderCodeExists(String orderCode);
    boolean userExists(int userId);
    int updateOrderStatus(String orderCode, String orderStatus);
    List<Payment_order> getAllPaymentOrders();
    Payment_order getPaymentOrderById(int id);//để có thể lấy thông tin của đơn hàng dựa trên id.

}
