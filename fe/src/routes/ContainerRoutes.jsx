import React, { useState, useEffect } from 'react';
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
import Checkout from "../pages/Checkout";





const ContainerRoutes = () => {
  const [cartItems, setCartItems] = useState([]); 
  const [authData, setAuthData] = useState(null); 


  // Function to update cartItems state
  const updateCartItems = (items) => {
    setCartItems(items);
  };
  return (
    <>
      <Header cartItems={cartItems} /> {/* truyền cartItems làm prop cho Header */}
      <Routes>
        
        <Route path="login" element={<Login />} />
        <Route path="" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="product" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail authData={authData} updateCartItems={updateCartItems} />} />
        <Route
          path="cart"
          element={<Cart cartItems={cartItems} updateCartItems={updateCartItems} authData={authData} />} // Pass cartItems and updateCartItems as props to Cart
        />        <Route path="thongTin" element={<ThongTin />} />
        <Route path="checkout" element={<Checkout/>}/>


      </Routes>
    <Footer/>
    </>
  );
};

export default ContainerRoutes;
