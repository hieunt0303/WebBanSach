package com.bookstore.be.repository;


import com.bookstore.be.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book,Integer> {
    List<Book> findByCategoryId(int categoryId);

    Book findByTitle(String title);
}
