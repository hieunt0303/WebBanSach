import axios from "axios";
import React, { useEffect, useState } from "react";

const PopUpBookOrder = ({ bookOrder, setShowDialog }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("https://webbansach-production.up.railway.app/book/getAllBook");
      console.log(response.data);
      setBooks(response.data);
    };
    fetchData();
  }, []);

  return (
    <div
      onClick={() => setShowDialog(false)}
      style={{
        zIndex:2000,
        backgroundColor: 'rgba(0,0,0,.32)',
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{backgroundColor:'white'}}>
        <p>Thông tin chi tiết đơn hàng</p>
        <div>
          <table>
            <thead>
              <tr>
                <th>Tên sách</th>
                <th>Số lượng</th>
                <th>Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              {bookOrder.map((book, index) => (
                <tr>
                  <td>{books.find((ele) => ele?.id === book.book_id)?.title || "Khong tim thay"}</td>
                  <td>{book.quantity}</td>
                  <td>{book.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PopUpBookOrder;
