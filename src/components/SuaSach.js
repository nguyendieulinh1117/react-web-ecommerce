import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { actLaySachTheoID, sachAdded, sachUpdated } from '../actions/actSach'

function SuaSach({ match }) {
    let history = useHistory()
    const dispatch = useDispatch()
    const loaisach = useSelector((state) => state.loaisach)

    let id = match.params.id
    console.log(id)
    useEffect(() => {
        fetchById()
    }, [id])
    let sach = useSelector((state) => state.sachtheoid)
    let loaiTheoSach = loaisach.filter(loai => loai.id == sach.idLoai)
    console.log(loaiTheoSach);
    const fetchById = async () => {
        const response = await axios.get(`http://localhost:3500/sach/${id}`).catch(err => {
            console.log(err);
        })
        let s = response.data;


        console.log(s);
        dispatch(actLaySachTheoID(s))

    }
    useEffect(() => {
        if (sach) {
            setSate({ ...sach })
        }
    }, [sach])
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

    const {
        tensach,
        gia,
        tacGia,
        urlHinh,
        idLoai,
        xem,
        hot,
        moi,
        mota
    } = state

    const [err, setErr] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.tensach === '' || state.gia === '' || state.tacGia === '' || state.idLoai === '') {
            setErr('Không được bỏ trống')
        } else {
            axios
                .put(`http://localhost:3500/sach/${id}`, state)
                .then(response => {
                    console.log(response)
                    dispatch(sachUpdated())
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
                <h3 style={{ fontSize: "20px" }}>Sửa sản phẩm</h3>
                <div className="btn-cart">
                    <button onClick={() => history.goBack()}>Quay lại</button>
                </div>
            </div>
            <form className="formSach" onSubmit={handleSubmit}>
                <label>Tên sản phẩm</label>
                <input type="text" value={tensach || ""} onChange={(e) => setSate({ ...state, tensach: e.target.value })} />
                {err && <span style={{ color: "red" }}>{err}</span>}

                <br />
                <label>Giá</label>
                <input type="number" value={gia || ""} onChange={(e) => setSate({ ...state, gia: Number(e.target.value) })} />
                {err && <span style={{ color: "red" }}>{err}</span>}

                <br />
                <label>Tác giả</label>
                <input type="text" value={tacGia || ""} onChange={(e) => setSate({ ...state, tacGia: e.target.value })} />
                {err && <span style={{ color: "red" }}>{err}</span>}

                <br />
                <label>Url hình</label>
                <input type="text" value={urlHinh || ""} onChange={(e) => setSate({ ...state, urlHinh: e.target.value })} />
                <label>Hot</label>
                <label className="switch">
                    {sach.hot === 1 ? (
                        <input type="checkbox" checked name="hot" onChange={(e) => e.target.checked === true ? setSate({ ...state, hot: 1 }) : setSate({ ...state })} />
                    ) : (
                        <input type="checkbox" name="hot" onChange={(e) => e.target.checked === true ? setSate({ ...state, hot: 1 }) : setSate({ ...state })} />
                    )}
                    <span className="sliderr"></span>
                </label>
                <label>Mới</label>
                <label className="switch">
                    {sach.moi ? (
                        <input type="checkbox" checked onChange={(e) => e.target.checked === true ? setSate({ ...state, moi: 1 }) : setSate({ ...state })} />
                    ) : (
                        <input type="checkbox" onChange={(e) => e.target.checked === true ? setSate({ ...state, moi: 1 }) : setSate({ ...state })} />
                    )}
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
                <textarea rows={10} value={mota || ""} onChange={(e) => setSate({ ...state, mota: e.target.value })}></textarea>
                <div className="btn-cart">
                    <button >Cập nhật</button>
                </div>
            </form>
        </div>
    )
}

export default SuaSach
