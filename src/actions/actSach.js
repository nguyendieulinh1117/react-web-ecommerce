
import { GET_DATA_SACH, GET_SACH, GET_SACH_THEO_ID, SUA_SACH, THEM_SACH, XOA_SACH } from '../contexts/index';
export const actLayDuLieuSach = (listsach) => {
    return {
        type: GET_DATA_SACH,
        listsach: listsach
    }
}
export const sachUpdated = () => ({
    type: SUA_SACH
})
export const sachDeleted = () => ({
    type: XOA_SACH
})
export const actLaySachTheoID = (sach) => {
    return {
        type: GET_SACH_THEO_ID,
        sach: sach
    }
}
const getSach = (sach) => ({
    type: GET_SACH,
    payload: sach
})
export const sachAdded = (sach) => ({
    type: THEM_SACH,
    sach: sach
})
// export const loadSach = () => {
//     return function (dispatch) {
//         axios
//             .get(`http://localhost:3500/sach`)
//             .then(res => {
//                 console.log(res);
//                 dispatch(getSach(res.data))
//             })
//     }
// }
// export const addSach = (sach) => {
//     return function (dispatch) {
//         axios
//             .post(`http://localhost:3500/sach`, sach)
//             .then(response => {
//                 console.log(response);
//                 dispatch(sachAdded())
//                 dispatch(loadSach())
//             })
//             .catch(err => console.log(err))
//     }
// }