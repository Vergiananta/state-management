import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Col } from "reactstrap";


class Product extends Component {
    render() {
        const { order, dispatch } = this.props
        return (
            <>
                <Col sm="1">
                    <p>cart</p>
                </Col><Col sm="1">
                    <div>{order}</div>
                </Col>
            </>
        )
    }
}

function mapStateToProps(state) {
    return { ...state }
}

export default connect(mapStateToProps)(Product);