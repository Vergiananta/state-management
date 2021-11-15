import { Component } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            order: 4
        }
    }

    handleCounterChange = (value) => {
        this.props.onCounterChange(value);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }

    render() {
        return (
            <Col sm="2" >
                <Card className="shadow">
                    <CardHeader tag="strong">
                        <p>Counter</p>
                    </CardHeader>
                    <CardBody>
                        <h5 className="text-center">{this.state.order}</h5>
                    </CardBody>
                    <CardFooter>
                        <Button type="button" color="primary" className="float-left" onClick={this.handlePlus}>+</Button>
                        <Button type="button" color="primary" className="float-right" onClick={this.handleMinus}>-</Button>
                    </CardFooter>
                </Card>
            </Col>
        )
    }
}