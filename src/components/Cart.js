
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IncreaseQty, DeleteCart, DescreaseQty } from '../actions/actCart'

function Cart({ items, IncreaseQty, DescreaseQty, DeleteCart }) {
    let listCart = [];
    let totalCost = 0;
    Object.keys(items.Carts).forEach(item => {
        totalCost += items.Carts[item].qty * items.Carts[item].gia
        listCart.push(items.Carts[item])
    })

    const totalPrice = (gia, tong) => {
        return Number(gia * tong).toFixed(3)
    }
    return (
        <div>
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <Link to="/"><img src="../images/logo.png" alt="" width="125px" /></Link>
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

            {listCart.length == 0
                ? <div className="small-container cart-page">Giỏ hàng trống</div>
                : <div className="small-container cart-page">
                    <table>
                        <thead>
                            <tr>
                                <th>Sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Tổng</th>
                            </tr>
                        </thead>
                        <tbody>

                            {listCart.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td>
                                            <div className="cart-info">
                                                <img src={item.urlHinh} alt="ffd" />
                                                <div>
                                                    <p>{item.tensach}</p>
                                                    <small>Price: {item.gia.toFixed(3)} vnd</small>
                                                    <br />

                                                    <p onClick={() => DeleteCart(key)} style={{ color: '#ff523b', cursor: 'pointer', fontSize: '12px' }}>Remove</p>

                                                </div>
                                            </div>
                                        </td>
                                        <td style={{ display: "flex" }}><div className="btn-primary" onClick={() => DescreaseQty(key)}>-</div>

                                            <div className="input-gia">{item.qty}</div>
                                            <div className="btn-primary" onClick={() => IncreaseQty(key)}>+</div>
                                        </td>
                                        <td>{totalPrice(item.gia, item.qty)}</td>
                                    </tr>
                                )
                            })}




                        </tbody>
                    </table>
                    <div className="total-price">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Tổng</td>

                                    <td>{totalCost.toFixed(3)}</td>


                                </tr>
                                <tr>
                                    <td colSpan="2"><a href="" className="btn">Thanh toán &#8594;</a></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>}




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
const mapState = (state) => {
    return {
        items: state.cart
    }
}
export default connect(mapState, { IncreaseQty, DescreaseQty, DeleteCart })(Cart)