import { ADD_CART, DECREASE_QUANTITY, DELETE_CART, GET_NUMBER_CART, INCREASE_QUANTITY } from "../contexts";

const initSach = {
    numberCart: 0,
    Carts: [],
    _sach: []
}

const cartReducer = (state = initSach, action) => {
    switch (action.type) {
        case GET_NUMBER_CART:
            return { ...state }
        case ADD_CART:
            if (state.numberCart == 0) {
                let cart = {
                    id: action.sach.id,
                    qty: 1,
                    tensach: action.sach.tensach,
                    tacGia: action.sach.tacGia,
                    gia: action.sach.gia,
                    urlHinh: action.sach.urlHinh
                }
                state.Carts.push(cart)
            } else {
                let check = false;
                state.Carts.map((s, key) => {
                    if (s.id == action.sach.id) {
                        state.Carts[key].qty++;
                        check = true
                    }
                })
                if (!check) {
                    let _cart = {
                        id: action.sach.id,
                        qty: 1,
                        tensach: action.sach.tensach,
                        tacGia: action.sach.tacGia,
                        gia: action.sach.gia,
                        urlHinh: action.sach.urlHinh
                    }
                    state.Carts.push(_cart)
                }
            }

            console.log({ ...state, numberCart: state.numberCart + 1 });
            return { ...state, numberCart: state.numberCart + 1 }
        case INCREASE_QUANTITY:
            state.numberCart++;
            state.Carts[action.sach].qty++;
            return { ...state }
        case DECREASE_QUANTITY:
            let _qty = state.Carts[action.sach].qty
            if (_qty > 1) {
                state.numberCart--
                state.Carts[action.sach].qty--
            }
            return { ...state }
        case DELETE_CART:
            let qty = state.Carts[action.sach].qty
            return {
                ...state,
                numberCart: state.numberCart - qty,
                Carts: state.Carts.filter(item => {
                    return item.id != state.Carts[action.sach].id
                })
            }
        default:
            return state
    }
}
export default cartReducer