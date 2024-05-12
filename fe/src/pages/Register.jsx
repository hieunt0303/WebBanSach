import React, { useState } from "react";
import registerStyles from '../css/register.module.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';



const Register = () => {
  // const [name, setname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [repassword, rePassword] = useState("");
  // const [numberphone, setnumberphone ]= useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repassword: '',
    numberphone: '',
    
   
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
    
    if (formData.password !== formData.repassword) {
        setError('Passwords do not match');
        return;
    }

    try {
        const response = await axios.post('http://localhost:8080/register', formData);
        console.log(response.data);
        setError('Đăng ký thành công');
        //luu tt user
        localStorage.setItem('auth-data',JSON.stringify(response.data));
        // Xử lý khi đăng ký thành công
    } catch (error) {
        setError('Đăng ký không thành công');
    }
};
  return (
    <div className={registerStyles.body}>
      <div class={registerStyles.main}>
        <h2 style={{textAlign: "center"}}>Đăng ký</h2>
        <form onSubmit={handleSubmit}>
          {/* <label for="first"
          >Họ và tên:</label
          >
          <input
            type="text"
            id="first"
            name="first"
            required
          /> */}

          <label for="last"
          >Tên tài khoản:</label
          >
          <input
            type="text"
            id="last"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label for="repassword"
          >Nhập lại mật khẩu:</label
          >
          <input
            type="password"
            id="repassword"
            name="repassword"
            value={formData.repassword}
            onChange={handleChange}
            required
          />

          <label for="mobile"
          >Số điện thoại:</label
          >
          <input
            type="text"
            id="mobile"
            name="numberphone"
            maxlength="10"
            value={formData.numberphone}
            onChange={handleChange}

            required
          />
         

         {error && <p style={{ color: 'red' }}>{error}</p>}
         <button type="submit">
            Đăng Ký
          </button>
          <p >Bạn đã có tài khoản <Link to="/login" >Đăng Nhập</Link></p>
        </form>
      </div>
    </div>

  );
}

export default Register;