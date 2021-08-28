
import { Link } from 'react-router-dom';
import Show1Product from './Show1Product';
import { useSelector } from 'react-redux';
import Weather from './Weather';
function Home() {
    const products = useSelector((state) => state.sach)
    let featuredBook = products.map((book, index) => {
        if (book.hot === 1) {
            return (
                <Show1Product key={index}
                    id={book.id}
                    product={book}
                    author={book.tacGia}
                    name={book.tensach}
                    price={book.gia}
                    url={book.urlHinh} />
            )
        }

    })
    let latestBook = products.map((book, index) => {
        if (book.moi === 1) {
            return (
                <Show1Product key={index}
                    id={book.id}
                    product={book}
                    author={book.tacGia}
                    name={book.tensach}
                    price={book.gia}
                    url={book.urlHinh} />
            )
        }

    })
    return (
        <div>
            <div className="header">
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
                    <div className="row">
                        <div className="col-2">
                            <h1>Bão Sale Tháng 8</h1>
                            <p>Nhiều sách đặc biệt</p>
                            <Link to="/products" className="btn">Khám phá ngay &#8594;</Link>
                        </div>
                        <div className="col-2">
                            <img src="./images/image1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* featured products */}

            <div className="categories small-container">
                <h2 className="title">Sản phẩm hot</h2>
                <div className="row-1">
                    {featuredBook}
                </div>
                <h2 className="title">Sản phẩm mới</h2>
                <div className="row-1">
                    {latestBook}
                </div>
            </div>

            {/* offer */}
            <div className="offer">
                <div className="small-container">
                    <div className="row">
                        <div className="col-2">
                            <img src="./images/exclusive.png" alt="" className="offer-img" />
                        </div>
                        <div className="col-2">
                            <p>Khám phá sách hay</p>
                            <h1>Nguyễn Nhật Ánh</h1>
                            <small>Những chàng trai xấu tính
                            </small>
                            <div><Link to="/products/203" className="btn">Mua ngay &#8594;</Link></div>
                        </div>
                    </div>
                </div>
            </div>


            {/* testimonial */}

            {/* brands */}
            <div className="brands">
                <div className="small-container">
                    <div className="row">
                        <div className="col-5">
                            <img src="./images/logo-godrej.png" alt="" />
                        </div>
                        <div className="col-5">
                            <img src="./images/logo-coca-cola.png" alt="" />
                        </div>
                        <div className="col-5">
                            <img src="./images/logo-oppo.png" alt="" />
                        </div>
                        <div className="col-5">
                            <img src="./images/logo-paypal.png" alt="" />
                        </div>
                        <div className="col-5">
                            <img src="./images/logo-philips.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
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
                            <Weather />
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

export default Home