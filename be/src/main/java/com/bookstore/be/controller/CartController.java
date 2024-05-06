package com.bookstore.be.controller;

import com.bookstore.be.model.AddToCart;
import com.bookstore.be.service.AddToCartService;
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
//    @PostMapping("/addBookToCart")
//    public ResponseEntity<?> addCartwithBook(@RequestBody HashMap<String, String> addCartRequest) {
//        try {
//            if (!addCartRequest.containsKey("bookId") || !addCartRequest.containsKey("userId")
//                    || !addCartRequest.containsKey("qty") || !addCartRequest.containsKey("price")) {
//                throw new IllegalArgumentException("Required fields are missing.");
//            }
//
//            int bookId = Integer.parseInt(addCartRequest.get("bookId"));
//            int userId = Integer.parseInt(addCartRequest.get("userId"));
//            int qty = Integer.parseInt(addCartRequest.get("qty"));
//            double price = Double.parseDouble(addCartRequest.get("price"));
//            float total= Float.parseFloat(addCartRequest.get("toatl"));
//
//            List<AddToCart> obj = addToCartService.addCartByUserIdAndBookId(bookId, userId, qty, price,total);
//            return ResponseEntity.ok(obj);
//        } catch (Exception e) {
//            HashMap<String, String> errorResponse = new HashMap<>();
//            errorResponse.put("error", e.getMessage());
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
//        }
//    }
@PostMapping("/addBookToCart")
public ResponseEntity<?> addCartwithBook(@RequestBody HashMap<String, String> addCartRequest) {
    try {
        if (!addCartRequest.containsKey("bookId") || !addCartRequest.containsKey("userId")
                || !addCartRequest.containsKey("qty") || !addCartRequest.containsKey("price")
                || !addCartRequest.containsKey("total")) {
            throw new IllegalArgumentException("Required fields are missing.");
        }

        int bookId = Integer.parseInt(addCartRequest.get("bookId"));
        int userId = Integer.parseInt(addCartRequest.get("userId"));
        int qty = Integer.parseInt(addCartRequest.get("qty"));
        double price = Double.parseDouble(addCartRequest.get("price"));
        float total = Float.parseFloat(addCartRequest.get("total"));

        List<AddToCart> obj = addToCartService.addCartByUserIdAndBookId(bookId, userId, qty, price, total);
        return ResponseEntity.ok(obj);
    } catch (NumberFormatException e) {
        // Xử lý lỗi chuyển đổi dữ liệu
        HashMap<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", "Invalid data format.");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
    } catch (Exception e) {
        // Xử lý các lỗi khác
        HashMap<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
    }
}

//@PostMapping("/addBookToCart")
//public ResponseEntity<?> addCartwithBook(@RequestBody HashMap<String, String> addCartRequest) {
//    try {
//        if (!addCartRequest.containsKey("bookId") || !addCartRequest.containsKey("userId")
//                || !addCartRequest.containsKey("qty") || !addCartRequest.containsKey("price")
//                || !addCartRequest.containsKey("total")) {
//            throw new IllegalArgumentException("Required fields are missing.");
//        }
//
//        String bookIdStr = addCartRequest.get("bookId");
//        String userIdStr = addCartRequest.get("userId");
//        String qtyStr = addCartRequest.get("qty");
//        String priceStr = addCartRequest.get("price");
//        String totalStr = addCartRequest.get("total");
//
//        if (bookIdStr.trim().isEmpty() || userIdStr.trim().isEmpty()
//                || qtyStr.trim().isEmpty() || priceStr.trim().isEmpty()
//                || totalStr.trim().isEmpty()) {
//            throw new IllegalArgumentException("One or more required fields are empty.");
//        }
//
//        int bookId = Integer.parseInt(bookIdStr);
//        int userId = Integer.parseInt(userIdStr);
//        int qty = Integer.parseInt(qtyStr);
//        double price = Double.parseDouble(priceStr);
//        float total = Float.parseFloat(totalStr);
//
//        List<AddToCart> obj = addToCartService.addCartByUserIdAndBookId(bookId, userId, qty, price, total);
//        return ResponseEntity.ok(obj);
//    } catch (NumberFormatException e) {
//        HashMap<String, String> errorResponse = new HashMap<>();
//        errorResponse.put("error", "Invalid numeric format.");
//        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
//    } catch (IllegalArgumentException e) {
//        HashMap<String, String> errorResponse = new HashMap<>();
//        errorResponse.put("error", e.getMessage());
//        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
//    } catch (Exception e) {
//        HashMap<String, String> errorResponse = new HashMap<>();
//        errorResponse.put("error", e.getMessage());
//        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
//    }
//}
//

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
