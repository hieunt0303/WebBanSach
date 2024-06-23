package com.bookstore.be.controller;

import com.bookstore.be.model.AddToCart;
import com.bookstore.be.model.Book;
import com.bookstore.be.model.Book_order;
import com.bookstore.be.model.Payment_order;
import com.bookstore.be.service.*;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lib.payos.PayOS;
import com.lib.payos.type.PaymentData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "https://webbansach-production.up.railway.app")
@RestController
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private AddToCartService addToCartService;
    @Autowired
    private UserService userService;
    @Autowired
    private BookService bookService;
    @Autowired
    private PaymentOrderService paymentOrderService;

    @Autowired
    private BookOrderService bookOrderService;



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

            int userId = Integer.parseInt(removeCartRequest.get("userId"));
            int cartId = Integer.parseInt(removeCartRequest.get("cartId"));

            // Kiểm tra sự tồn tại của userId và cartId trong cơ sở dữ liệu
            if (!userService.isUserExists(userId)) {
                throw new IllegalArgumentException("User does not exist.");
            }

            if (!addToCartService.isCartItemExists(cartId)) {
                throw new IllegalArgumentException("Cart item does not exist.");
            }

            // Xóa sản phẩm từ giỏ hàng
            List<AddToCart> obj = addToCartService.removeCartByUserId(cartId, userId);
            return ResponseEntity.ok(obj);
        } catch (Exception e) {
            HashMap<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    @GetMapping("/getCartsByUserId")
    public ResponseEntity<?> getCartsByUserId(@RequestParam HashMap<String, String> getCartRequest) {
        try {
            if (!getCartRequest.containsKey("userId")) {
                throw new IllegalArgumentException("Required fields are missing.");
            }

            int userId = Integer.parseInt(getCartRequest.get("userId"));

            List<AddToCart> cartItems = addToCartService.getCartByUserId(userId);

            // Lặp qua mỗi mục trong giỏ hàng và lấy thông tin chi tiết từ bảng sách
            for (AddToCart item : cartItems) {
                int bookId = item.getBook_id(); // Chuyển đổi book_id sang kiểu số nguyên
                Book book = bookService.getBookById(bookId); // Lấy thông tin chi tiết của sách
                item.setTitle(book.getTitle());
                item.setImg(book.getImg());
            }

            return ResponseEntity.ok(cartItems);
        } catch (Exception e) {
            HashMap<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }

    }


    @PutMapping("/updateQtyForCart")
    public ResponseEntity<?> updateQtyForCart(@RequestBody HashMap<String, String> updateCartRequest) {
        try {
            // Kiểm tra xem tất cả các trường bắt buộc có tồn tại không
            if (!updateCartRequest.containsKey("cartId") || !updateCartRequest.containsKey("qty")) {
                throw new IllegalArgumentException("Thiếu thông tin bắt buộc.");
            }

            int cartId = Integer.parseInt(updateCartRequest.get("cartId"));
            int qty = Integer.parseInt(updateCartRequest.get("qty"));

            // Kiểm tra xem mục giỏ hàng có tồn tại không
            if (!addToCartService.isCartItemExists(cartId)) {
                throw new IllegalArgumentException("Mục giỏ hàng không tồn tại.");
            }

            // Kiểm tra xem số lượng mới cập nhật có lớn hơn 0 không
            if (qty <= 0) {
                throw new IllegalArgumentException("Số lượng phải lớn hơn 0 để cập nhật.");
            }

            // Cập nhật số lượng và tính lại tổng
            AddToCart cartItem = addToCartService.getCartItemById(cartId);
            double price = cartItem.getPrice();
            float newTotal = (float) (price * qty);

            addToCartService.updateQtyAndTotalByCartId(cartId, qty, newTotal);

            // Trả về giỏ hàng đã cập nhật
            int userId = cartItem.getUser_id();
            List<AddToCart> updatedCart = addToCartService.getCartByUserId(userId);
            return ResponseEntity.ok(updatedCart);
        } catch (NumberFormatException e) {
            // Xử lý lỗi định dạng dữ liệu
            HashMap<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Định dạng dữ liệu không hợp lệ.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        } catch (IllegalArgumentException e) {
            // Xử lý thiếu thông tin, mục giỏ hàng không hợp lệ hoặc số lượng không lớn hơn 0
            HashMap<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        } catch (Exception e) {
            // Xử lý các ngoại lệ khác
            HashMap<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }
    @PostMapping("/check-payment")
    public ResponseEntity<?> checkPayment(@RequestBody Map<String, Object> body){
        String orderCode = (String) body.get("orderCode");
//        logger.info(orderCode);

        PayOS payOS = new PayOS(
                "3f0e8038-7dea-452a-9632-bd49b6b93ce8",
                "d7d9b0ba-39df-44d6-8682-e82846d32a2e",
                "ec1d029b0b118bd27b811ffb604d302db7c870ea18f770707c1790ef4a904c67");
        try{
            JsonNode infoPayment = payOS.getPaymentLinkInfomation(Integer.parseInt(orderCode));
            String status = infoPayment.get("status").asText();
            if(status.equals("PAID")){
                // cap nhap
                paymentOrderService.updateOrderStatus(orderCode,"Đã thanh toán");
            }
            return ResponseEntity.ok(infoPayment);
        }catch (Exception e){
            HashMap<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }


    }

    @PostMapping("/checkout")
    public ResponseEntity<?> checkout(@RequestBody Map<String, Object> body) {
        //ép lại cho đúng k dữ lịu mới cho phép  lưu tt ngừi mua hàng
        Map<String, Object> paymentOrderMap = (Map<String, Object>) body.get("checkoutInfo");
        ObjectMapper objectMapper = new ObjectMapper();
        Payment_order newPaymentOrder = paymentOrderService.savePaymentOrder(objectMapper.convertValue(paymentOrderMap,Payment_order.class));

        List<AddToCart> cartItems = (List<AddToCart>) body.get("cartItems");
        int totalOrderPrice = 0;
        for (int i = 0; i < cartItems.size();i++) {
            //ép lại cho đúng kiru dữ liệu mới cho phép lưu book_order
            AddToCart mapAddToCart = objectMapper.convertValue(cartItems.get(i), AddToCart.class);
            addToCartService.removeCartByUserId(mapAddToCart.getId(), mapAddToCart.getUser_id());
            totalOrderPrice += mapAddToCart.getTotal();
            Book_order b = new Book_order();
            b.setBook_id(mapAddToCart.getBook_id());
            b.setTotal(mapAddToCart.getTotal());
            b.setPrice(mapAddToCart.getPrice());
            b.setQuantity(mapAddToCart.getQty());
            b.setPaymentOrder(newPaymentOrder);
            bookOrderService.saveBookOrder(b);
        }
        PayOS payOS = new PayOS(
                "3f0e8038-7dea-452a-9632-bd49b6b93ce8",
                "d7d9b0ba-39df-44d6-8682-e82846d32a2e",
                "ec1d029b0b118bd27b811ffb604d302db7c870ea18f770707c1790ef4a904c67");
System.out.println(newPaymentOrder);
        System.out.println(totalOrderPrice);

        try {

            JsonNode paymentLink = payOS.createPaymentLink(new PaymentData(
                    Integer.parseInt(newPaymentOrder.getOrderCode()),
                    totalOrderPrice,
                    "Thanh toan",
                    null,
                    "http://localhost:3000/cancel",
                    "http://localhost:3000/thankyou"
            ));
            return ResponseEntity.ok(paymentLink.get("checkoutUrl"));
        } catch (Exception e) {
//            logger.warn(e.getMessage());
            HashMap<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }


    }
    @GetMapping("/all_payment")
    public ResponseEntity<?> getallPayment() {
        try {
            // Lấy tất cả các đơn thanh toán
            List<Payment_order> paymentOrders = paymentOrderService.getAllPaymentOrders();

            // Trả về danh sách các đơn thanh toán
            return ResponseEntity.ok(paymentOrders);
        } catch (Exception e) {
            HashMap<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }

    }
    @GetMapping("/all_book_order")
    public ResponseEntity<?> getallBookOrder(@RequestParam int paymentOrderId) {
        try {
            // Lấy tất cả các đơn sách dựa trên payment_order_id
            List<Book_order> bookOrders = bookOrderService.getBookOrdersByPaymentOrderId(paymentOrderId);

            // Trả về danh sách các đơn sách
            return ResponseEntity.ok(bookOrders);
        } catch (Exception e) {
            HashMap<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }






}
