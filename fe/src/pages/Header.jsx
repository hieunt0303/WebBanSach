import React, { useEffect, useState } from "react";
// type Props = {};


import { Link, useNavigate } from "react-router-dom";

const Header = ({ cartItems }) => {
  const navigate = useNavigate();
  const [infoUser, setInfoUser] = useState(null)
    // Tính tổng số sản phẩm trong giỏ hàng
    const totalItems = cartItems.length;


  useEffect(() => {
    //check xem trong localStorage có biến auth-data hay chưa
    const authData = localStorage.getItem('auth-data')
    if (authData) {
      setInfoUser(JSON.parse(authData));
    }

  }, [])

  return (
    <>


      <div className="container-fluid fixed-top">
        <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary"></i>{" "}
                <a href="#" className="text-white">
                  Linh Trung, Thủ Đức
                </a>
              </small>

            </div>
            <div className="top-link pe-2">
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary"></i>
                <a href="#" className="text-white">
                  Bookstore@gmail.com
                </a>
              </small>
            </div>
          </div>
        </div>
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <a href="index.html" className="navbar-brand">
              <h1 className="text-primary display-6">Bookstore</h1>
            </a>
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
              <div className="navbar-nav mx-auto">

                <Link to="/" className="nav-item nav-link active">
                  Trang chủ
                </Link>
                <span onClick={() => navigate('/product')} className="nav-item nav-link">
                  Sản phẩm
                </span>
                <Link to="/thongTin" className="nav-item nav-link ">
                  Thông tin
                </Link>
                {/* <Link to="/register" className="nav-item nav-link">
                  Thanh toán
                </Link> */}
                {/* <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    Pages
                  </a>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <a href="cart.html" className="dropdown-item">
                      Cart
                    </a>
                    <a href="chackout.html" className="dropdown-item">
                      Chackout
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                      Testimonial
                    </a>
                    <a href="404.html" className="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div> */}
                <Link to="/contact" className="nav-item nav-link">
                  Liên hệ
                </Link>
              </div>
              <div className="d-flex m-3 me-0">
                {/* <button
                  className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <i className="fas fa-search text-primary"></i>
                </button> */}
                <a href="#" className="position-relative me-4 my-auto">
                  {/* <i className="fa fa-shopping-bag fa-2x"></i> */}
                  <Link to="/cart" className="fa fa-shopping-bag fa-2x">
                  </Link>
                  <span
                    className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                    style={{ top: "-5px", left: "15px", height: "20px", minWidth: "20px" }}
                  >
                     {totalItems}
                  </span>

                  {/* <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{top: -5px; left: 15px; height: 20px; min-width: 20px;}}>3</span> */}
                </a>
                {/* Hiển thị biểu tượng mail dựa trên việc infoUser có tồn tại hay không */}
                {infoUser ? (
                  <a href="#" className="my-auto">
                   <div style={{backgroundColor:'#81c408', padding:'10px', display:'flex', borderRadius:'100%', height:'40px', width:'40px', alignItems:'center',justifyContent:'center', fontWeight:600, color:'white'}}>{infoUser.email.charAt(0)}</div>
                  </a>
                ) : (
                  <div  className="my-auto" onClick={()=>{
                    localStorage.removeItem('auth-data');
                    navigate('/login')
                  }}>
                    <i className="fas fa-user fa-2x"></i>
                  </div>
                )}
                {
                  infoUser && <div onClick={()=>{
                    localStorage.removeItem('auth-data');
                    window.location.reload('/login')
                  }} > <i className="fas fa-power-off fa-2x" style={{ marginLeft: '10px' }}></i></div>
                }
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div
        className="modal fade"
        id="searchModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Search by keyword
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="input-group w-75 mx-auto d-flex">
                <input
                  type="search"
                  className="form-control p-3"
                  placeholder="keywords"
                  aria-describedby="search-icon-1"
                />
                <span id="search-icon-1" className="input-group-text p-3">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;