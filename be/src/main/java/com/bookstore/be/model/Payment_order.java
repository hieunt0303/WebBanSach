package com.bookstore.be.model;

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
public class Payment_order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int user_id;
    private String orderCode;
    @Column(columnDefinition = "varchar(255) default 'new'")
    private String order_status;

    private String first_name;
    private String last_name;
    private String address;
    private String city;
    private String country;
    private String phone;
    private String email;
    private String note;



}
