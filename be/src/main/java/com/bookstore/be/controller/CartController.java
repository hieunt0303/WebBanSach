package com.bookstore.be.controller;

import com.bookstore.be.model.AddToCart;
import com.bookstore.be.service.AddToCartService;
import com.bookstore.be.service.BookService;
import com.bookstore.be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private AddToCartService addToCartService;
    @Autowired
    private UserService userService;
    @Autowired
    private BookService bookService;

//@PostMapping("/addBookToCart")
//public ResponseEntity<?> addCartwithBook(@RequestBody HashMap<String, String> addCartRequest) {
//    try {
//        if (!addCartRequest.containsKey("bookId") || !addCartRequest.containsKey("userId")
//                || !addCartRequest.containsKey("qty") || !addCartRequest.containsKey("price")
//                || !addCartRequest.containsKey("total")) {
//            throw new IllegalArgumentException("Required fields are missing.");
//        }
//
//        int bookId = Integer.parseInt(addCartRequest.get("bookId"));
//        int userId = Integer.parseInt(addCartRequest.get("userId"));
//        int qty = Integer.parseInt(addCartRequest.get("qty"));
//        double price = Double.parseDouble(addCartRequest.get("price"));
//        float total = Float.parseFloat(addCartRequest.get("total"));
//
//        List<AddToCart> obj = addToCartService.addCartByUserIdAndBookId(bookId, userId, qty, price, total);
//        return ResponseEntity.ok(obj);
//    } catch (NumberFormatException e) {
//        // Xử lý lỗi chuyển đổi dữ liệu
//        HashMap<String, String> errorResponse = new HashMap<>();
//        errorResponse.put("error", "Invalid data format.");
//        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
//    } catch (Exception e) {
//        // Xử lý các lỗi khác
//        HashMap<String, String> errorResponse = new HashMap<>();
//        errorResponse.put("error", e.getMessage());
//        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
//    }
//}
@PostMapping("/addBookToCart")
public ResponseEntity<?> addCartwithBook(@RequestBody HashMap<String, String> addCartRequest) {
    try {
        // Kiểm tra xem tất cả các trường thông tin cần thiết có tồn tại không
        if (!addCartRequest.containsKey("bookId") || !addCartRequest.containsKey("userId")
                || !addCartRequest.containsKey("qty") || !addCartRequest.containsKey("price")
                || !addCartRequest.containsKey("total")) {
            throw new IllegalArgumentException("Required fields are missing.");
        }

        // Parse các giá trị từ dữ liệu nhận được
        int bookId = Integer.parseInt(addCartRequest.get("bookId"));
        int userId = Integer.parseInt(addCartRequest.get("userId"));
        int qty = Integer.parseInt(addCartRequest.get("qty"));
        double price = Double.parseDouble(addCartRequest.get("price"));
        float total = Float.parseFloat(addCartRequest.get("total"));

        // Kiểm tra sự tồn tại của userId trong CSDL
        if (!userService.isUserExists(userId)) {
            throw new IllegalArgumentException("User does not exist.");
        }
        // Kiểm tra sự tồn tại của bookId trong CSDL
        if (!bookService.isBookExists(bookId)) {
            throw new IllegalArgumentException("Book does not exist.");
        }
        // Thêm sản phẩm vào giỏ hàng với userId đã đăng nhập
        List<AddToCart> obj = addToCartService.addCartByUserIdAndBookId(bookId, userId, qty, price, total);

        // Trả về phản hồi thành công cùng với danh sách sản phẩm trong giỏ hàng sau khi thêm
        return ResponseEntity.ok(obj);
    } catch (NumberFormatException e) {
        // Xử lý lỗi chuyển đổi dữ liệu
        HashMap<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", "Invalid data format.");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
    } catch (IllegalArgumentException e) {
        // Xử lý lỗi thiếu trường thông tin hoặc người dùng không tồn tại
        HashMap<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
    } catch (Exception e) {
        // Xử lý các lỗi khác
        HashMap<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
    }
}

    @DeleteMapping("/removeBookFromCart")
    public ResponseEntity<?> removeCartwithProductId(@RequestBody HashMap<String, String> removeCartRequest) {
        try {
            if (!removeCartRequest.containsKey("userId") || !removeCartRequest.containsKey("cartId")) {
                throw new IllegalArgumentException("Required fields are missing.");
            }

            List<AddToCart> obj = addToCartService.removeCartByUserId(
                    Integer.parseInt(removeCartRequest.get("cartId")), Integer.parseInt(removeCartRequest.get("userId")));
            return ResponseEntity.ok(obj);
        } catch (Exception e) {
            HashMap<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }
    @GetMapping("/getCartsByUserId")
    public ResponseEntity<?> getCartsByUserId(@RequestBody HashMap<String, String> getCartRequest) {
        try {
            if (!getCartRequest.containsKey("userId")) {
                throw new IllegalArgumentException("Required fields are missing.");
            }

            List<AddToCart> obj = addToCartService.getCartByUserId(Integer.parseInt(getCartRequest.get("userId")));
            return ResponseEntity.ok(obj);
        } catch (Exception e) {
            HashMap<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    @PutMapping("/updateQtyForCart")
    public ResponseEntity<?> updateQtyForCart(@RequestBody HashMap<String, String> addCartRequest) {
        try {
            if (!addCartRequest.containsKey("cartId") || !addCartRequest.containsKey("userId")
                    || !addCartRequest.containsKey("qty") || !addCartRequest.containsKey("price")) {
                throw new IllegalArgumentException("Required fields are missing.");
            }

            int cartId = Integer.parseInt(addCartRequest.get("cartId"));
            int userId = Integer.parseInt(addCartRequest.get("userId"));
            int qty = Integer.parseInt(addCartRequest.get("qty"));
            double price = Double.parseDouble(addCartRequest.get("price"));

            addToCartService.updateQtyByCartId(cartId, qty, price);
            List<AddToCart> obj = addToCartService.getCartByUserId(userId);
            return ResponseEntity.ok(obj);
        } catch (Exception e) {
            HashMap<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

}
