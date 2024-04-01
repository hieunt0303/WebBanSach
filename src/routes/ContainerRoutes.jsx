import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";



const ContainerRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default ContainerRoutes;
