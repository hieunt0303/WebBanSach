package com.bookstore.be.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nameC;
    @OneToMany(mappedBy = "category")// mappedBy  thuộc tính quan trọng để chỉ định trường trong class Book
    @JsonIgnore
    private List<Book> books;

    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", nameC='" + nameC + '\'' +
                ", books=" + books +
                '}';
    }
}
