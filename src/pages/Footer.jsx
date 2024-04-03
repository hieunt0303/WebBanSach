import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import payment from "../assets/img/payment.png";


const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
    {/* Footer Start */}
<div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
  <div className="container py-5">
    <div className="pb-4 mb-4" style={{borderBottom: '1px solid rgba(226, 175, 24, 0.5)'}}>
      <div className="row g-4">
        <div className="col-lg-3">
          <a href="#">
            <h1 className="text-primary mb-0">Bookstore</h1>
           
          </a>
        </div>
        <div className="col-lg-6">
          <div className="position-relative mx-auto">
            <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Your Email" />
            <button type="submit" className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white" style={{top: 0, right: 0}}>Thế giới sách</button>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="d-flex justify-content-end pt-3">
            <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href><i className="fab fa-twitter" /></a>
            <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href><i className="fab fa-youtube" /></a>
            <a className="btn btn-outline-secondary btn-md-square rounded-circle" href><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="row g-5">
      <div className="col-lg-5 col-md-6">
        <div className="footer-item">
          <h4 className="text-light mb-3">Chúc bạn tìm được sách bạn yêu thích.</h4>
          {/* <p className="mb-4">typesetting, remaining essentially unchanged. It was 
            popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
          <a href className="btn border-secondary py-2 px-4 rounded-pill text-primary">Read More</a> */}
        </div>
      </div>
     
      <div className="col-lg-4 col-md-6">
        <div className="d-flex flex-column text-start footer-item">
          <h4 className="text-light mb-3">Tài khoản </h4>
          <a className="btn-link" href>Tài khoản cá nhân</a>
          <a className="btn-link" href>Sản phẩm</a>
          <a className="btn-link" href>Giỏ hàng</a>
          
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="footer-item">
          <h4 className="text-light mb-3">Liên hệ</h4>
          <p  style={{ color: "white",  textAlign: "left"   }}>Địa chỉ: Linh Trung, Thủ Đức</p>

          <p  style={{ color: "white" , textAlign: "left" }}>Email: Bookstore@gmail.com</p>
          <p  style={{ color: "white" , textAlign: "left"  }}>Phone: 033 4567 8910</p>
          <p  style={{ color: "white" , textAlign: "left"  }}>Thanh toán</p>
          <img src={payment} className="img-fluid" alt />

        </div>
      </div>
    </div>
  </div>
</div>
{/* Footer End */}


    </>
  )
}

export default Footer;
