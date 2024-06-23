package com.bookstore.be.controller;

import com.bookstore.be.model.Book_order;
import com.bookstore.be.service.BookOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "https://web-ban-sach-five.vercel.app")
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
    @GetMapping("/get_all")
    public ResponseEntity<List<Book_order>> getall() {
        List<Book_order> bookOrders = bookOrderService.getAllBookOrders();
        return ResponseEntity.ok(bookOrders);

    }
}
