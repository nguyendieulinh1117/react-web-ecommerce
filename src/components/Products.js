
import { Link } from "react-router-dom";
import Show1Product from "./Show1Product";
import { useSelector } from "react-redux";


function Products() {
    const products = useSelector((state) => state.sach)
    const loaisach = useSelector((state) => state.loaisach)


    let catalogs = loaisach.map((catalog, index) => {
        if (catalog.anhien === 1) {
            return (
                <li key={index}>
                    <Link to={`/catalog/${catalog.id}`}>{catalog.tenloai}</Link>
                </li>
            )
        }

    })
    let listBook = products.map((book, index) => {
        return (
            <Show1Product key={index}
                id={book.id}
                author={book.tacGia}
                name={book.tensach}
                price={book.gia}
                product={book}
                url={book.urlHinh} />
        )
    })
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
                    <Link to="/products"><h2 id="title">
                        Tất cả sản phẩm
                    </h2></Link>
                    <ul id="list-catalog">
                        {catalogs}
                    </ul>
                </div>
                <div className="row-1" id="allProduct">
                    {listBook}
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
export default Products