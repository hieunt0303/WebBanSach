import React, { useState, useEffect } from 'react';
import { Link, useNavigate,useParams  } from "react-router-dom";
import axios from 'axios';
import "../css/productad.css"
const EditUser = () => {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

      const changeStyle = () => {
          if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
          {
              setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
          }
          else{
              setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
          }
      };
      const changeStyle1 = () => {
          if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
          {
              setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
          }
          else{
              setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
          }
      };
  
    const { userId } = useParams();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        numberphone: '',
        role: 'User'
    });
    const [errors, setErrors] = useState({
      name: '',
      email: '',
      numberphone: ''
  });
  useEffect(() => {
    const fetchUserData = async () => {
        try {
            const response = await axios.get(`https://webbansach-production.up.railway.app/register/${userId}`);
            const user = response.data;

            const roleValue = user.role === '0' ? 'Admin' : 'User';

            setUserData({
                name: user.name,
                email: user.email,
                numberphone: user.numberphone,
                role: roleValue
            });
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu người dùng:', error);
        }
    };

    fetchUserData();
}, [userId]);

const handleSubmit = async (event) => {
    event.preventDefault();

    // Kiểm tra và cập nhật lỗi
    let formValid = true;
    const newErrors = {
        name: '',
        email: '',
        numberphone: ''
    };

    if (!userData.name.trim()) {
        newErrors.name = 'Vui lòng nhập tên';
        formValid = false;
    }

    if (!userData.email.trim()) {
        newErrors.email = 'Vui lòng nhập email';
        formValid = false;
    }

    if (!userData.numberphone.trim()) {
        newErrors.numberphone = 'Vui lòng nhập số điện thoại';
        formValid = false;
    }

    setErrors(newErrors);

    if (formValid) {
        try {
            const roleValue = userData.role === 'Admin' ? '0' : '1';
            const updatedUserData = { ...userData, role: roleValue };

            await axios.put(`https://webbansach-production.up.railway.app/updateuser/${userId}`, updatedUserData);
            alert('Cập nhật người dùng thành công!');
            navigate('/userManagement');

        } catch (error) {
            console.error('Lỗi khi cập nhật người dùng:', error);
        }
    }
};

const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData(prevUserData => ({
        ...prevUserData,
        [name]: value
    }));
};

  
    return (
        <>  
    
<body id="page-top"></body>
    <div id="wrapper">
    <ul className={style} id="accordionSidebar">
                {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                             <div className="sidebar-brand-icon rotate-n-15">
                                 <i className="fas fa-laugh-wink"></i>
                             </div>
                            <div className="sidebar-brand-text mx-3">Admin <sup>2</sup></div>
                            <div className="text-center d-none d-md-inline">
                             <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                         </div>
                </a>
                <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <a className="nav-link" href="">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Danh sách quản lý</span></a>
            </li> 
         
            <li className="nav-item">
                         <Link to="/orderManagement" className="nav-item nav-link ">
                             <a className="nav-link collapsed" href="" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <i className="fas fa-fw fa-cog"></i>
                                <span>Quản lý đơn hàng</span>
                            </a>
                        </Link>
                        </li>

                        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                        <li className="nav-item">
                        <Link to="/userManagement" className="nav-item nav-link ">

                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <i className="fas fa-fw fa-wrench"></i>
                                <span>Quản lý người dùng</span>
                            </a>
                        </Link>
                        </li>

                      

                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                        <Link to="/productManagement" className="nav-item nav-link ">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-cog"></i>
                                <span>Quản lý sản phẩm</span>
                            </a>
                        </Link>
                           
                        </li>
                        <Link to="/homeAd" className="nav-item nav-link ">

                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <i className="fas fa-fw fa-wrench"></i>
                                <span>Thống kê</span>
                            </a>
                        </Link>

                        <li className="nav-item">
                            <a className="nav-link" href="charts.html">
                                <span>Đăng xuất</span></a>
                        </li>
            </ul>
  {/* End of Sidebar */}
  {/* Content Wrapper */}
  <div id="content-wrapper" className="d-flex flex-column">
    {/* Main Content */}
    <div id="content">
      {/* Topbar */}
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* Sidebar Toggle (Topbar) */}
        <form className="form-inline">
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars" />
          </button>
        </form>
        {/* Topbar Search */}
        
        {/* Topbar Navbar */}
        <ul className="navbar-nav ml-auto">
          {/* Nav Item - Search Dropdown (Visible Only XS) */}
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-search fa-fw" />
            </a>
            {/* Dropdown - Messages */}
            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          {/* Nav Item - Alerts */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-bell fa-fw" />
              {/* Counter - Alerts */}
              <span className="badge badge-danger badge-counter">3+</span>
            </a>
            {/* Dropdown - Alerts */}
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
              <h6 className="dropdown-header">
                Alerts Center
              </h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-primary">
                    <i className="fas fa-file-alt text-white" />
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 12, 2019</div>
                  <span className="font-weight-bold">A new monthly report is ready to download!</span>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-success">
                    <i className="fas fa-donate text-white" />
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-warning">
                    <i className="fas fa-exclamation-triangle text-white" />
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your account.
                </div>
              </a>
              <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
            </div>
          </li>
          {/* Nav Item - Messages */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-envelope fa-fw" />
              {/* Counter - Messages */}
              <span className="badge badge-danger badge-counter">7</span>
            </a>
            {/* Dropdown - Messages */}
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
              <h6 className="dropdown-header">
                Message Center
              </h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="img/undraw_profile_1.svg" alt="..." />
                  <div className="status-indicator bg-success" />
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">Hi there! I am wondering if you can help me with a
                    problem I've been having.</div>
                  <div className="small text-gray-500">Emily Fowler · 58m</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="img/undraw_profile_2.svg" alt="..." />
                  <div className="status-indicator" />
                </div>
                <div>
                  <div className="text-truncate">I have the photos that you ordered last month, how
                    would you like them sent to you?</div>
                  <div className="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="img/undraw_profile_3.svg" alt="..." />
                  <div className="status-indicator bg-warning" />
                </div>
                <div>
                  <div className="text-truncate">Last month's report looks great, I am very happy with
                    the progress so far, keep up the good work!</div>
                  <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="..." />
                  <div className="status-indicator bg-success" />
                </div>
                <div>
                  <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                    told me that people say this to all dogs, even if they aren't good...</div>
                  <div className="small text-gray-500">Chicken the Dog · 2w</div>
                </div>
              </a>
              <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
            </div>
          </li>
          <div className="topbar-divider d-none d-sm-block" />
          {/* Nav Item - User Information */}
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
              <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
            </a>
           
          </li>
        </ul>
      </nav>
      {/* End of Topbar */}
      {/* Begin Page Content */}
      <div className="container-fluid">
       
        <div className="dssp">
        <div className="card-header py-3">
                               
                        <div className="heading">
                        <h3 className="m-0 font-weight-bold text-primary">
                        Sửa quyền người dùng
                        </h3>
                        </div>
                       <div className='adminuser'>
                    
                       <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label>Tên:</label>
                                                <input type="text" name="name" className="form-control" value={userData.name} onChange={handleChange} />
                                                {errors.name && <small className="text-danger">{errors.name}</small>}
                                            </div>
                                            <div className="form-group">
                                                <label>Email:</label>
                                                <input type="email" name="email" className="form-control" value={userData.email} onChange={handleChange} />
                                                {errors.email && <small className="text-danger">{errors.email}</small>}
                                            </div>
                                            <div className="form-group">
                                                <label>Số điện thoại:</label>
                                                <input type="text" name="numberphone" className="form-control" value={userData.numberphone} onChange={handleChange} />
                                                {errors.numberphone && <small className="text-danger">{errors.numberphone}</small>}
                                            </div>
                                            <div className="form-group">
                                                <label>Role:</label>
                                                <select name="role" className="form-control" value={userData.role} onChange={handleChange}>
                                                    <option value="Admin">Admin</option>
                                                    <option value="User">User</option>
                                                </select>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Lưu</button>
                                        </form>
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

export default EditUser
