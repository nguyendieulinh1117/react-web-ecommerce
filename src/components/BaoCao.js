import React from 'react'
import { Link } from 'react-router-dom'

function BaoCao() {
    return (
        <div>
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <Link to="/"><img src="./images/logo.png" alt="" width="125px" /></Link>
                    </div>
                    <nav>
                        <ul id="menuItem">
                            <li><Link to="/">Trang chủ</Link></li>
                            <li><Link to="/products">Sản phẩm</Link></li>
                            <li><Link to="/account">Tài khoản</Link></li>
                            <li><Link to="/baocao">Báo cáo</Link></li>
                            <li><Link to="/admin">Admin</Link></li>
                        </ul>
                    </nav>
                    <Link to="/cart"><img src="./images/cart.png" width="30px" height="30px" alt="" /></Link>
                    <img src="./images/menu.png" alt="" className="menu-icon" />
                </div>
            </div>


            <div className="small-container">
                <div className="row-1">
                    <h2 id="title">
                        Báo cáo Website
                    </h2>

                </div>
                <div className="row" >
                    <div className="col-2">
                        <img src="./images/Screenshot (1).png" alt="" />
                    </div>
                    <div className="col-2">
                        <div style={{ marginLeft: "30px" }}>
                            <p style={{ paddingBottom: "5px" }}>Lấy dữ liệu từ json bằng axios</p>
                            <p style={{ paddingBottom: "5px" }}>Lưu dữ liệu vào store thông qua hàm useDispatch() của redux</p>
                            <p style={{ paddingBottom: "5px" }}>Hoặc có cách khác để lưu dữ liệu vào store: sử dụng connect() của redux</p>
                        </div>

                    </div>
                    <div className="col-2">
                        <div style={{ marginLeft: "30px" }}>
                            <p style={{ paddingBottom: "5px" }}>Lấy dữ liệu từ store bằng hàm useSelector()</p>
                        </div>

                    </div>
                    <div className="col-2">
                        <img src="./images/Screenshot (2).png" alt="" />

                    </div>
                    <div className="col-2">

                        <img src="./images/Screenshot (3).png" alt="" />
                    </div>
                    <div className="col-2">
                        <div style={{ marginLeft: "30px" }}>
                            <p style={{ paddingBottom: "5px" }}>Hiện sản phẩm thông qua property props đã định nghĩa trong component</p>
                            <p style={{ paddingBottom: "5px" }}>Giá trị của các property là dữ liệu đã lấy bên store</p>
                        </div>

                    </div>
                    <div className="col-2">
                        <div style={{ marginLeft: "30px" }}>
                            <p style={{ paddingBottom: "5px" }}>Các action xử lý giỏ hàng: Thêm, cập nhật, xóa</p>
                        </div>

                    </div>
                    <div className="col-2">
                        <img src="./images/Screenshot (5).png" alt="" />

                    </div>
                    <div className="col-2">

                        <img src="./images/Screenshot (6).png" alt="" />
                    </div>
                    <div className="col-2">
                        <div style={{ marginLeft: "30px" }}>
                            <p style={{ paddingBottom: "5px" }}>Xử lý các action giỏ hàng và lưu kết quả vào store</p>
                        </div>

                    </div>
                    <div className="col-2">
                        <div style={{ marginLeft: "30px" }}>
                            <p style={{ paddingBottom: "5px" }}>Đăng nhập bằng xác thực Firebase</p>
                        </div>

                    </div>
                    <div className="col-2">
                        <img src="./images/Screenshot (7).png" alt="" />

                    </div>
                    <div className="col-2">

                        <img src="./images/Screenshot (8).png" alt="" />
                    </div>
                    <div className="col-2">
                        <div style={{ marginLeft: "30px" }}>
                            <p style={{ paddingBottom: "5px" }}>Thêm chatbox của Facebook vào website</p>
                            <p style={{ paddingBottom: "5px" }}>sử dụng module react-messenger-customer-chat</p>
                        </div>

                    </div>
                </div>
            </div>


            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col-1">
                            <h3>Tải ứng dụng</h3>
                            <p>Tải ứng dụng cho Android và IOS.</p>
                            <div className="app-logo">
                                <img src="./images/app-store.png" alt="" />
                                <img src="./images/play-store.png" alt="" />

                            </div>
                        </div>
                        <div className="footer-col-2">
                            <img src="./images/logo-white.png" alt="" />

                        </div>
                        <div className="footer-col-3">
                            <h3>Đường dẫn</h3>
                            <ul>
                                <li>Coupons</li>
                                <li>Bài viết</li>
                            </ul>
                        </div>
                        <div className="footer-col-4">
                            <h3>Theo dõi chúng tôi</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <p className="copyright">Copyright 2021 - Nguyễn Thị Diệu Linh</p>
                </div>
            </div>
        </div>
    )
}

export default BaoCao
