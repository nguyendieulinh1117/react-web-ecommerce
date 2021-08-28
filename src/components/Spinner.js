import { Component } from "react";

class Spinner extends Component {
    static defaultProps = {
        message: 'Default message'
    }
    render() {
        return (
            <div className="spinner">
                <div className="loader"></div>

                <p>{this.props.message}</p>

            </div>
        )
    }
}

export default Spinner