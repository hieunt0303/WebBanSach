import React, { useState } from "react";
import loginStyles from '../css/login.module.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', formData);
      console.log(response.data);
      // Xử lý khi đăng nhập thành công, chuyển hướng đến trang chính sau khi đăng nhập
      navigate('/');
    } catch (error) {
      setError('Đăng nhập không thành công');
    }
  };

  return (
      <div className={loginStyles.body}>
        <div className={loginStyles.main}>
          <h2 style={{ textAlign: "center" }}>Đăng Nhập</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label htmlFor="password">Mật khẩu:</label>
            <input
                type="password"
                id="password"
                name="password"
                pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$"
                title="Password must contain at least one number, one alphabet, one symbol, and be at least 8 characters long"
                value={formData.password}
                onChange={handleChange}
                required
            />

            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Đăng Nhập</button>
            <p className={loginStyles.quen} style={{ textAlign: "right" }}>
              <a className={loginStyles.ab} href="">
                Quên Mật Khẩu?
              </a>
            </p>

            <p>
              Bạn chưa có tài khoản{" "}
              <Link className={loginStyles.l} to="/register">
                Đăng Ký
              </Link>
            </p>
          </form>
        </div>
      </div>
  );
};

export default Login;
