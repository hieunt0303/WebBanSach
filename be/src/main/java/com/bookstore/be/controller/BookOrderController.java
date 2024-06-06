package com.bookstore.be.controller;

import com.bookstore.be.model.Book_order;
import com.bookstore.be.service.BookOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/book-orders")
public class BookOrderController {

    @Autowired
    private BookOrderService bookOrderService;

    @PostMapping
    public ResponseEntity<?> createBookOrder(@RequestBody Book_order bookOrder) {
        try {
            Book_order savedOrder = bookOrderService.saveBookOrder(bookOrder);
            return ResponseEntity.ok(savedOrder);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
