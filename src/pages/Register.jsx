import React from "react";
import registerStyles from '../css/register.module.css'



const Register = () => {
  return (
    <div className={registerStyles.body}>
      <div class={registerStyles.main}>
        <h2 style={{textAlign: "center"}}>Đăng ký</h2>
        <form action="">
          <label for="first"
          >Họ và tên:</label
          >
          <input
            type="text"
            id="first"
            name="first"
            required
          />

          <label for="last"
          >Tên tài khoản:</label
          >
          <input
            type="text"
            id="last"
            name="last"
            required
          />

          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />

          <label for="password"
          >Mật khẩu:</label
          >
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

          <label for="repassword"
          >Nhập lại mật khẩu:</label
          >
          <input
            type="password"
            id="repassword"
            name="repassword"
            required
          />

          <label for="mobile"
          >Số điện thoại:</label
          >
          <input
            type="text"
            id="mobile"
            name="mobile"
            maxlength="10"
            required
          />
         

          <button type="submit">
            Đăng Ký
          </button>
          <p >Bạn đã có tài khoản <a href="">Đăng Nhập</a></p>
        </form>
      </div>
    </div>

  );
};

export default Register;