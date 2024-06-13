import axios from "axios";
import React, { useEffect , useState} from "react";
import moment from 'moment';

const Checkout = ({cartItems}) =>{
  const [authData, setAuthData] = useState(null);
  const [checkoutInfo, setCheckoutInfo] = useState({
   
    last_name: "",
    first_name: "",
    address: "",
    city: "",
    country: "",
    phone: "",
    email: "",
    note: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handlePaymentOrder = async() => {
   
    try{
      const checkout = await axios.post('http://localhost:8080/cart/checkout', {
        checkoutInfo:{
          ...checkoutInfo,
          orderCode: moment().unix(),
          user_id : authData.id,
          order_status:'chưa thanh toán'

        },
        cartItems,

      });
      console.log(checkout);
      window.open(checkout.data);


    }catch(error) {
      console.log(error);
    }

  };
  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("auth-data"));
    setAuthData(authData);//lưu
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  };

  const total = calculateTotal();
    return(
        <>
   <div className="container-fluid py-5">
  <div className="container py-5">
    <h1 className="mb-4">Chi tiết thanh toán</h1>
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="row g-5">
        <div className="col-md-12 col-lg-6 col-xl-7">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="form-item w-100">
                <label className="form-label my-3">Họ<sup>*</sup></label>
                <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        value={checkoutInfo.last_name}
                        onChange={handleInputChange}
                      />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="form-item w-100">
                <label className="form-label my-3">Tên<sup>*</sup></label>
                <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        value={checkoutInfo.first_name}
                        onChange={handleInputChange}
                      />
              </div>
            </div>
          </div>
          {/* <div className="form-item">
            <label className="form-label my-3">Company Name<sup>*</sup></label>
            <input type="text" className="form-control" />
          </div> */}
          <div className="form-item">
            <label className="form-label my-3">Địa Chỉ <sup>*</sup></label>
            <input
                    type="text"
                    className="form-control"
                    name="address"
                    
                    value={checkoutInfo.address}
                    onChange={handleInputChange}
                  />
          </div>
          <div className="form-item">
            <label className="form-label my-3">Quận/Thành Phố<sup>*</sup></label>
            <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={checkoutInfo.city}
                    onChange={handleInputChange}
                  />
          </div>
          <div className="form-item">
            <label className="form-label my-3">Quốc Gia<sup>*</sup></label>
            <input
                    type="text"
                    className="form-control"
                    name="country"
                    value={checkoutInfo.country}
                    onChange={handleInputChange}
                  />
          </div>
          {/* <div className="form-item">
            <label className="form-label my-3">Postcode/Zip<sup>*</sup></label>
            <input type="text" className="form-control" />
          </div> */}
          <div className="form-item">
            <label className="form-label my-3">Số Điện Thoại<sup>*</sup></label>
            <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={checkoutInfo.phone}
                    onChange={handleInputChange}
                  />
          </div>
          <div className="form-item">
            <label className="form-label my-3">Email<sup>*</sup></label>
            <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={checkoutInfo.email}
                    onChange={handleInputChange}
                  />
          </div>
          {/* <div className="form-check my-3">
            <input type="checkbox" className="form-check-input" id="Account-1" name="Accounts" defaultValue="Accounts" />
            <label className="form-check-label" htmlFor="Account-1">Create an account?</label>
          </div> */}
          <hr />
          {/* <div className="form-check my-3">
            <input className="form-check-input" type="checkbox" id="Address-1" name="Address" defaultValue="Address" />
            <label className="form-check-label" htmlFor="Address-1">Ship to a different address?</label>
          </div> */}
          <div className="form-item">
          <textarea
                    name="note"
                    className="form-control"
                    spellCheck="false"
                    cols={30}
                    rows={11}
                    placeholder="Ghi Chú"
                    value={checkoutInfo.note}
                    onChange={handleInputChange}
                  />
          </div>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-5">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Sản Phẩm</th>
                  <th scope="col">Tên</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Số Lượng</th>
                  <th scope="col">Tổng</th>
                </tr>
              </thead>
              <tbody>
              {cartItems.map((item) => (
                      <tr key={item.id}>
                        <th scope="row">
                          <div className="d-flex align-items-center mt-2">
                            <img
                              src={item.img}
                              className="img-fluid rounded-circle"
                              style={{ width: 90, height: 90 }}
                              alt={item.title}
                            />
                          </div>
                        </th>
                        <td className="py-5">{item.title}</td>
                        <td className="py-5">{item.price} vnđ</td>
                        <td className="py-5">{item.qty}</td>
                        <td className="py-5">{item.price * item.qty} vnđ</td>
                      </tr>
                    ))}
                    
                    <tr>
                      <th scope="row"></th>
                      <td className="py-5"></td>
                      <td className="py-5"></td>
                      <td className="py-5">
                        <p className="mb-0 text-dark py-3" style={{width: 90, height: 90}}>TOTAL</p>
                      </td>
                      <td className="py-5">
                        <div className="py-3 border-bottom border-top">
                          <p className="mb-0 text-dark">{total} vnđ</p>
                        </div>
                      </td>
                    </tr>
                    {/* <tr>            
                  <th scope="row">
                  </th>
                  <td className="py-5">
                    <p className="mb-0 text-dark py-4">Shipping</p>
                  </td>
                  <td colSpan={3} className="py-5">
                    <div className="form-check text-start">
                      <input type="checkbox" className="form-check-input bg-primary border-0" id="Shipping-1" name="Shipping-1" defaultValue="Shipping" />
                      <label className="form-check-label" htmlFor="Shipping-1">Free Shipping</label>
                    </div>
                    <div className="form-check text-start">
                      <input type="checkbox" className="form-check-input bg-primary border-0" id="Shipping-2" name="Shipping-1" defaultValue="Shipping" />
                      <label className="form-check-label" htmlFor="Shipping-2">Flat rate: $15.00</label>
                    </div>
                    <div className="form-check text-start">
                      <input type="checkbox" className="form-check-input bg-primary border-0" id="Shipping-3" name="Shipping-1" defaultValue="Shipping" />
                      <label className="form-check-label" htmlFor="Shipping-3">Local Pickup: $8.00</label>
                    </div>
                  </td>
                </tr>
                <tr>
                      <th scope="row"></th>
                      <td className="py-5">
                        <p className="mb-0 text-dark text-uppercase py-3">TOTAL</p>
                      </td>
                      <td className="py-5"></td>
                      <td className="py-5"></td>
                      <td className="py-5">
                        <div className="py-3 border-bottom border-top">
                          <p className="mb-0 text-dark">{total} vnđ</p>
                        </div>
                      </td>
                    </tr> */}
              </tbody>
            </table>
          </div>
          {/* <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
            <div className="col-12">
              <div className="form-check text-start my-3">
                <input type="checkbox" className="form-check-input bg-primary border-0" id="Transfer-1" name="Transfer" defaultValue="Transfer" />
                <label className="form-check-label" htmlFor="Transfer-1">Chuyển khoản trực tiếp</label>
              </div>
              <p className="text-start text-dark">Thực hiện thanh toán trực tiếp vào tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng ID đơn hàng của bạn làm tài liệu tham khảo thanh toán. Đơn đặt hàng của bạn sẽ không được vận chuyển cho đến khi tiền đã được xóa trong tài khoản của chúng tôi.</p>
            </div>
          </div> */}
          {/* <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
            <div className="col-12">
              <div className="form-check text-start my-3">
                <input type="checkbox" className="form-check-input bg-primary border-0" id="Payments-1" name="Payments" defaultValue="Payments" />
                <label className="form-check-label" htmlFor="Payments-1">Kiểm tra thanh toán</label>
              </div>
            </div>
          </div> */}
          {/* <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
            <div className="col-12">
              <div className="form-check text-start my-3">
                <input type="checkbox" className="form-check-input bg-primary border-0" id="Delivery-1" name="Delivery" defaultValue="Delivery" />
                <label className="form-check-label" htmlFor="Delivery-1">Thanh toán khi giao hàng</label>
              </div>
            </div>
          </div> */}
          {/* <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
            <div className="col-12">
              <div className="form-check text-start my-3">
                <input type="checkbox" className="form-check-input bg-primary border-0" id="Paypal-1" name="Paypal" defaultValue="Paypal" />
                <label className="form-check-label" htmlFor="Paypal-1">Paypal</label>
              </div>
            </div>
          </div> */}
          <div className="row g-4 text-center align-items-center justify-content-center pt-4">
          <button
                    type="button"
                    className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary"
                    onClick={handlePaymentOrder}
                  >
                    Đặt hàng
                  </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>


        </>

    );

};
export default Checkout;