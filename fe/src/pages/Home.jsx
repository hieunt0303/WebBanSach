import React from "react";
// type Props = {};
import vh1 from '../assets/img/vh1.jpg';
import vh2 from '../assets/img/vh2.jpg';
import vh4 from '../assets/img/vh4.jpg';
import bg from '../assets/img/bg.jpg';
import tn1 from'../assets/img/tn1.jpg';
import tn2 from'../assets/img/tn2.jpg';
import tn3 from'../assets/img/tn3.jpg';
import tn4 from'../assets/img/tn4.jpg';


import { Link, useNavigate } from "react-router-dom";
import { Nav, Tab, Container } from 'react-bootstrap';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
     
      
      <div className="container-fluid py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-12 col-lg-7">
              {/* <h4 className="mb-3 text-secondary">100% Organic Foods</h4> */}
              <h1 className="mb-5 display-3 text-primary">Chào quý khách đến với thế giới sách</h1>
              <div className="position-relative mx-auto">
                <input
                  className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                  type="number"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                  style={{ top: 0, right: "25%" }}
                >
                 Bắt đầu
                </button>
              </div>
            </div>
            <div className="col-md-12 col-lg-5">
              <div
                id="carouselId"
                className="carousel slide position-relative"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active rounded">
                    <img
                      src={bg}
                      className="img-fluid w-100 h-100 bg-secondary rounded"
                      alt="First slide"
                    />
                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">
                      Fruites
                    </a> */}
                  </div>
                  <div className="carousel-item rounded">
                    <img
                      src={bg}
                      className="img-fluid w-100 h-100 rounded"
                      alt="Second slide"
                    />
                    <a href="#" className="btn px-4 py-2 text-white rounded">
                      Vesitables
                    </a>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselId"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselId"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid featurs py-5">
            <div class="container py-5">
                <div class="row g-4">
                    <div class="col-md-6 col-lg-3">
                        <div class="featurs-item text-center rounded bg-light p-4">
                            <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i class="fas fa-car-side fa-3x text-white"></i>
                            </div>
                            <div class="featurs-content text-center">
                                <h5>Miễn phí giao hàng</h5>
                                <p class="mb-0">Miễn phí cho đơn hàng từ 500K</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="featurs-item text-center rounded bg-light p-4">
                            <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i class="fas fa-user-shield fa-3x text-white"></i>
                            </div>
                            <div class="featurs-content text-center">
                                <h5>Thanh toán </h5>
                                <p class="mb-0">Thanh toán an toàn </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="featurs-item text-center rounded bg-light p-4">
                            <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i class="fas fa-exchange-alt fa-3x text-white"></i>
                            </div>
                            <div class="featurs-content text-center">
                                <h5>Kiểm hàng</h5>
                                <p class="mb-0">
                                  Kiểm tra hàng trước khi nhận
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="featurs-item text-center rounded bg-light p-4">
                            <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i class="fa fa-phone-alt fa-3x text-white"></i>
                            </div>
                            <div class="featurs-content text-center">
                                <h5>Hỗ trợ</h5>
                                <p class="mb-0">Hỗ trợ giải quyết các vấn đề </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid fruite py-5">
            <div class="container py-5">
                <div class="tab-class text-center">
                    <div class="row g-4">
                        <div class="col-lg-4 text-start">
                            <h1>Sản phẩm </h1>
                        </div>
                      <Container>
                        <div class="col-lg-12 text-end">
                          
                          <Tab.Container defaultActiveKey="1">
                            <Nav class="nav nav-pills d-inline-flex text-center mb-5">
                              <Nav.Item>
                                <Nav.Link eventKey="1"  as="span" class="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill"><span class="text-dark" style={{width:'130px'}}>Tất cả</span></Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                              <Nav.Link eventKey="2"  as="span" class="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill"><span class="text-dark" style={{width:'130px'}}>Thiếu nhi</span></Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                              <Nav.Link eventKey="3"  as="span" class="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill"><span class="text-dark" style={{width:'130px'}}>Kinh tế</span></Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                              <Nav.Link eventKey="4"  as="span" class="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill"><span class="text-dark" style={{width:'130px'}}>Kỹ năng sống</span></Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                              <Nav.Link eventKey="5"  as="span" class="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill"><span class="text-dark" style={{width:'130px'}}>Văn học</span></Nav.Link>
                              </Nav.Item>
                            </Nav>
                            <Tab.Content>
                              <Tab.Pane eventKey="1">
                                <div id="1" class="tab-pane fade show p-0 active">
                                  <div class="row g-4">
                                      <div class="col-lg-12">
                                          <div class="row g-4">
                                              <div class="col-md-6 col-lg-4 col-xl-3">
                                                  <div class="rounded position-relative fruite-item">
                                                      <div class="fruite-img">
                                                          <img src={vh1} class="img-fluid w-100 rounded-top" alt=""/>
                                                      </div>
                                                      <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Sale</div>
                                                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                          <h4>Tô Bình Yên Vẽ Hạnh Phúc (Tái Bản 2022)</h4><br></br>
                                                          <p class="text-dark fs-5 fw-bold mb-0">163.172đ  </p>
                                                          {/* <div class="d-flex justify-content-between flex-lg-wrap"> */}
                                                              {/* <p class="text-dark fs-5 fw-bold mb-0">163.172đ  </p> */}<br></br>
                                                              <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                          {/* </div> */}
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-6 col-lg-4 col-xl-3">
                                                  <div class="rounded position-relative fruite-item">
                                                      <div class="fruite-img">
                                                          <img src={vh2} class="img-fluid w-100 rounded-top" alt=""/>
                                                      </div>
                                                      {/* <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Sale</div> */}
                                                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                          <h4>Trốn Lên Mái Nhà Để Khóc - Tặng Kèm Bookmark</h4><br></br>
                                                          
                                                              <p class="text-dark fs-5 fw-bold mb-0">68.098đ</p><br></br>
                                                              <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-6 col-lg-4 col-xl-3">
                                                  <div class="rounded position-relative fruite-item">
                                                      <div class="fruite-img">
                                                          <img src={vh4} class="img-fluid w-100 rounded-top" alt=""/>
                                                      </div>
                                                      {/* <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Fruits</div> */}
                                                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                          <h4>Tủ Sách Văn Học Cổ Điển Rút Gọn - Người Cá</h4><br></br>
                                                              <p class="text-dark fs-5 fw-bold mb-0">94.999đ</p><br></br>
                                                              <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-6 col-lg-4 col-xl-3">
                                                  <div class="rounded position-relative fruite-item">
                                                      <div class="fruite-img">
                                                          <img src={tn2} class="img-fluid w-100 rounded-top" alt=""/>
                                                      </div>
                                                      {/* <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Sale</div> */}
                                                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                          <h4>Chuyện Kể Trên Núi - Bí Mật Của Mèo Bố</h4><br></br>
                                                          
                                                              <p class="text-dark fs-5 fw-bold mb-0">88.098đ</p><br></br>
                                                              <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-6 col-lg-4 col-xl-3">
                                                  <div class="rounded position-relative fruite-item">
                                                      <div class="fruite-img">
                                                          <img src={tn3} class="img-fluid w-100 rounded-top" alt=""/>
                                                      </div>
                                                      {/* <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Fruits</div> */}
                                                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                          <h4>Chuyện Kể Trên Núi - Mứt Dâu Của Bà Gấu</h4><br></br>
                                                              <p class="text-dark fs-5 fw-bold mb-0">35.999đ</p><br></br>
                                                              <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-6 col-lg-4 col-xl-3">
                                                  <div class="rounded position-relative fruite-item">
                                                      <div class="fruite-img">
                                                          <img src={tn4} class="img-fluid w-100 rounded-top" alt=""/>
                                                      </div>
                                                      {/* <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Fruits</div> */}
                                                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                          <h4>Chuyện Kể Trên Núi - Căn Nhà Nhỏ Hạnh Phúc</h4><br></br>
                                                              <p class="text-dark fs-5 fw-bold mb-0">35.599đ</p><br></br>
                                                              <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                      </div>
                                                  </div>
                                              </div>

                                            
                                          </div>
                                      </div>
                                  </div>
                                </div>                             
                              </Tab.Pane>
                              <Tab.Pane eventKey="2">
                              <div id="2" class="tab-pane fade show p-0 active">
                                  <div class="row g-4">
                                      <div class="col-lg-12">
                                          <div class="row g-4">
                                              <div class="col-md-6 col-lg-4 col-xl-3">
                                                  <div class="rounded position-relative fruite-item">
                                                      <div class="fruite-img">
                                                          <img src={tn1} class="img-fluid w-100 rounded-top" alt=""/>
                                                      </div>
                                                      <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Sale</div>
                                                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                          <h4><br></br> <br></br>Thơ Hay Viết Cho Thiếu Nhi - Hoa Vừa Đi Vừa Nở</h4><br></br>
                                                          <p class="text-dark fs-5 fw-bold mb-0">51.000đ  </p>
                                                          {/* <div class="d-flex justify-content-between flex-lg-wrap"> */}
                                                              {/* <p class="text-dark fs-5 fw-bold mb-0">163.172đ  </p> */}<br></br>
                                                              <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                          {/* </div> */}
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-6 col-lg-4 col-xl-3">
                                                  <div class="rounded position-relative fruite-item">
                                                      <div class="fruite-img">
                                                          <img src={tn2} class="img-fluid w-100 rounded-top" alt=""/>
                                                      </div>
                                                      {/* <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Sale</div> */}
                                                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                          <h4>Chuyện Kể Trên Núi - Bí Mật Của Mèo Bố</h4><br></br>
                                                          
                                                              <p class="text-dark fs-5 fw-bold mb-0">88.098đ</p><br></br>
                                                              <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-6 col-lg-4 col-xl-3">
                                                  <div class="rounded position-relative fruite-item">
                                                      <div class="fruite-img">
                                                          <img src={tn3} class="img-fluid w-100 rounded-top" alt=""/>
                                                      </div>
                                                      {/* <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Fruits</div> */}
                                                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                          <h4>Chuyện Kể Trên Núi - Mứt Dâu Của Bà Gấu</h4><br></br>
                                                              <p class="text-dark fs-5 fw-bold mb-0">35.999đ</p><br></br>
                                                              <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-6 col-lg-4 col-xl-3">
                                                  <div class="rounded position-relative fruite-item">
                                                      <div class="fruite-img">
                                                          <img src={tn4} class="img-fluid w-100 rounded-top" alt=""/>
                                                      </div>
                                                      {/* <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Fruits</div> */}
                                                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                          <h4>Chuyện Kể Trên Núi - Căn Nhà Nhỏ Hạnh Phúc</h4><br></br>
                                                              <p class="text-dark fs-5 fw-bold mb-0">35.599đ</p><br></br>
                                                              <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                      </div>
                                                  </div>
                                              </div>
                                            
                                          </div>
                                      </div>
                                  </div>
                                </div>                             
                              </Tab.Pane>
                              <Tab.Pane eventKey="3">
                                 <div id="2" class="tab-pane fade show p-0 active">
                                  <div class="row g-4">
                                      <div class="col-lg-12">
                                          <div class="row g-4">
                                              <div class="col-md-6 col-lg-4 col-xl-3">
                                                  <div class="rounded position-relative fruite-item">
                                                      <div class="fruite-img">
                                                          <img src={tn1} class="img-fluid w-100 rounded-top" alt=""/>
                                                      </div>
                                                      <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Sale</div>
                                                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                          <h4><br></br> <br></br>Thơ Hay Viết Cho Thiếu Nhi - Hoa Vừa Đi Vừa Nở</h4><br></br>
                                                          <p class="text-dark fs-5 fw-bold mb-0">51.000đ  </p>
                                                          {/* <div class="d-flex justify-content-between flex-lg-wrap"> */}
                                                              {/* <p class="text-dark fs-5 fw-bold mb-0">163.172đ  </p> */}<br></br>
                                                              <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                          {/* </div> */}
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-6 col-lg-4 col-xl-3">
                                                  <div class="rounded position-relative fruite-item">
                                                      <div class="fruite-img">
                                                          <img src={tn2} class="img-fluid w-100 rounded-top" alt=""/>
                                                      </div>
                                                      {/* <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Sale</div> */}
                                                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                          <h4>Chuyện Kể Trên Núi - Bí Mật Của Mèo Bố</h4><br></br>
                                                          
                                                              <p class="text-dark fs-5 fw-bold mb-0">88.098đ</p><br></br>
                                                              <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-6 col-lg-4 col-xl-3">
                                                  <div class="rounded position-relative fruite-item">
                                                      <div class="fruite-img">
                                                          <img src={tn3} class="img-fluid w-100 rounded-top" alt=""/>
                                                      </div>
                                                      {/* <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Fruits</div> */}
                                                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                          <h4>Chuyện Kể Trên Núi - Mứt Dâu Của Bà Gấu</h4><br></br>
                                                              <p class="text-dark fs-5 fw-bold mb-0">35.999đ</p><br></br>
                                                              <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-6 col-lg-4 col-xl-3">
                                                  <div class="rounded position-relative fruite-item">
                                                      <div class="fruite-img">
                                                          <img src={tn4} class="img-fluid w-100 rounded-top" alt=""/>
                                                      </div>
                                                      {/* <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Fruits</div> */}
                                                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                          <h4>Chuyện Kể Trên Núi - Căn Nhà Nhỏ Hạnh Phúc</h4><br></br>
                                                              <p class="text-dark fs-5 fw-bold mb-0">35.599đ</p><br></br>
                                                              <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                      </div>
                                                  </div>
                                              </div>
                                            
                                          </div>
                                      </div>
                                  </div>
                                </div> 
                              </Tab.Pane>
                              <Tab.Pane eventKey="4">
                              <div id="2" class="tab-pane fade show p-0 active">
                                  <div class="row g-4">
                                      <div class="col-lg-12">
                                          <div class="row g-4">
                                              <div class="col-md-6 col-lg-4 col-xl-3">
                                                  <div class="rounded position-relative fruite-item">
                                                      <div class="fruite-img">
                                                          <img src={tn1} class="img-fluid w-100 rounded-top" alt=""/>
                                                      </div>
                                                      <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Sale</div>
                                                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                          <h4><br></br> <br></br>Thơ Hay Viết Cho Thiếu Nhi - Hoa Vừa Đi Vừa Nở</h4><br></br>
                                                          <p class="text-dark fs-5 fw-bold mb-0">51.000đ  </p>
                                                          {/* <div class="d-flex justify-content-between flex-lg-wrap"> */}
                                                              {/* <p class="text-dark fs-5 fw-bold mb-0">163.172đ  </p> */}<br></br>
                                                              <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                          {/* </div> */}
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-6 col-lg-4 col-xl-3">
                                                  <div class="rounded position-relative fruite-item">
                                                      <div class="fruite-img">
                                                          <img src={tn2} class="img-fluid w-100 rounded-top" alt=""/>
                                                      </div>
                                                      {/* <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Sale</div> */}
                                                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                          <h4>Chuyện Kể Trên Núi - Bí Mật Của Mèo Bố</h4><br></br>
                                                          
                                                              <p class="text-dark fs-5 fw-bold mb-0">88.098đ</p><br></br>
                                                              <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-6 col-lg-4 col-xl-3">
                                                  <div class="rounded position-relative fruite-item">
                                                      <div class="fruite-img">
                                                          <img src={tn3} class="img-fluid w-100 rounded-top" alt=""/>
                                                      </div>
                                                      {/* <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Fruits</div> */}
                                                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                          <h4>Chuyện Kể Trên Núi - Mứt Dâu Của Bà Gấu</h4><br></br>
                                                              <p class="text-dark fs-5 fw-bold mb-0">35.999đ</p><br></br>
                                                              <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-6 col-lg-4 col-xl-3">
                                                  <div class="rounded position-relative fruite-item">
                                                      <div class="fruite-img">
                                                          <img src={tn4} class="img-fluid w-100 rounded-top" alt=""/>
                                                      </div>
                                                      {/* <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Fruits</div> */}
                                                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                          <h4>Chuyện Kể Trên Núi - Căn Nhà Nhỏ Hạnh Phúc</h4><br></br>
                                                              <p class="text-dark fs-5 fw-bold mb-0">35.599đ</p><br></br>
                                                              <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                      </div>
                                                  </div>
                                              </div>
                                            
                                          </div>
                                      </div>
                                  </div>
                                </div> 
                              </Tab.Pane>
                              <Tab.Pane eventKey="5">
                                  <div id="5" class="tab-pane fade show p-0 active">
                                      <div class="row g-4">
                                          <div class="col-lg-12">
                                              <div class="row g-4">
                                                  <div class="col-md-6 col-lg-4 col-xl-3">
                                                      <div class="rounded position-relative fruite-item">
                                                          <div class="fruite-img">
                                                              <img src={vh1} class="img-fluid w-100 rounded-top" alt=""/>
                                                          </div>
                                                          <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                              <h4>Tô Bình Yên Vẽ Hạnh Phúc (Tái Bản 2022)</h4><br></br>
                                                              <p class="text-dark fs-5 fw-bold mb-0">163.172đ  </p>
                                                              {/* <div class="d-flex justify-content-between flex-lg-wrap"> */}
                                                                  {/* <p class="text-dark fs-5 fw-bold mb-0">163.172đ  </p> */}<br></br>
                                                                  <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng</a>
                                                              {/* </div> */}
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-md-6 col-lg-4 col-xl-3">
                                                      <div class="rounded position-relative fruite-item">
                                                          <div class="fruite-img">
                                                              <img src={vh2} class="img-fluid w-100 rounded-top" alt=""/>
                                                          </div>
                                                          {/* <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Sale</div> */}
                                                          <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                              <h4>Trốn Lên Mái Nhà Để Khóc - Tặng Kèm Bookmark</h4><br></br>
                                                              
                                                                  <p class="text-dark fs-5 fw-bold mb-0">68.098đ</p><br></br>
                                                                  <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-md-6 col-lg-4 col-xl-3">
                                                      <div class="rounded position-relative fruite-item">
                                                          <div class="fruite-img">
                                                              <img src={vh4} class="img-fluid w-100 rounded-top" alt=""/>
                                                          </div>
                                                          {/* <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top:'10px',left:'10px'}}>Fruits</div> */}
                                                          <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                              <h4>Tủ Sách Văn Học Cổ Điển Rút Gọn - Người Cá</h4><br></br>
                                                                  <p class="text-dark fs-5 fw-bold mb-0">94.999đ</p><br></br>
                                                                  <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                                
                                              </div>
                                          </div>
                                      </div>
                                    </div> 
                              </Tab.Pane>
                            </Tab.Content>
                          </Tab.Container>
                        </div>
                      </Container>  
                    </div>
                   
                </div>      
            </div>
        </div>
        
    </>
  );
};

export default Home;
