import { GET_DATA_SACH, GET_SACH, GET_SACH_THEO_ID, SUA_SACH, THEM_SACH, XOA_SACH } from '../contexts/index'

export const sachReducer = (state = [], action) => {
    switch (action.type) {
        case GET_DATA_SACH:
            action.listsach.forEach(s => {
                state = [...state, s]
            });

            console.log("Da du vao store", state);
            return state;
        case THEM_SACH:
            return [...state, action.sach]
        case SUA_SACH:
        case XOA_SACH:
            return [...state]
        default:
            return state
    }
}
export const SachDuocChonReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SACH_THEO_ID:

            return { ...state, ...action.sach };
        default:
            return state
    }
}
const initialState = {
    listSach: [],
    sach: {},
    loading: false
}
export const qlySachReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SACH:
            return {
                ...state,
                listSach: action.payload,
                loading: false
            }
        case THEM_SACH:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}