import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const Cart = ({ cartItems, updateCartItems }) => {
  const navigate = useNavigate();

  //const [cartItems, setCartItems] = useState([]);
  const [authData, setAuthData] = useState(null); // Khởi tạo state authData
  const [totalPrice, setTotalPrice] = useState(0); // Khởi tạo state tổng tiền
  const [errors, setErrors] = useState({});


//lay giỏ hàng của 1usserId
useEffect(() => {
  const fetchCartItems = async () => {
    try {
      const authData = JSON.parse(localStorage.getItem('auth-data'));
      setAuthData(authData); // Lưu authData vào state khi được lấy từ localStorage
      
      const userId = authData?.id;
      if (!userId) {
        console.log('Người dùng chưa đăng nhập.');
        return;
      }

      const response = await axios.get(`https://webbansach-production.up.railway.app/cart/getCartsByUserId`, {
        params: { userId: userId }
      });
      updateCartItems(response.data);

     // setCartItems(response.data);
    } catch (error) {
      console.error('Lỗi khi lấy danh sách sản phẩm từ giỏ hàng:', error);
    }
  };

  fetchCartItems();
}, []);

// Tính tổng tiền
useEffect(() => {
  let totalPrice = 0;
  cartItems.forEach(item => {
    totalPrice += item.total;
  });
  setTotalPrice(totalPrice);
}, [cartItems]);

//tăng giảm số luọng 

const handleQuantityChange = async (cartItemId, newQuantity) => {
  try {
    if (newQuantity < 1) {
      setErrors({ ...errors, [cartItemId]: 'lớn hơn hoặc = 1' });
      return;
    } else {
      // Nếu không có lỗi, xóa thông báo lỗi và tiếp tục xử lý
      if (errors[cartItemId]) {
        const newErrors = { ...errors };
        delete newErrors[cartItemId];
        setErrors(newErrors);
      }
    }

    const response = await axios.put(`https://webbansach-production.up.railway.app/cart/updateQtyForCart`, {
      cartId: cartItemId,
      qty: newQuantity
    });

    const updatedCartItemsResponse = await axios.get(`https://webbansach-production.up.railway.app/cart/getCartsByUserId`, {
      params: { userId: authData?.id }
    });

    updateCartItems(updatedCartItemsResponse.data);
  } catch (error) {
    console.error('Lỗi khi cập nhật số lượng sản phẩm:', error);
  }
};

/// xóa san phẩm trong cart
const handleRemoveItem = async (cartItemId) => {
  try {
    const response = await axios.delete(`https://webbansach-production.up.railway.app/cart/removeBookFromCart`, {
      data: { userId: authData?.id, cartId: cartItemId } // Gửi userId và cartId để xóa sản phẩm
    });

    // setCartItems(cartItems.filter(item => item.id !== cartItemId)); // Xóa sản phẩm khỏi danh sách hiện tại
    updateCartItems(cartItems.filter(item => item.id !== cartItemId)); // Xóa sản phẩm khỏi danh sách hiện tại

  } catch (error) {
    console.error('Lỗi khi xóa sản phẩm từ giỏ hàng:', error);
  }
};


  return (
    <>  
  <div className="container-fluid py-5">
  <div className="container py-5">
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sản phẩm</th>
            <th scope="col">Tên</th>
            <th scope="col">Giá</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Tổng tiền</th>
            <th scope="col">Xóa</th>
          </tr>
        </thead>
       
        <tbody>
        {cartItems.map(item => (
                  <tr key={item.id}>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img src={item.img} className="img-fluid me-5 rounded-circle" style={{ width: 80, height: 80 }} alt={item.title} />
                      </div>
                    </th>
                    <td>
                      <p className="mb-0 mt-4">{item.title}</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">{item.price}vnđ</p>
                    </td>
                    {/* <td>
                      <div className="input-group quantity mt-4" style={{ width: 100 }}>
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                            <i className="fa fa-minus" />
                          </button>
                        </div>
                        <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={item.qty} />
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td> */}
                     <td>
                            <div className="input-group quantity mt-4" style={{ width: 100 }}>
                                <div className="input-group-btn">
                                    <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={() => handleQuantityChange(item.id, item.qty - 1)}>
                                        <i className="fa fa-minus" />
                                    </button>
                                </div>
                                <input type="text" className="form-control form-control-sm text-center border-0" value={item.qty} readOnly />
                                <div className="input-group-btn">
                                    <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={() => handleQuantityChange(item.id, item.qty + 1)}>
                                        <i className="fa fa-plus" />
                                    </button>
                                </div>
                            </div>
                            {errors[item.id] && <p className="text-danger">{errors[item.id]}</p>}        

                        </td>
                    <td>
                      <p className="mb-0 mt-4">{item.total}vnđ</p>
                    </td>
                    <td>
                      <button className="btn btn-md rounded-circle bg-light border mt-4" onClick={() => handleRemoveItem(item.id)}>
                        <i className="fa fa-times text-danger" />
                      </button>
                    </td>
                  </tr>
                ))}
                            </tbody>
      </table>
    </div>
   
    <div className="row g-4 justify-content-end">
      <div className="col-8" />
      <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
        <div className="bg-light rounded">
          <div className="p-4">
            <h1 className="display-6 mb-4"> <span className="fw-normal">Tổng tiền</span></h1><br></br>
            {cartItems.map(item => (
                    <div key={item.id} className="d-flex justify-content-between mb-2">
                      <h5 className="mb-0 me-4">{item.title}</h5>
                      <p className="mb-0">{item.price * item.qty}vnđ</p>
                    </div>
                  ))}
        <br></br>
            <div className="d-flex justify-content-between">
              {/* <h5 className="mb-0 me-4">Phí ship</h5> */}
              {/* <div className>
                <p className="mb-0">15000vnđ</p>
              </div> */}
            </div>
           
          </div>
          <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
            <h5 className="mb-0 ps-4 me-4">Tổng</h5>
            <p className="mb-0 pe-4">{totalPrice}vnđ</p>
          </div>
          <button className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button" ><Link to="/checkout" >Thanh Toán</Link></button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Cart

