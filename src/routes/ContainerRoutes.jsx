import React from "react";
import {
  Route,
  Routes,
  
} from "react-router-dom";
import Header from "../pages/Header";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import Detail from "../pages/Detail";
import Cart from "../pages/Cart";
import ThongTin from '../pages/ThongTin'




const ContainerRoutes = () => {
  return (
    <>
    <Header/>
      <Routes>
        
        <Route path="login" element={<Login />} />
        <Route path="" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="product" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="detail" element={<Detail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="thongTin" element={<ThongTin />} />


      </Routes>
    <Footer/>
    </>
  );
};

export default ContainerRoutes;
