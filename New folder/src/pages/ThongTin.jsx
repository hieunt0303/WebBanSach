import React from "react";
import ThongtinStyle from '../css/thongtin.module.css'
import { Link, useNavigate } from "react-router-dom";
import { Tab, Row, Col, Nav } from 'react-bootstrap';

const ThongTin = () => {
  const navigate = useNavigate();

  return (
    <>
<div className={ThongtinStyle.body}>
 <div className="main-content-wrap section-ptb my-account-page" style={{padding: '30px 0'}}>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="account-dashboard">
          <div className="dashboard-upper-info">
            <div className="row align-items-center no-gutters">
              <div className="col-lg-3 col-md-12">
                <div className="d-single-info" style={{height: 60, padding: '20px 0 20px'}}>
                  <p className="user-name">Xin chào<span> tên đăng nhập</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-9" style={{marginTop: "50px"}}>
              {/* Nav tabs */}
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Quản lý tài khoản</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Thông tin cá  nhân</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Thông tin đặt hàng</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="fourth">Đăng xuất</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <h3>Quản lý tài khoản </h3>
                            <div className="row">
                                <div className="d111 col-md-4">
                                    <h6>Thông tin cá nhân <span className="sp111"></span></h6>
                                      <div className="sp111">
                                                <span>uname</span><br></br>
                                                <span>fullName</span><br></br>
                                                <span>email</span>
                                      </div>
                                </div>
                                <div className="d111 col-md-8 " style={{borderLeft: 'rgb(255, 255, 255) 10px solid'}}>
                                    <h6>Thông tin đặt hàng <span className="sp111" /></h6>
                                    <div className="sp111">
                                                <span>uname</span><br></br>
                                                <span>phone</span><br></br>
                                                <span>address</span>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="table-responsive d222">
                                <h5>Đơn hàng</h5>
                                <table className="table">
                                    <thead>
                                      <tr>
                                          <th>ID</th>
                                          <th>Tên người nhận</th>
                                          <th>Ngày đặt hàng</th>
                                          <th>Trạng thái</th>
                                          <th>Tổng tiền</th>
                                          <th>Chi tiết</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                          <td>Đã được duyệt</td>
                                      </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Tab.Pane>
                      <Tab.Pane eventKey="second">
                                        <h3>Thông tin cá nhân</h3>
                                        <div id="save_111">
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="p441"><b>Tên đăng nhập</b></p>
                                                    <p>uname</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="p441"><b>Họ và tên</b></p>
                                                    <p>fullName</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="p441"><b>Email</b></p>
                                                    <p>email</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="p441"><b>Số điện thoại</b></p>
                                                    <p>phone</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="p441"><b>Địa chỉ</b></p>
                                                    <p>address</p>
                                                </div>
                                               
                                                
                                            </div>
                                           
                                        </div>
                        
                      </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
              </Tab.Container>
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

export default ThongTin
