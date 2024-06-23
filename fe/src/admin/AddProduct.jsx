import React, { useState, useEffect } from 'react';
import { Link, useNavigate,useParams  } from "react-router-dom";
import axios from 'axios';
import "../css/productad.css"
const AddP = () => {
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
      
       const navigate = useNavigate();
      
      // Khai báo state để lưu trữ dữ liệu và thông báo lỗi từ backend
      const [formData, setFormData] = useState({
        name: '',
        author: '',
        description: '',
        image: '',
        price: '',
        quantity: '',
        category: '1'
      });
      //const [errors, setErrors] = useState({});
      const [errors, setErrors] = useState({
        name: '',
        author: '',
        description: '',
        image: '',
        price: '',
        quantity: '',
        category: ''
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const bookData = {
            title: formData.name,
            author: formData.author,
            description: formData.description,
            img: formData.image,
            price: Number(formData.price),
            quantity: Number(formData.quantity),
            category: { id: Number(formData.category) }
          };
      
          await axios.post('https://webbansach-production.up.railway.app/book/addBook', [bookData]);
          alert('Sách đã được thêm thành công!');
          navigate('/productManagement');
          setErrors({
            name: '',
            author: '',
            description: '',
            image: '',
            price: '',
            quantity: '',
            category: ''
          });
        } catch (error) {
          if (error.response && error.response.status === 400) {
            const errorData = error.response.data;
      
            // Xử lý lỗi khi errorData không phải là một mảng
            const serverErrors = {};
            for (const field in errorData) {
              if (errorData.hasOwnProperty(field)) {
                serverErrors[field] = errorData[field];
              }
            }
            setErrors(serverErrors);
          } else {
            console.error('Có lỗi xảy ra khi thêm sách!', error);
            if (error.response && error.response.data) {
              console.error(error.response.data.message);
            } else {
              alert('Thêm sách thất bại!');
            }
          }
        }
      };
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
        //         Xóa thông báo lỗi khi giá trị đầu vào thay đổi
        setErrors(prevState => ({
          ...prevState,
          [name]: ''// Xóa thông báo lỗi cho trường tương ứng
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
                        Thêm sản phẩm 
                        </h3>
                        </div>
                       <div className=''>
                    
                       <form onSubmit={handleSubmit}>
  <div>
    <label>Tên sách:</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
    />
    {errors && errors['addBooks.books[0].title'] && <span className="error">{errors['addBooks.books[0].title']}</span>}
  </div>
  <div>
    <label>Tác giả:</label>
    <input
      type="text"
      name="author"
      value={formData.author}
      onChange={handleChange}
    />
    {errors && errors['addBooks.books[0].author'] && <span className="error">{errors['addBooks.books[0].author']}</span>}
  </div>
  <div>
    <label>Mô tả:</label>
    <textarea
      name="description"
      value={formData.description}
      onChange={handleChange}
    />
    {errors && errors['addBooks.books[0].description'] && <span className="error">{errors['addBooks.books[0].description']}</span>}
  </div>
  <div>
    <label>Ảnh:</label>
    <input
      type="text"
      name="image"
      value={formData.image}
      onChange={handleChange}
    />
    {errors && errors['addBooks.books[0].img'] && <span className="error">{errors['addBooks.books[0].img']}</span>}
  </div>
  <div>
    <label>Giá:</label>
    <input
      type="number"
      name="price"
      value={formData.price}
      onChange={handleChange}
    />
    {errors && errors['addBooks.books[0].price'] && <span className="error">{errors['addBooks.books[0].price']}</span>}
  </div>
  <div>
    <label>Số lượng:</label>
    <input
      type="number"
      name="quantity"
      value={formData.quantity}
      onChange={handleChange}
    />
    {errors && errors['addBooks.books[0].quantity'] && <span className="error">{errors['addBooks.books[0].quantity']}</span>}
  </div>
  <div>
    <label>Thể loại:</label>
    <select
      name="category"
      value={formData.category}
      onChange={handleChange}
    >
      <option value="1">Văn học</option>
      <option value="2">Thiếu nhi</option>
      <option value="3">Kinh tế</option>
      <option value="4">Kỹ năng sống</option>
    </select>
    {errors && errors['addBooks.books[0].category'] && <span className="error">{errors['addBooks.books[0].category']}</span>}
  </div>
  <button type="submit">Lưu</button>
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

export default AddP
