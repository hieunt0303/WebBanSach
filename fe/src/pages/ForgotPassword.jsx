import React, { useEffect, useState } from "react";
import loginStyles from '../css/login.module.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://webbansach-production.up.railway.app/forgotpassword", { email });
      setMessage(response.data);
      setShowPassword(true);
    } catch (error) {
      setMessage(error.response.data);
    }
  };
  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className={loginStyles.body}>
      <div className="">
        <h2 style={{ textAlign: "center" }}>Quên mật khẩu</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />
          <button type="submit">Gửi</button>
        </form>

        {showPassword && (
          <div>
            <p style={{color: "yellow"}}>{message}</p>
            <p style={{color: "cornsilk"}}onClick={handleBackToLogin}>Quay lại đăng nhập</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default ForgotPassword