import { ADD_CART, DECREASE_QUANTITY, DELETE_CART, GET_NUMBER_CART, INCREASE_QUANTITY, UPDATE_CART } from "../contexts"

export const GetNumberCart = () => {
    return {
        type: GET_NUMBER_CART
    }
}

export const AddCart = (sach) => {
    return {
        type: ADD_CART,
        sach
    }
}

export const UpdateCart = (sach) => {
    return {
        type: UPDATE_CART,
        sach
    }
}

export const DeleteCart = (sach) => {
    return {
        type: DELETE_CART,
        sach
    }
}

export const IncreaseQty = (sach) => {
    return {
        type: INCREASE_QUANTITY,
        sach
    }
}

export const DescreaseQty = (sach) => {
    return {
        type: DECREASE_QUANTITY,
        sach
    }
}