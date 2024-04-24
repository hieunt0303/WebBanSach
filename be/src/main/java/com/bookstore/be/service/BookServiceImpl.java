package com.bookstore.be.service;

import com.bookstore.be.model.Book;
import com.bookstore.be.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService{
    @Autowired
    public BookRepository bookRepository;


    @Override
    public List<Book> saveBook(List<Book> books) {
        return bookRepository.saveAll(books);
    }

    @Override
    public List<Book> getAllBook() {
        return bookRepository.findAll();
    }

    @Override
    public Book getBookById(int id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        return optionalBook.orElse(null);
    }

    @Override
    public Book getBookByTitle(String title) {
        return bookRepository.findByTitle(title);
    }

    @Override
    public void updateBook(int bookId, Book newBook) {

    }


    @Override
    public void deleteBookById(int id) {
         bookRepository.deleteById(id);
    }

    @Override
    public List<Book> getBooksByCategoryId(int categoryId) {
        return bookRepository.findByCategoryId(categoryId);
    }
}
