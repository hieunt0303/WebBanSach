package com.bookstore.be.service;

import com.bookstore.be.model.AddToCart;

import java.util.List;

public interface AddToCartService {
    List<AddToCart> addCartByUserIdAndBookId(int bookId,int userId, int qty,double price, float total ) throws Exception;
    List<AddToCart>  removeCartByUserId(int cartId, int userId );
    List<AddToCart> getCartByUserId(int userId);
    public void updateQtyByCartId(int cartId, int qty,double price ) throws Exception;

}
