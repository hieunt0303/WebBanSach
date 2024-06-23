package com.bookstore.be.controller;

import com.bookstore.be.model.Book;
import com.bookstore.be.model.Category;
import com.bookstore.be.repository.BookRepository;
import com.bookstore.be.repository.CategoryRepository;
import com.bookstore.be.service.BookService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.MethodArgumentNotValidException;

@CrossOrigin(origins = "https://webbansach-production.up.railway.app")
@RestController
@RequestMapping("/book")
@Validated
public class BookController {
    @Autowired
    private BookService bookService;
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private CategoryRepository categoryRepository;

    //Tạo, thêm mới book

    @PostMapping("/addBook")

    public ResponseEntity<?> addBooks( @RequestBody @Valid List<Book> books) {

            List<Book> savedBooks = bookService.saveBook(books);
            return ResponseEntity.ok(savedBooks);

    }


    //lấy danh sach book
    @GetMapping("/getAllBook")
    public List<Book> getAllBook(){
        return bookService.getAllBook();
    }
    //Lấy 1 book theo id
    @GetMapping("/getBookById/{bookId}")
//    public ResponseEntity<?> getBookById(@PathVariable int bookId) {
//            Optional<Book> optionalBook = Optional.ofNullable(bookService.getProductById(bookId));
//
//            if (optionalBook.isPresent()) {
//                return ResponseEntity.ok(optionalBook.get());
//            } else {
//                return ResponseEntity.notFound().build();
//            }
//        }
    public ResponseEntity<?> getBookById(@PathVariable("bookId") Integer bookId, @RequestParam(required = false) String title) {
        Book book = null;
        if (bookId != null) {
            book = bookService.getBookById(bookId);
        } else if (title != null) {
            book = bookService.getBookByTitle(title);
        } else {
            return ResponseEntity.badRequest().body("Please provide either 'id' or 'title' parameter.");
        }
        if (book == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(book);
    }
    //Lấy sp theo danh mục
    @GetMapping("/getProductsByCategory/{categoryId}")
    public ResponseEntity<List<Book>> getProductsByCategory(@PathVariable int categoryId) {
        try {
            List<Book> books = bookService.getBooksByCategoryId(categoryId);
            if (!books.isEmpty()) {
                return ResponseEntity.ok(books);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            // Xử lý ngoại lệ và trả về mã lỗi 500 Internal Server Error
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    //cập nhât book
    @PutMapping("/updateBook/{bookId}")
    public ResponseEntity<Void> updateBook(@PathVariable int bookId, @RequestBody Book newBook) {
        if (!bookRepository.existsById(bookId)) {
            return ResponseEntity.notFound().build();
        }

        Book bookToUpdate = bookRepository.findById(bookId).orElse(null);
        if (bookToUpdate == null) {
            return ResponseEntity.notFound().build();
        }

        bookToUpdate.setTitle(newBook.getTitle());
        bookToUpdate.setAuthor(newBook.getAuthor());
        bookToUpdate.setImg(newBook.getImg());

        bookToUpdate.setDescription(newBook.getDescription());
        bookToUpdate.setPrice(newBook.getPrice());
       // bookToUpdate.setCategory(newBook.getCategory());
// Handle category
        Category category = categoryRepository.findById(newBook.getCategory().getId()).orElse(null);
        if (category == null) {
            return ResponseEntity.badRequest().build(); // Or handle error as needed
        }
        bookToUpdate.setCategory(category);
        bookRepository.save(bookToUpdate);

        return ResponseEntity.noContent().build();
    }
    //xóa book
    @DeleteMapping("/delete/{id}")
    public void deleteBook(@PathVariable int id){
        bookService.deleteBookById(id);
    }

    // Endpoint để tìm kiếm sách theo từ khóa
    @GetMapping("/search")
    public ResponseEntity<List<Book>> searchBooks(@RequestParam String keyword) {
        List<Book> foundBooks = bookService.searchBooks(keyword);
        if (foundBooks.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(foundBooks);
        }
    }
}
