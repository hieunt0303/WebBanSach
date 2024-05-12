package com.bookstore.be.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AddToCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @JsonIgnore

//    @OneToOne(fetch=FetchType.LAZY)
//    @JoinColumn(name = "book_id")
    private int book_id;
   private int qty;
    private double price;
    private int user_id;
    private float total;
    private String title;
    private String img;
//    @Column(updatable=false, insertable=false)
//    String added_date;

//    @Transient
//    private String BookName;

}
