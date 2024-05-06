package com.bookstore.be.repository;

import com.bookstore.be.model.AddToCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface AddToCartRepository extends JpaRepository<AddToCart, Integer> {
//    Optional<AddToCart> findByUserIdAndBookId(int user_id, int bookId);

    ///
    @Query("select addCart FROM AddToCart addCart WHERE addCart.user_id = :user_id")
    List<AddToCart> getCartByUserId(@Param("user_id") Integer user_id);
    @Query("select addCart FROM AddToCart addCart WHERE  addCart.book_id = :book_id and addCart.user_id = :user_id")
    Optional<AddToCart> getCartByBookIdAndUserId(@Param("user_id") Integer user_id, @Param("book_id") Integer book_id);

    @Modifying
    @Transactional
    @Query("update AddToCart addCart set addCart.qty = :qty, addCart.total = :total WHERE addCart.id = :cart_id")
    void updateQtyAndTotalByCartId(@Param("cart_id") Integer cart_id, @Param("qty") Integer qty, @Param("total") Float total);

    @Modifying
    @Transactional
    @Query("DELETE FROM AddToCart addCart WHERE addCart.id = :cart_id and addCart.user_id = :user_id  ")
    void  deleteCartByIdAndUserId(@Param("user_id") Integer user_id, @Param("cart_id") Integer cart_id);

    @Modifying
    @Transactional
    @Query("DELETE FROM AddToCart addCart WHERE addCart.user_id = :user_id")
    void  deleteAllCartUserId(@Param("user_id") Integer user_id);
    @Modifying
    @Transactional
    @Query("update AddToCart addCart set addCart.qty=:qty,addCart.price=:price WHERE addCart.id=:cart_id")
    void updateQtyByCartId(@Param("cart_id")Integer cart_id,@Param("price")double price,@Param("qty")Integer qty);


}
