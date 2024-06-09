import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Nav, Tab, Container, Button } from 'react-bootstrap';
import axios from 'axios';



const Product = () => {
    const navigate = useNavigate();
    const [selectedCategoryName, setSelectedCategoryName] = useState('Văn học');
    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryNameToIdMap, setCategoryNameToIdMap] = useState({});
    const [searchKeyword, setSearchKeyword] = useState('');
    const [suggestedKeywords, setSuggestedKeywords] = useState([]);




    useEffect(() => {
        // Gọi API để lấy danh sách categories khi component được render
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:8080/category/getAllCate');
                const categoriesData = response.data;
                setCategories(categoriesData);

                // Tạo bản đồ tương ứng giữa tên category và ID
                const nameToIdMap = {};
                categoriesData.forEach(category => {
                    nameToIdMap[category.nameC] = category.id;
                });
                setCategoryNameToIdMap(nameToIdMap);
            } catch (error) {
                console.error('Error fetching categories: ', error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        // Lấy danh sách sản phẩm theo category được chọn
        const fetchBooksByCategory = async () => {
            try {
                const categoryId = categoryNameToIdMap[selectedCategoryName];
                const response = await axios.get(`http://localhost:8080/book/getProductsByCategory/${categoryId}`);
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books: ', error);
            }
        };

        // Chỉ gọi API khi categoryNameToIdMap đã được cập nhật
        if (selectedCategoryName && categoryNameToIdMap[selectedCategoryName]) {
            fetchBooksByCategory();
        }
    }, [selectedCategoryName, categoryNameToIdMap]);
    const handleCategoryChange = (categoryName) => {
        setSelectedCategoryName(categoryName);
        setSearchKeyword('');
    };
    //SEARCH
    const handleSearchChange = async (e) => {
        const keyword = e.target.value;
        setSearchKeyword(keyword);

        // Gửi yêu cầu tìm kiếm qua AJAX nếu có từ khóa
        if (keyword.trim() !== '') {
            try {
                const response = await axios.get(`http://localhost:8080/book/search?keyword=${keyword}`);
                setSuggestedKeywords(response.data); // Cập nhật danh sách từ khóa gợi ý
                setBooks(response.data);//cập nhật danh sách với kết quả từ be
            } catch (error) {
                console.error('Error searching books: ', error);
            }
        } else {
            // Nếu từ khóa tìm kiếm trống, hiển thị lại sản phẩm theo danh mục được chọn
            const categoryId = categoryNameToIdMap[selectedCategoryName];
            try {
                const response = await axios.get(`http://localhost:8080/book/getProductsByCategory/${categoryId}`);

                setBooks(response.data);//cập nhật danh sách 
                setSuggestedKeywords([]); 

            } catch (error) {
                console.error('Error fetching books: ', error);
            }
        }
    };
    // Xử lý sự kiện khi người dùng nhấp vào phần tử gợi ý
    const handleSuggestedKeywordClick = (productId) => {
        // Điều hướng đến trang chi tiết của sản phẩm với productId
        navigate(`/detail/${productId}`);
    };
    // Hàm để định dạng từ khóa gợi ý với các từ khóa in đậm
    const formatSuggestedKeywords = (keyword) => {
        const regex = new RegExp(searchKeyword, 'gi');
        return keyword.replace(regex, match => `<strong>${match}</strong>`);
    };

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
        // Khai báo và gán giá trị cho price và qty
        const price = books.find(book => book.id === bookId)?.price;
        const qty = 1; // Số lượng mặc định

        const response = await axios.post('http://localhost:8080/cart/addBookToCart', {
            bookId: bookId,
            userId: userId,
            price: price, // Giá sản phẩm (thay đổi theo sản phẩm)
            total: price * qty, // Tổng giá (thay đổi theo sản phẩm và số lượng)
            qty: qty
        });

        console.log('Sản phẩm đã được thêm vào giỏ hàng:', response.data);
        // Điều hướng đến trang giỏ hàng sau khi thêm sản phẩm thành công
        navigate('/cart');
    } catch (error) {
        console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error);
    }
};






    return (
        <>
            <div>
                <div className="container-fluid fruite py-5">
                    <div className="container py-5">
                        <h1 className="mb-4">Sản phẩm của chúng tôi</h1>
                        <div className="row g-4">
                            <div className="col-lg-12">
                                <div className="row g-4">
                                    <div className="col-xl-14">
                                        <div className="input-group w-100 mx-auto d-flex">

                                            <input
                                                type="search"
                                                className="form-control p-3"
                                                placeholder="Tìm kiếm"
                                                aria-describedby="search-icon-1"
                                                value={searchKeyword}
                                                onChange={handleSearchChange}
                                            />
                                            <span
                                                id="search-icon-1"
                                                className="input-group-text p-3"
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <i className="fa fa-search" />
                                            </span>
                                         {/* Hiển thị từ khóa gợi ý */}
                                    {suggestedKeywords.length > 0 && (
                                        <ul>
                                            {suggestedKeywords.map((keyword, index) => (
                                                <li key={index} onClick={() => handleSuggestedKeywordClick(keyword.id)}>
                                                    <span dangerouslySetInnerHTML={{ __html: formatSuggestedKeywords(keyword.title) }} />
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                        </div>
                                    </div>
                                    <div className="col-6" />
                                </div>
                                <div className="row g-4">
                                    <div className="col-lg-3">
                                        <div className="row g-4">
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <h4>Danh mục sản phẩm</h4>
                                                    <ul className="list-unstyled fruite-categorie">
                                                        {categories.map(category => (
                                                            <li key={category.id}>
                                                                <div className="d-flex justify-content-between fruite-name">
                                                                    <a href="#" onClick={() => handleCategoryChange(category.nameC)}>
                                                                        <i className="fas fa-apple-alt me-2" />
                                                                        {category.nameC}
                                                                    </a>
                                                                    <span>({category.totalProducts})</span>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <h4 className="mb-2">Price</h4>
                                                    <input
                                                        type="range"
                                                        className="form-range w-100"
                                                        id="rangeInput"
                                                        name="rangeInput"
                                                        min={0}
                                                        max={500}
                                                        defaultValue={0}
                                                        oninput="amount.value=rangeInput.value"
                                                    />
                                                    <output id="amount" name="amount" min-velue={0} max-value={500} htmlFor="rangeInput">
                                                        0
                                                    </output>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="row g-4 justify-content-center">
                                            {books.map(book => (
                                                <div className="col-md-6 col-lg-6 col-xl-4" key={book.id}>
                                                    <div className="rounded position-relative fruite-item">
                                                        <div className="fruite-img">
                                                            <img src={book.img} className="img-fluid w-100 rounded-top" alt={book.title} />
                                                        </div>
                                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <Link to={`/detail/${book.id}`}><h4>{book.title}<br></br></h4></Link><br></br><br></br>
                                                            <p className="text-dark fs-5 fw-bold mb-0" style={{ textAlign: "left" }}>{book.price}vnđ  </p><br></br>
                                                            <button className="btn btn-primary"  onClick={() => handleAddToCart(book.id)}> Thêm giỏ hàng</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
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

export default Product
