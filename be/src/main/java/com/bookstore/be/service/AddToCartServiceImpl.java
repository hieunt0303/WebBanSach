package com.bookstore.be.service;

import com.bookstore.be.model.AddToCart;
import com.bookstore.be.model.Book;
import com.bookstore.be.repository.AddToCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AddToCartServiceImpl implements AddToCartService{
    @Autowired
    private AddToCartRepository addToCartRepository;
    @Autowired
    private BookService bookService;
    @Autowired
    private UserService userService;


@Override
//public List<AddToCart> addCartByUserIdAndBookId(int bookId, int userId, int qty, double price, float total) throws Exception {
//    try {
//        Optional<AddToCart> existingCartOptional = addToCartRepository.getCartByBookIdAndUserId(userId, bookId);
//        if (existingCartOptional.isPresent()) {
//            // If the product already exists, update the quantity and price
//            AddToCart existingCart = existingCartOptional.get();
//            int newQty = existingCart.getQty() + qty; // Increase quantity
//            float newTotal = (float)(existingCart.getTotal() + (qty * price)); // Recalculate new total price and convert to float
//
//            // Update the quantity, price, and total price for the product in the cart
//            existingCart.setQty(newQty);
//            existingCart.setTotal(newTotal);
//            addToCartRepository.updateQtyAndTotalByCartId(existingCart.getId(), newQty, newTotal);
//        } else {
//            // If the product does not exist, add it to the cart
//            AddToCart obj = new AddToCart();
//            obj.setQty(qty);
//            obj.setUser_id(userId);
//            Book pro = bookService.getBookById(bookId);
//            obj.setBook_id(bookId);
//            obj.setPrice(price);
//            obj.setTotal((float)(qty * price)); // Calculate the new total price when adding a new product to the cart and convert to float
//            addToCartRepository.save(obj);
//        }
//
//        return this.getCartByUserId(userId);
//    } catch (Exception e) {
//        e.printStackTrace();
//        throw new Exception(e.getMessage());
//    }

public List<AddToCart> addCartByUserIdAndBookId(int bookId, int userId, int qty, double price, float total) throws Exception {
    try {
        // Kiểm tra sự tồn tại của userId trong bảng user trước khi thêm vào giỏ hàng
        if (!userService.isUserExists(userId)) {
            throw new IllegalArgumentException("User does not exist.");
        }

        Optional<AddToCart> existingCartOptional = addToCartRepository.getCartByBookIdAndUserId(userId, bookId);
        if (existingCartOptional.isPresent()) {
            // Nếu sản phẩm đã tồn tại, cập nhật số lượng và giá
            AddToCart existingCart = existingCartOptional.get();
            int newQty = existingCart.getQty() + qty;
            float newTotal = (float)(existingCart.getTotal() + (qty * price));

            existingCart.setQty(newQty);
            existingCart.setTotal(newTotal);
            addToCartRepository.updateQtyAndTotalByCartId(existingCart.getId(), newQty, newTotal);
        } else {
            // Nếu sản phẩm chưa tồn tại, thêm vào giỏ hàng
            AddToCart obj = new AddToCart();
            obj.setQty(qty);
            obj.setUser_id(userId);
            Book pro = bookService.getBookById(bookId);
            obj.setBook_id(bookId);
            obj.setPrice(price);
            obj.setTotal((float)(qty * price));
            addToCartRepository.save(obj);
        }

        return this.getCartByUserId(userId);
    } catch (Exception e) {
        e.printStackTrace();
        throw new Exception(e.getMessage());
    }
}




    @Override
    public List<AddToCart> removeCartByUserId(int cartId, int userId) {
        addToCartRepository.deleteCartByIdAndUserId(userId, cartId);
        return this.getCartByUserId(userId);
    }

    @Override
    public List<AddToCart> getCartByUserId(int userId) {
        return addToCartRepository.getCartByUserId(userId);
    }

    @Override
    public void updateQtyByCartId(int cartId, int qty, double price) throws Exception {
        addToCartRepository.updateQtyByCartId(cartId, price,qty);
    }

}
