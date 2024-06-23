package com.bookstore.be.controller;

import com.bookstore.be.model.Payment_order;
import com.bookstore.be.service.PaymentOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "https://web-ban-sach-five.vercel.app")
@RestController
@RequestMapping("/payment-orders")

public class PaymentOrderController {
    @Autowired
    private PaymentOrderService paymentOrderService;

    @PostMapping
    public ResponseEntity<?> createPaymentOrder(@RequestBody Payment_order paymentOrder) {
        try {
            Payment_order savedOrder = paymentOrderService.savePaymentOrder(paymentOrder);
            return ResponseEntity.ok(savedOrder);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @PutMapping("/{orderCode}")
    public ResponseEntity<?> updateOrderStatus(@PathVariable String orderCode, @RequestBody String orderStatus) {
        try {
            int result = paymentOrderService.updateOrderStatus(orderCode, orderStatus);
            if (result == 0) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok("Đã cập nhật trạng thái đơn hàng thành công");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    }

