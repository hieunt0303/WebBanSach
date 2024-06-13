package com.bookstore.be.service;

import com.bookstore.be.model.Book_order;
import com.bookstore.be.model.Payment_order;
import com.bookstore.be.repository.BookOrderRepository;
import com.bookstore.be.repository.PaymentOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookOrderServiceImpl implements BookOrderService{
    @Autowired
    private BookOrderRepository bookOrderRepository;
    @Autowired
    private PaymentOrderService paymentOrderService;

    @Autowired
    private PaymentOrderRepository paymentOrderRepository;

    @Override
    public Book_order saveBookOrder(Book_order bookOrder) {
        if (!paymentOrderRepository.existsById(bookOrder.getPaymentOrder().getId())) {
            throw new IllegalArgumentException("Payment_order không tồn tại");
        }
        return bookOrderRepository.save(bookOrder);
    }
    @Override
    public List<Book_order> getBookOrdersByPaymentOrderId(int paymentOrderId) {
        Payment_order paymentOrder = paymentOrderService.getPaymentOrderById(paymentOrderId);
        return bookOrderRepository.findByPaymentOrder(paymentOrder);
    }

    @Override
    public List<Book_order> getAllBookOrders() {
        return bookOrderRepository.findAll();
    }
}
