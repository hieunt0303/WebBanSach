import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav, Tab, Container } from 'react-bootstrap';

import vh1 from '../assets/img/vh1.jpg';
import vh2 from '../assets/img/vh2.jpg';
import vh4 from '../assets/img/vh4.jpg';
import bg from '../assets/img/bg.jpg';
import tn1 from'../assets/img/tn1.jpg';
import tn2 from'../assets/img/tn2.jpg';
import tn3 from'../assets/img/tn3.jpg';
import tn4 from'../assets/img/tn4.jpg';

const Product = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Thiếu nhi');

 

  return (
    <>
    <div>
  
  {/* Fruits Shop Start*/}
  <div className="container-fluid fruite py-5">
    <div className="container py-5">
      <h1 className="mb-4">Sản phẩm của chúng tôi</h1>
      <div className="row g-4">
        <div className="col-lg-12">
          <div className="row g-4">
            <div className="col-xl-14">
              <div className="input-group w-100 mx-auto d-flex">
                <input type="search" className="form-control p-3" placeholder="Tìm kiếm" aria-describedby="search-icon-1" />
                <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
              </div>
            </div>
            <div className="col-6" />
          
          </div>
         
          <div className="row g-4">
            <div className="col-lg-3">
                <div className="row g-4">
                <div className="col-lg-12">
                    <div className="mb-3">
                    <h4>Danh mục sản phẩm</h4>
                    <ul className="list-unstyled fruite-categorie">
                        <li>
                        <div className="d-flex justify-content-between fruite-name ">
                            <a href="#" onClick={() => setSelectedCategory('Thiếu nhi')}>
                            <i className="fas fa-apple-alt me-2" />
                            Thiếu nhi
                            </a>
                            <span>(3)</span>
                        </div>
                        </li>
                        <li>
                        <div className="d-flex justify-content-between fruite-name">
                            <a href="#" onClick={() => setSelectedCategory('Văn học')}>
                            <i className="fas fa-apple-alt me-2" />
                            Văn học
                            </a>
                            <span>(5)</span>
                        </div>
                        </li>
                        <li>
                        <div className="d-flex justify-content-between fruite-name">
                            <a href="#" onClick={() => setSelectedCategory('Kinh tế')}>
                            <i className="fas fa-apple-alt me-2" />
                            Kinh tế
                            </a>
                            <span>(2)</span>
                        </div>
                        </li>
                        <li>
                        <div className="d-flex justify-content-between fruite-name">
                            <a href="#" onClick={() => setSelectedCategory('Kỹ năng sống')}>
                            <i className="fas fa-apple-alt me-2" />
                            Kỹ năng sống
                            </a>
                            <span>(8)</span>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="mb-3">
                    <h4 className="mb-2">Price</h4>
                    <input
                        type="range"
                        className="form-range w-100"
                        id="rangeInput"
                        name="rangeInput"
                        min={0}
                        max={500}
                        defaultValue={0}
                        oninput="amount.value=rangeInput.value"
                    />
                    <output id="amount" name="amount" min-velue={0} max-value={500} htmlFor="rangeInput">
                        0
                    </output>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="row g-4 justify-content-center">
                {selectedCategory === 'Thiếu nhi' && (
                    <>
                            <div className="col-md-6 col-lg-6 col-xl-4">
                                <div className="rounded position-relative fruite-item">
                                    <div className="fruite-img">
                                        <img src={vh1} className="img-fluid w-100 rounded-top" alt />
                                    </div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                    <Link to="/detail"><h4>Tô Bình Yên Vẽ Hạnh  (Tái Bản 2022)<br></br></h4></Link><br></br><br></br>
                                            <p class="text-dark fs-5 fw-bold mb-0" style={{textAlign: "left"}}>163.172đ  </p><br></br>
                                            <Link to="/cart" className="btn border border-secondary rounded-pill px-3 text-primary d-flex justify-content-center align-items-center">
                                                <i className="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng
                                            </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-4">
                                <div className="rounded position-relative fruite-item">
                                    <div className="fruite-img">
                                        <img src={vh2} className="img-fluid w-100 rounded-top" alt />
                                    </div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                    <Link to="/detail"><h4>Trốn Lên Mái Nhà Để Khóc - Tặng Kèm Bookmark</h4></Link><br></br>
                                                              
                                         <p class="text-dark fs-5 fw-bold mb-0" style={{textAlign: "left"}}>68.098đ</p><br></br>
                                            <Link to="/cart" className="btn border border-secondary rounded-pill px-3 text-primary d-flex justify-content-center align-items-center">
                                                <i className="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng
                                            </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-4">
                                <div className="rounded position-relative fruite-item">
                                    <div className="fruite-img">
                                        <img src={vh4} className="img-fluid w-100 rounded-top" alt />
                                    </div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                    <Link to="/detail"><h4>Tủ Sách Văn Học Cổ Điển Rút Gọn - Người Cá <br></br></h4></Link><br></br>
                                             <p class="text-dark fs-5 fw-bold mb-0" style={{textAlign: "left"}}>94.999đ</p><br></br>
                                            <Link to="/cart" className="btn border border-secondary rounded-pill px-3 text-primary d-flex justify-content-center align-items-center">
                                                <i className="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng
                                            </Link>
                                    </div>
                                </div>
                            </div>
                            
                            
                     </>
                )}
                {selectedCategory === 'Văn học' && (
                    <>
                            <div className="col-md-6 col-lg-6 col-xl-4">
                                <div className="rounded position-relative fruite-item">
                                    <div className="fruite-img">
                                        <img src={vh1} className="img-fluid w-100 rounded-top" alt />
                                    </div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                        <h4>Tô Bình Yên Vẽ Hạnh Phúc (Tái Bản 2022)<br></br></h4><br></br><br></br>
                                            <p class="text-dark fs-5 fw-bold mb-0" style={{textAlign: "left"}}>163.172đ  </p><br></br>
                                            <Link to="/cart" className="btn border border-secondary rounded-pill px-3 text-primary d-flex justify-content-center align-items-center">
                                                <i className="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng
                                            </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-4">
                                <div className="rounded position-relative fruite-item">
                                    <div className="fruite-img">
                                        <img src={vh2} className="img-fluid w-100 rounded-top" alt />
                                    </div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                        <h4>Trốn Lên Mái Nhà Để Khóc - Tặng Kèm Bookmark</h4><br></br>
                                                              
                                         <p class="text-dark fs-5 fw-bold mb-0" style={{textAlign: "left"}}>68.098đ</p><br></br>
                                            <Link to="/cart" className="btn border border-secondary rounded-pill px-3 text-primary d-flex justify-content-center align-items-center">
                                                <i className="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng
                                            </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-4">
                                <div className="rounded position-relative fruite-item">
                                    <div className="fruite-img">
                                        <img src={vh4} className="img-fluid w-100 rounded-top" alt />
                                    </div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                        <h4>Tủ Sách Văn Học Cổ Điển Rút Gọn - Người Cá <br></br></h4><br></br>
                                             <p class="text-dark fs-5 fw-bold mb-0" style={{textAlign: "left"}}>94.999đ</p><br></br>
                                            <Link to="/cart" className="btn border border-secondary rounded-pill px-3 text-primary d-flex justify-content-center align-items-center">
                                                <i className="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng
                                            </Link>
                                    </div>
                                </div>
                            </div>
                            
                            
                     </>
                )}
               {selectedCategory === 'Kinh tế' && (
                    <>
                            <div className="col-md-6 col-lg-6 col-xl-4">
                                <div className="rounded position-relative fruite-item">
                                    <div className="fruite-img">
                                        <img src={vh1} className="img-fluid w-100 rounded-top" alt />
                                    </div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                        <h4>Tô Bình Yên Vẽ Hạnh Phúc (Tái Bản 2022)<br></br></h4><br></br><br></br>
                                            <p class="text-dark fs-5 fw-bold mb-0" style={{textAlign: "left"}}>163.172đ  </p><br></br>
                                            <Link to="/cart" className="btn border border-secondary rounded-pill px-3 text-primary d-flex justify-content-center align-items-center">
                                                <i className="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng
                                            </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-4">
                                <div className="rounded position-relative fruite-item">
                                    <div className="fruite-img">
                                        <img src={vh2} className="img-fluid w-100 rounded-top" alt />
                                    </div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                        <h4>Trốn Lên Mái Nhà Để Khóc - Tặng Kèm Bookmark</h4><br></br>
                                                              
                                         <p class="text-dark fs-5 fw-bold mb-0" style={{textAlign: "left"}}>68.098đ</p><br></br>
                                            <Link to="/cart" className="btn border border-secondary rounded-pill px-3 text-primary d-flex justify-content-center align-items-center">
                                                <i className="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng
                                            </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-4">
                                <div className="rounded position-relative fruite-item">
                                    <div className="fruite-img">
                                        <img src={vh4} className="img-fluid w-100 rounded-top" alt />
                                    </div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                        <h4>Tủ Sách Văn Học Cổ Điển Rút Gọn - Người Cá <br></br></h4><br></br>
                                             <p class="text-dark fs-5 fw-bold mb-0" style={{textAlign: "left"}}>94.999đ</p><br></br>
                                            <Link to="/cart" className="btn border border-secondary rounded-pill px-3 text-primary d-flex justify-content-center align-items-center">
                                                <i className="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng
                                            </Link>
                                    </div>
                                </div>
                            </div>    
                     </>
                     
                )}
                 {selectedCategory === 'Kỹ năng sống' && (
                    <>
                            <div className="col-md-6 col-lg-6 col-xl-4">
                                <div className="rounded position-relative fruite-item">
                                    <div className="fruite-img">
                                        <img src={vh1} className="img-fluid w-100 rounded-top" alt />
                                    </div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                        <h4>Tô Bình Yên Vẽ Hạnh Phúc (Tái Bản 2022)<br></br></h4><br></br><br></br>
                                            <p class="text-dark fs-5 fw-bold mb-0" style={{textAlign: "left"}}>163.172đ  </p><br></br>
                                            <Link to="/cart" className="btn border border-secondary rounded-pill px-3 text-primary d-flex justify-content-center align-items-center">
                                                <i className="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng
                                            </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-4">
                                <div className="rounded position-relative fruite-item">
                                    <div className="fruite-img">
                                        <img src={vh2} className="img-fluid w-100 rounded-top" alt />
                                    </div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                        <h4>Trốn Lên Mái Nhà Để Khóc - Tặng Kèm Bookmark</h4><br></br>
                                                              
                                         <p class="text-dark fs-5 fw-bold mb-0" style={{textAlign: "left"}}>68.098đ</p><br></br>
                                            <Link to="/cart" className="btn border border-secondary rounded-pill px-3 text-primary d-flex justify-content-center align-items-center">
                                                <i className="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng
                                            </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-4">
                                <div className="rounded position-relative fruite-item">
                                    <div className="fruite-img">
                                        <img src={vh4} className="img-fluid w-100 rounded-top" alt />
                                    </div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                        <h4>Tủ Sách Văn Học Cổ Điển Rút Gọn - Người Cá <br></br></h4><br></br>
                                             <p class="text-dark fs-5 fw-bold mb-0" style={{textAlign: "left"}}>94.999đ</p><br></br>
                                            <Link to="/cart" className="btn border border-secondary rounded-pill px-3 text-primary d-flex justify-content-center align-items-center">
                                                <i className="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng
                                            </Link>
                                    </div>
                                </div>
                            </div>
                            
                            
                     </>
                )}
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  {/* Fruits Shop End*/}
</div>


    
    </>
  )
}

export default Product
