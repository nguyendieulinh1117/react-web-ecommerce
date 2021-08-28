import { Component } from "react";
import { Link } from "react-router-dom";

class Account extends Component {
    login = () => {
        document.querySelector(`#loginForm`).style.transform = `translateX(300px)`;
        document.querySelector(`#regForm`).style.transform = `translateX(300px)`;
        document.querySelector(`#indicator`).style.transform = `translateX(0px)`;
    }

    register = () => {
        document.querySelector(`#loginForm`).style.transform = `translateX(0px)`;
        document.querySelector(`#regForm`).style.transform = `translateX(0px)`;
        document.querySelector(`#indicator`).style.transform = `translateX(100px)`;
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <a href="index.html"><img src="./images/logo.png" alt="" width="125px" /></a>
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

                <div className="account-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <img src="./images/image1.png" alt="" width="100%" />
                            </div>
                            <div className="col-2">
                                <div className="form-container">
                                    <div className="form-btn">
                                        <span onClick={this.login}>Đăng nhập</span>
                                        <span onClick={this.register}>Đăng kí</span>
                                        <hr id="indicator" />
                                    </div>
                                    <form action="" id="loginForm">
                                        <input type="text" placeholder="Tài khoản" />
                                        <input type="password" placeholder="Mật khẩu" />
                                        <button type="submit" className="btn">Đăng nhập</button>
                                        <a href="">Quên mật khẩu?</a>
                                    </form>
                                    <form action="" id="regForm">
                                        <input type="text" placeholder="Tài khoản" />
                                        <input type="email" placeholder="Email" />
                                        <input type="password" placeholder="Mật khẩu" />
                                        <button type="submit" className="btn">Đăng kí</button>
                                    </form>
                                </div>
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
}

export default Account