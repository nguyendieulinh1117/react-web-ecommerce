// import { Component } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AddCart } from "../actions/actCart";
import { actLaySachTheoID } from "../actions/actSach";

import Show1Product from './Show1Product'
const description = () => {
    document.querySelector(`#desc`).style.transform = `translateX(0px)`;
    document.querySelector(`#review`).style.transform = `translateX(0px)`;
    document.querySelector(`#tabpane_indicator`).style.transform = `translateX(0px)`;
}
const review = () => {
    document.querySelector(`#desc`).style.transform = `translateX(-1030px)`;
    document.querySelector(`#review`).style.transform = `translateX(-1030px)`;
    document.querySelector(`#tabpane_indicator`).style.transform = `translateX(125px)`;
}
function Detail({ match }) {
    const sachId = match.params.id
    console.log(sachId);

    let product = useSelector((state) => state.sach)
    const dispatch = useDispatch();

    useEffect(() => {
        fetchById()
    }, [sachId])
    let sach = useSelector((state) => state.sachtheoid)

    const fetchById = async () => {
        const response = await axios.get(`http://localhost:3500/sach/${sachId}`).catch(err => {
            console.log(err);
        })
        let s = response.data;
        s = { ...s, gia: s.gia.toFixed(3) }
        console.log(s);
        dispatch(actLaySachTheoID(s))

    }
    // let item = arrSach.find((item) => item.id == match.params.id)
    // console.log(item);
    let relatedBook = product.filter(book => book.idLoai == sach.idLoai)
    console.log(relatedBook);
    return (
        <div>
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <Link to="/"><img src="../images/logo.png" alt="" width="125px" /></Link>
                    </div>
                    <nav>
                        <ul id="menuItem">
                            <li><Link to="/">Trang ch???</Link></li>
                            <li><Link to="/products">S???n ph???m</Link></li>
                            <li><Link to="/account">T??i kho???n</Link></li>
                            <li><Link to="/baocao">B??o c??o</Link></li>
                            <li><Link to="/admin">Admin</Link></li>
                        </ul>
                    </nav>
                    <Link to="/cart"><img src="../images/cart.png" width="30px" height="30px" alt="" /></Link>
                    <img src="../images/menu.png" alt="" className="menu-icon" />
                </div>
            </div>

            {/* single product detail */}

            <div className="small-container single-product" id="detailProduct">
                <div className="row">
                    <div className="col-2">
                        <img src={`.${sach.urlHinh}`} alt="" width="100%" id="productImg" />
                    </div>
                    <div className="col-2">
                        <h1>{sach.tensach}</h1>
                        <h4>{sach.tacGia}</h4>
                        <h4>{sach.gia} vnd</h4>

                        <button className="btn" onClick={() => dispatch(AddCart(sach))}>Th??m v??o gi??? h??ng</button>

                        <h3>Chi ti???t s???n ph???m</h3>
                        <br />
                        <p>{sach.mota}
                        </p>
                    </div>
                </div>
                <div className="detail">
                    <div className="tabpane">
                        <span onClick={description}>M?? t???</span>
                        <span onClick={review}>????nh gi??</span>
                        <hr id="tabpane_indicator" />
                    </div>
                    <div className="content">
                        <div className="desc" id="desc">
                            <p>{sach.mota}</p>
                        </div>
                        <div className="review" id="review">
                            <form action="" className="form_review" id="reviewForm">
                                <textarea rows="3" type="text" className="f_review"></textarea>
                                <button className="btn_review">B??nh lu???n</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="small-container">
                <div className="row row-2">
                    <h2>C??c s???n ph???m li??n quan</h2>
                    <p id="viewmore"><a href="/">Xem th??m</a></p>
                </div>
            </div>

            <div className="small-container">
                <div className="row" id="related">
                    {relatedBook.map((book, index) => {
                        return (
                            <Show1Product key={index}
                                id={book.id}
                                product={book}
                                author={book.tacGia}
                                name={book.tensach}
                                price={book.gia}
                                url={`.${book.urlHinh}`} />
                        )
                    })}
                </div>
            </div>

            {/* footer */}
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col-1">
                            <h3>T???i ???ng d???ng</h3>
                            <p>T???i ???ng d???ng cho Android v?? IOS.</p>
                            <div className="app-logo">
                                <img src="../images/app-store.png" alt="" />
                                <img src="../images/play-store.png" alt="" />

                            </div>
                        </div>
                        <div className="footer-col-2">
                            <img src="../images/logo-white.png" alt="" />

                        </div>
                        <div className="footer-col-3">
                            <h3>???????ng d???n</h3>
                            <ul>
                                <li>Coupons</li>
                                <li>B??i vi???t</li>
                            </ul>
                        </div>
                        <div className="footer-col-4">
                            <h3>Theo d??i ch??ng t??i</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <p className="copyright">Copyright 2021 - Nguy???n Th??? Di???u Linh</p>
                </div>
            </div>
        </div>
    )
}

export default Detail