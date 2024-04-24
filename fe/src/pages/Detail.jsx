import React, { useState, useEffect } from 'react';
import { Link, useNavigate,useParams  } from "react-router-dom";
import axios from 'axios';
const Detail = ({ match }) => {
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();
    useEffect(() => {
      const fetchBookDetail = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/book/getBookById/${id}`);
          setBook(response.data);
          setError(null);
        } catch (error) {
          setError("Không thể tải chi tiết sách. Vui lòng thử lại sau.");
          setBook(null);
        }
      };
  
      fetchBookDetail();
    }, [id]);
  
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
                  <p className="mb-3">Category: {book.category.nameC}</p>
                  <p className="mb-3">Author: {book.author}</p>
                  <h5 className="fw-bold mb-3">{book.price}.000đ</h5>
                  <div className="input-group quantity mb-5" style={{ width: 100 }}>
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
                    <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to Cart
                  </Link>
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
