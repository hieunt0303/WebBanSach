import React from "react";
import loginStyles from '../css/login.module.css'

type Props = {};

const Login = (props: Props) => {
  return (
    <>
      <div class={loginStyles.main}>
        <h2 style={{ textAlign: "center" }}>Đăng Nhập</h2>
        <form action="">
          <label for="last">Tên tài khoản:</label>
          <input type="text" id="last" name="last" required />

          <label for="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            name="password"
            pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$"
            title="Password must contain at least one number,
      one alphabet, one symbol, and be at
      least 8 characters long"
            required
          />

          <button type="submit">Đăng Nhập</button>
          <p class="quen" style={{ textAlign: "right" }}>
            <a class="ab" href="">
              Quên Mật Khẩu?
            </a>
          </p>

          <p>
            Bạn chưa có tài khoản{" "}
            <a class="l" href="register.html">
              Đăng Ký
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
