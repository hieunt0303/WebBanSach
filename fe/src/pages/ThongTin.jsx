import React, { useState, useEffect } from "react";
import axios from "axios";
import ThongtinStyle from '../css/thongtin.module.css'
import { Link, useNavigate } from "react-router-dom";
import { Tab, Row, Col, Nav, Form, Button } from 'react-bootstrap';

const ThongTin = () => {
    const navigate = useNavigate();

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
//

const [userInfo, setUserInfo] = useState({});
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

    // Xử lý khi người dùng nhấn nút "Lưu"
    const handlePasswordChange = async (e) => {
        e.preventDefault();

        // Lấy thông tin người dùng từ localStorage
        const storedUserData = JSON.parse(localStorage.getItem('auth-data'));

        // Kiểm tra xem storedUserData có giá trị không
        if (!storedUserData) {
            setMessage('Không thể xác định người dùng hiện tại');
            return;
        }
        // Kiểm tra mật khẩu mới có đủ điều kiện không
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if (!passwordRegex.test(newPassword)) {
            setMessage('Mật khẩu mới phải chứa ít nhất 8 kí tự, bao gồm ít nhất 1 chữ Hoa, 1 chữ số và 1 ký tự đặc biệt');
            return;
        }
        const hashPass = await hashPassword(oldPassword);
        

        // Kiểm tra xem mật khẩu cũ nhập vào có khớp với mật khẩu hiện tại của người dùng không
        if (hashPass !== storedUserData.password) {
            setMessage('Mật khẩu cũ không chính xác');
            return;
        }
        

        //ktra mật khẩu mới có khớp với nhau
        if (newPassword !== confirmPassword) {
            setMessage('Mật khẩu xác nhận không khớp với mật khẩu mới');
            return;
        }
        // Nếu mật khẩu cũ đúng, tiếp tục quá trình đổi mật khẩu
        try {
            const response = await axios.put(`http://localhost:8080/change-password/${storedUserData.id}`, {
                oldPassword,
                newPassword,
                confirmPassword,
            });

            // Hiển thị thông báo thành công hoặc lỗi từ response
            setMessage(response.data.message || 'Đổi mật khẩu thành công');
        } catch (error) {
            // Xử lý lỗi
            setMessage(error.response?.data?.error || 'Đã xảy ra lỗi khi đổi mật khẩu');
        }

        // Xóa dữ liệu trong các trường nhập liệu sau khi xử lý
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

    useEffect(() => {
        // Lấy thông tin người dùng từ localStorage khi component được render
        const storedUserData = JSON.parse(localStorage.getItem('auth-data'));
        if (storedUserData) {
            setUserInfo({
                name: storedUserData.name,
                email: storedUserData.email,
                numberphone: storedUserData.numberphone,
            });            
            
        }
    }, []);

    return (
        <>
            <div className={ThongtinStyle.body}>
                <div className="main-content-wrap section-ptb my-account-page" style={{ padding: '30px 0' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="account-dashboard">
                                    <div className="dashboard-upper-info">
                                        <div className="row align-items-center no-gutters">
                                            <div className="col-lg-3 col-md-12">
                                                <div className="d-single-info" style={{ height: 60, padding: '20px 0 20px' }}>
                                                    <p className="user-name">Xin chào<span> tên đăng nhập</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-9" style={{ marginTop: "50px" }}>
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
                                                                <Nav.Link eventKey="fourth">Đổi mật khẩu</Nav.Link>
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
                                                                    <div className="d111 col-md-8 " style={{ borderLeft: 'rgb(255, 255, 255) 10px solid' }}>
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
                                                                            <p>{userInfo.name}</p>
                                                                        </div>
                                                                       
                                                                        <div className="col-6">
                                                                            <p className="p441"><b>Email</b></p>
                                                                            <p>{userInfo.email}</p>
                                                                        </div>
                                                                        <div className="col-6">
                                                                            <p className="p441"><b>Số điện thoại</b></p>
                                                                            <p>{userInfo.numberphone}</p>
                                                                        </div>
                                                                        


                                                                    </div>

                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="fourth">
                                                                <h3>Đổi mật khẩu</h3>
                                                                <form onSubmit={handlePasswordChange}>
                                                                    <label>Mật khẩu cũ:</label>
                                                                    <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                                                                    <label>Mật khẩu mới:</label>
                                                                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                                                    <label>Nhập lại mật khẩu mới:</label>
                                                                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                                                    <button type="submit">Lưu</button>
                                                                </form>
                                                                {message && <p>{message}</p>}
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
