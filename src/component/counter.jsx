import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button, Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";



class Counter extends Component {

    render() {
        const {order,dispatch} = this.props
        return (
            <Fragment>
                <Col sm="2" >
                    <Card className="shadow">
                        <CardHeader tag="strong">Counter Product
                        </CardHeader>
                        <CardBody>
                            <h5 className="text-center">{order}</h5>
                        </CardBody>
                        <CardFooter>
                            <Button type="button" color="primary" className="float-left" onClick={() => dispatch({ type: 'INCREMENT'})}>+</Button>
                            <Button type="button" color="primary" className="float-right" onClick={() => dispatch({ type: 'DECREMENT'})}>-</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return { ...state }
}

export default connect(mapStateToProps)(Counter);