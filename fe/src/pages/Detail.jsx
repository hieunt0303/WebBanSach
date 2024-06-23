import React, { useState, useEffect } from 'react';
import { Link, useNavigate,useParams  } from "react-router-dom";
import axios from 'axios';
const Detail = ({ match,authData, updateCartItems }) => {
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchBookDetail = async () => {
        try {
          const response = await axios.get(`https://webbansach-production.up.railway.app/book/getBookById/${id}`);
          setBook(response.data);
          setError(null);
        } catch (error) {
          setError("Không thể tải chi tiết sách. Vui lòng thử lại sau.");
          setBook(null);
        }
      };
  
      fetchBookDetail();
    }, [id]);
    
    ////CART
    const handleAddToCart = async (bookId) => {
      try {
        const authData = JSON.parse(localStorage.getItem('auth-data'));
        const userId = authData?.id;
    
        if (!userId) {
          // Nếu không có userId (người dùng chưa đăng nhập), điều hướng đến trang đăng nhập
          navigate('/login');
          return;
        }
    
        const price = book.price;
    
        const response = await axios.post('https://webbansach-production.up.railway.app/cart/addBookToCart', {
          bookId: bookId,
          userId: userId,
          price: price, // Giá sản phẩm (thay đổi theo sản phẩm)
          total: price * quantity, // Tổng giá (thay đổi theo sản phẩm và số lượng)
          qty: quantity // Sử dụng quantity từ state
        });
    
        console.log('Sản phẩm đã được thêm vào giỏ hàng:', response.data);
        // Điều hướng đến trang giỏ hàng sau khi thêm sản phẩm thành công
        navigate('/cart');
      } catch (error) {
        console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error);
      }
    };
    
    //tang gaim sl 
    const handleIncreaseQuantity = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      } else {
        alert("Số lượng phải lớn hơn hoặc bằng 1.");
      }
    };
  
    return (
    <>  
  <div className="container-fluid py-5 mt-5">
      <div className="container py-5">
        {error && <p>Error: {error}</p>}
        {book && (
          <div className="row g-4 mb-5">
            <div className="col-lg-8 col-xl-9">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="border rounded">
                    <img src={book.img} className="img-fluid rounded" alt="Book" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h4 className="fw-bold mb-3">{book.title}</h4>
                  <p className="mb-3">Thể loại: {book.category.nameC}</p>
                  <p className="mb-3">Tác giả: {book.author}</p>
                  <h5 className="fw-bold mb-3">{book.price}vnđ</h5>
                  <div className="input-group quantity mb-5" style={{ width: 100 }}>
                    <div className="input-group-btn">
                    <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={handleDecreaseQuantity} >

                        <i className="fa fa-minus" />
                      </button>
                    </div>
                    <input type="text" className="form-control form-control-sm text-center border-0" value={quantity} readOnly />
                    <div className="input-group-btn">
                    <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={handleIncreaseQuantity}>
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                  <button className="btn btn-primary"  onClick={() => handleAddToCart(book.id)}> Thêm giỏ hàng</button>

              
                </div>
                <div className="col-lg-12">
                  <nav>
                    <div className="nav nav-tabs mb-3">
                      <button className="nav-link active border-white border-bottom-0" type="button" role="tab" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about" aria-controls="nav-about" aria-selected="true">Description</button>
                    </div>
                  </nav>
                  <div className="tab-content mb-5">
                    <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                      <p style={{ textAlign: "left" }}>{book.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

    </>
  )
}

export default Detail
