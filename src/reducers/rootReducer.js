import { combineReducers } from "redux"
import cartReducer from "./cartReducer"
import loaisachReducer from "./loaisachReducer"
import { sachReducer, SachDuocChonReducer } from "./sachReducer"

export default combineReducers({
    sach: sachReducer,
    loaisach: loaisachReducer,
    sachtheoid: SachDuocChonReducer,
    cart: cartReducer
})