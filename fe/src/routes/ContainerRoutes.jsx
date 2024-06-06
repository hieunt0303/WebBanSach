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
import HomeAd from"../admin/HomeAd";
import OrderManagement from "../admin/OrderManagement";
import ProductManagement from "../admin/ProductManagement ";
import UserManagement from "../admin/UserManagement";
import AddUser from "../admin/addUser";
import EditUser from "../admin/EditUser";
import AddP from '../admin/AddProduct';
import EditP from '../admin/EditProduct';
import Thankyou from '../pages/Thankyou';
// import Thankyou from '../pages/thankyou';







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
        <Route path="checkout" element={<Checkout cartItems={cartItems}/>}/>
        <Route path='thankyou' element={<Thankyou/>}/>

        <Route path="homeAd" element={<HomeAd/>}/>
        <Route path="orderManagement" element={<OrderManagement/>}/>
        <Route path="productManagement" element={<ProductManagement/>}/>
        <Route path="userManagement" element={<UserManagement/>}/>
        <Route path="addUser" element={<AddUser/>}/>
        <Route path="editUser" element={<EditUser/>}/>
        <Route path="addProduct" element={<AddP/>}/>
        <Route path="editProduct" element={<EditP/>}/>
        
        {/* <Route path ="thankyou" element={<Thankyou/>}/> */}


      </Routes>
    <Footer/>
    </>
  );
};

export default ContainerRoutes;
