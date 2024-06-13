package com.bookstore.be.service;

import com.bookstore.be.model.Book_order;

import java.util.List;

public interface BookOrderService {
    Book_order saveBookOrder(Book_order bookOrder);
    // Phương thức mới để lấy đơn sách theo paymentid
    List<Book_order> getBookOrdersByPaymentOrderId(int paymentOrderId);

    List<Book_order> getAllBookOrders();
}
