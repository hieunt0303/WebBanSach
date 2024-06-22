package com.bookstore.be.model;

import java.security.SecureRandom;

public class PasswordGenerator {
private static final String CHAR_LOWER = "abcdefghijklmnopqrstuvwxyz";
    private static final String CHAR_UPPER = CHAR_LOWER.toUpperCase();
    private static final String NUMBER = "0123456789";
    private static final String OTHER_CHAR = "!@#$%&*()_+-=[]?";

    // Chuỗi ký tự cho phép sử dụng trong mật khẩu
    private static final String PASSWORD_ALLOW_BASE = CHAR_LOWER + CHAR_UPPER + NUMBER + OTHER_CHAR;
    private static final SecureRandom random = new SecureRandom();

    // Phương thức để tạo mật khẩu ngẫu nhiên
    public static String generateRandomPassword(int length) {
        if (length < 8) throw new IllegalArgumentException("Độ dài mật khẩu phải ít nhất là 8 ký tự");

        StringBuilder password = new StringBuilder(length);
        boolean hasDigit = false;
        boolean hasUpper = false;
        boolean hasSpecial = false;

        // Ngẫu nhiên từng ký tự
        for (int i = 0; i < length; i++) {
            int index = random.nextInt(PASSWORD_ALLOW_BASE.length());
            char randomChar = PASSWORD_ALLOW_BASE.charAt(index);
            password.append(randomChar);

            // Kiểm tra xem ký tự có phải là số không
            if (NUMBER.indexOf(randomChar) != -1) {
                hasDigit = true;
            }
            // Kiểm tra xem ký tự có phải là chữ hoa không
            else if (CHAR_UPPER.indexOf(randomChar) != -1) {
                hasUpper = true;
            }
            // Kiểm tra xem ký tự có phải là ký tự đặc biệt không
            else if (OTHER_CHAR.indexOf(randomChar) != -1) {
                hasSpecial = true;
            }
        }

        // Kiểm tra xem mật khẩu có ít nhất 1 số, 1 chữ hoa, 1 kí tự đặc biệt và có độ dài ít nhất 8 ký tự không
        if (!hasDigit || !hasUpper || !hasSpecial) {
            // Nếu không đủ điều kiện, gọi lại phương thức để tạo mật khẩu mới
            return generateRandomPassword(length);
        }

        return password.toString();
    }
}
