package com.bookstore.be.service;

import com.bookstore.be.model.Book;
import com.bookstore.be.model.Category;
import com.bookstore.be.repository.BookRepository;
import com.bookstore.be.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService{
    @Autowired
    public BookRepository bookRepository;
    @Autowired
    private CategoryRepository categoryRepository;


//    @Override
//    public List<Book> saveBook(List<Book> books) {
//        return bookRepository.saveAll(books);
//    }
@Override
public List<Book> saveBook(List<Book> books) {
    List<Book> savedBooks = new ArrayList<>();

    for (Book book : books) {
        // Kiểm tra xem category đã tồn tại trong cơ sở dữ liệu chưa
        if (book.getCategory() != null) {
            Integer categoryId = book.getCategory().getId(); // Sử dụng Integer thay vì int để xử lý null
            if (categoryId != null) {
                // Kiểm tra xem category đã tồn tại trong cơ sở dữ liệu chưa
                Optional<Category> existingCategory = categoryRepository.findById(categoryId);
                if (existingCategory.isPresent()) {
                    // Nếu category đã tồn tại, gán lại category vào book
                    book.setCategory(existingCategory.get());
                } else {
                    // Nếu category không tồn tại, ném một ngoại lệ hoặc xử lý theo cách thích hợp
                    throw new IllegalArgumentException("Category with ID " + categoryId + " not found");
                }
            }
        }

        // Lưu thực thể Book và thêm vào danh sách đã lưu
        savedBooks.add(bookRepository.save(book));
    }

    return savedBooks;
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
    @Override
    public List<Book> searchBooks(String keyword) {
        // Trả về tất cả sách nếu từ khóa là trống hoặc null
        if (keyword == null || keyword.trim().isEmpty()) {
            return bookRepository.findAll();
        }

        // Chuyển đổi keyword sang chữ thường
        keyword = keyword.toLowerCase();

        // Sử dụng phương thức tìm kiếm tùy chỉnh trong BookRepository
        return bookRepository.findByTitleContaining(keyword);
    }
    @Override
    public boolean isBookExists(int bookId) {
        return  bookRepository.existsById(bookId);
    }
}
