import React from 'react'
import { Link, useNavigate } from "react-router-dom";
const Detail = () => {

  return (
    <>  
  

 <div className="container-fluid py-5 mt-5">
  <div className="container py-5">
    <div className="row g-4 mb-5">
      <div className="col-lg-8 col-xl-9">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="border rounded">
              <a href="#">
                <img src="img/single-item.jpg" className="img-fluid rounded" alt="Image" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <h4 className="fw-bold mb-3">Tên sách </h4>
            <p className="mb-3">Danh mục: Văn học</p>
            <p className="mb-3">Tác giả:    </p>
            <h5 className="fw-bold mb-3">85.000đ</h5>
            {/* <div className="d-flex mb-4">
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star" />
            </div> */}
           
            <div className="input-group quantity mb-5" style={{width: 100}}>
              <div className="input-group-btn">
                <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                  <i className="fa fa-minus" />
                </button>
              </div>
              <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
              <div className="input-group-btn">
                <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                  <i className="fa fa-plus" />
                </button>
              </div>
            </div>
            <Link to="/cart" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">
                                                <i className="fa fa-shopping-bag me-2 text-primary"></i> Thêm giỏ hàng
                                            </Link>
          </div>
          <div className="col-lg-12">
            <nav>
              <div className="nav nav-tabs mb-3">
                <button className="nav-link active border-white border-bottom-0" type="button" role="tab" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about" aria-controls="nav-about" aria-selected="true">Mô tả</button>
              </div>
            </nav>
            <div className="tab-content mb-5">
              <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                <p style={{textAlign: "left"}}>  Nội dung mô tả</p>
                
              </div>           
            </div>
          </div>
          
        </div>
      </div>
     
    </div>
    
  </div>
</div>

    </>
  )
}

export default Detail
