import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { actLayDuLieuSach, sachDeleted } from '../actions/actSach';
import PhanTrang from './PhanTrang';

function QuanLy() {

    let match = useRouteMatch()
    const products = useSelector((state) => state.sach)
    const history = useHistory();
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(5);
    // get current loai
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)

    //thay doi trang
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    const fetchData = async () => {
        let data = await axios.get('http://localhost:3500/sach').catch(err => {
            console.log(err);
        })
        dispatch(actLayDuLieuSach(data.data))
    }
    const handleDelete = (id) => {
        if (window.confirm("Bạn có muốn xóa không?")) {
            axios
                .delete(`http://localhost:3500/sach/${id}`)
                .then(response => {
                    console.log(response);
                    dispatch(sachDeleted());
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "60px 0 30px" }}>
                <h3 style={{ fontSize: "20px" }}>Quản lý sản phẩm</h3>
                <div className="btn-cart">
                    <button >Thêm sản phẩm</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Xem</th>
                        <th>Hot</th>
                        <th>Mới</th>
                        <th>Mô tả</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currentPosts.map((sach, key) => (
                        <tr key={key}>
                            <td>
                                <div className="cart-info">
                                    <img src={sach.urlHinh} alt="ffd" />
                                    <div>
                                        <p>{sach.tensach}</p>
                                        <small>Giá: {sach.gia.toFixed(3)} vnd</small>
                                    </div>
                                </div>
                            </td>
                            <td>{sach.xem}</td>
                            <td>{sach.hot === 1 ? "Đang hot" : ""}</td>
                            <td>{sach.moi === 1 ? "Mới" : ""}</td>
                            <td style={{ width: "500px" }}>{sach.mota.replace(sach.mota.slice(150, sach.mota.length), "...")}</td>
                            <td>
                                <div className="btn-cart">
                                    <button >Sửa</button>
                                    <button>Xóa</button>
                                </div>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <PhanTrang postPerPage={postPerPage} totalPosts={products.length} paginate={paginate} />
        </div>
    )
}

export default QuanLy


