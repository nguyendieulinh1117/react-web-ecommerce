import { GET_LOAI_SACH } from '../contexts/index'

const loaisachReducer = (state = [], action) => {
    switch (action.type) {
        case GET_LOAI_SACH:
            action.loaisach.forEach(s => {
                state = [...state, s]
            });
            console.log("Da du vao store", state);
            return state;

        default:
            return state
    }
}
export default loaisachReducer