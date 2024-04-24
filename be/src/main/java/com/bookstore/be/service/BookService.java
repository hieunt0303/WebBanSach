package com.bookstore.be.service;



import com.bookstore.be.model.Book;

import java.util.List;

public interface BookService{
//    public Book saveBook(Book book);
    public List<Book> saveBook(List<Book> books);
    public List<Book> getAllBook();
    public Book getBookById( int id);
    public Book getBookByTitle( String title);

    void updateBook(int bookId, Book newBook);

    void deleteBookById(int id);


    List<Book> getBooksByCategoryId(int categoryId);


}
