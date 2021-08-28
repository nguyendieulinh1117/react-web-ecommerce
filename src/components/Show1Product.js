import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AddCart } from "../actions/actCart";

class Show1Product extends Component {
    constructor() {
        super();
        this.state = { wishlist: false }
    }
    addWishlist = () => {
        this.setState(prevStatus => ({ wishlist: !prevStatus.wishlist }))
    }
    addToCart = (product) => {
        this.props.AddCart(product)
        Swal.fire({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            text: "Đã thêm vào giỏ hàng",
            icon: "success"
        })
    }
    render() {
        return (
            <div className="col-4">
                <div className="img-wrap">
                    <Link to={`/products/${this.props.id}`}><img src={this.props.url} alt="" /></Link>
                </div>
                <Link to={`/products/${this.props.id}`}><h4 className="product-name">{this.props.name}</h4></Link>
                <div className="rating">
                    <p>{this.props.author}</p>
                </div>
                <div className="cart">
                    <p>{this.props.price.toFixed(3)} vnd</p>
                    <p className="wishlist-icon" onClick={this.addWishlist}><i className={this.state.wishlist === true ? "fa fa-heart" : "fa fa-heart-o"}></i></p>

                </div>
                <div className="cart-button">
                    <div className="btn-cart">

                        <button onClick={() => this.addToCart(this.props.product)}>Mua hàng</button>


                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatch = (dispatch) => {
    return {
        AddCart: item => dispatch(AddCart(item))
    }
}

export default connect(null, mapDispatch)(Show1Product)