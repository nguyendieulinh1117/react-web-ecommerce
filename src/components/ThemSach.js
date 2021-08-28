import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { sachAdded } from '../actions/actSach'

function ThemSach() {
    let history = useHistory()
    const dispatch = useDispatch()
    const loaisach = useSelector((state) => state.loaisach)
    const [state, setSate] = useState({
        tensach: '',
        gia: '',
        tacGia: '',
        urlHinh: '',
        idLoai: '',
        xem: 0,
        hot: 0,
        moi: 0,
        mota: ''
    })

    const [err, setErr] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.tensach === '' || state.gia === '' || state.tacGia === '' || state.idLoai === '') {
            setErr('Không được bỏ trống')
        } else {
            axios
                .post(`http://localhost:3500/sach`, state)
                .then(response => {
                    console.log(response)
                    dispatch(sachAdded(state))
                })
                .catch(err => console.log(err))
            history.goBack()
            setErr('')
        }
        console.log(state)
    }
    return (
        <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "60px 0 30px" }}>
                <h3 style={{ fontSize: "20px" }}>Thêm sản phẩm</h3>
                <div className="btn-cart">
                    <button onClick={() => history.goBack()}>Quay lại</button>
                </div>
            </div>
            <form className="formSach" onSubmit={handleSubmit}>
                <label>Tên sản phẩm</label>
                <input type="text" onChange={(e) => setSate({ ...state, tensach: e.target.value })} />
                {err && <span style={{ color: "red" }}>{err}</span>}

                <br />
                <label>Giá</label>
                <input type="number" onChange={(e) => setSate({ ...state, gia: Number(e.target.value) })} />
                {err && <span style={{ color: "red" }}>{err}</span>}

                <br />
                <label>Tác giả</label>
                <input type="text" onChange={(e) => setSate({ ...state, tacGia: e.target.value })} />
                {err && <span style={{ color: "red" }}>{err}</span>}

                <br />
                <label>Url hình</label>
                <input type="text" onChange={(e) => setSate({ ...state, urlHinh: e.target.value })} />
                <label>Hot</label>
                <label className="switch">
                    <input type="checkbox" name="hot" onChange={(e) => e.target.checked === true ? setSate({ ...state, hot: 1 }) : setSate({ ...state })} />
                    <span className="sliderr"></span>
                </label>
                <label>Mới</label>
                <label className="switch">
                    <input type="checkbox" onChange={(e) => e.target.checked === true ? setSate({ ...state, moi: 1 }) : setSate({ ...state })} />
                    <span className="sliderr"></span>
                </label>
                <br />
                <label>Loại</label>
                <select name="idLoai" onChange={(e) => setSate({ ...state, idLoai: Number(e.target.value) })} >
                    {loaisach.map((loai, index) => {

                        return <option key={index} value={loai.id}>{loai.tenloai}</option>

                    })}
                </select>
                {err && <span style={{ color: "red" }}>{err}</span>}

                <br />
                <label>Mô tả</label>
                <textarea rows={10} onChange={(e) => setSate({ ...state, mota: e.target.value })}></textarea>
                <div className="btn-cart">
                    <button >Tạo mới</button>
                </div>
            </form>
        </div>
    )
}

export default ThemSach
