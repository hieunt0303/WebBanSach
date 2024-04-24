package com.bookstore.be.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String author;
    @Column(columnDefinition = "TEXT") // Sử dụng kiểu dữ liệu TEXT cho trường 'description'
    private String description;
    private String img;
    private double price;
    private int quantity;
    @ManyToOne(fetch = FetchType.EAGER)   //Trường category_id sẽ được ánh xạ đến một khóa ngoại trong bảng Book.
    @JoinColumn(name = "category_id")// Xác định tên cột trong bảng Book tương ứng với trường category
    private Category category;

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", description='" + description + '\'' +
                ", img='" + img + '\'' +
                ", price=" + price +
                ", quantity=" + quantity +
                ", category=" + category +
                '}';
    }
}
