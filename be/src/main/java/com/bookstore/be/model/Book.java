package com.bookstore.be.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank(message = "Tên sách không để trống")
    @Length(min = 1, max = 255, message = "Tên sách phải từ 1 đến 255 kí tự")
    private String title;

    @NotBlank(message = "Tên tác giả không để trống")
    private String author;

    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "Mô tả Không để trống")
    private String description;

    @NotBlank(message = "Ảnh không được trống")
    private String img;

    @NotNull(message = "Giá không được trống")
    @Positive(message = "Giá phải là một số dương")
    private double price;

    @NotNull(message = "số lượng không được trống")
    @Positive(message = "số lượng phải lớn hơn 0")
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
