package com.bookstore.be.service;

import com.bookstore.be.model.Book_order;
import com.bookstore.be.repository.BookOrderRepository;
import com.bookstore.be.repository.PaymentOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookOrderServiceImpl implements BookOrderService{
    @Autowired
    private BookOrderRepository bookOrderRepository;

    @Autowired
    private PaymentOrderRepository paymentOrderRepository;

    @Override
    public Book_order saveBookOrder(Book_order bookOrder) {
        if (!paymentOrderRepository.existsById(bookOrder.getPaymentOrder().getId())) {
            throw new IllegalArgumentException("Payment_order không tồn tại");
        }
        return bookOrderRepository.save(bookOrder);
    }
}
