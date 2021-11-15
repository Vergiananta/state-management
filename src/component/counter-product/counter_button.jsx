import { Component } from "react";
import { Button, CardBody, CardFooter } from "reactstrap";


export default class CounterButton extends Component {

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
            <>
                <CardBody>
                    <h5 className="text-center">{this.state.order}</h5>
                </CardBody>
                <CardFooter>
                    <Button type="button" color="primary" className="float-left" onClick={this.handlePlus}>+</Button>
                    <Button type="button" color="primary" className="float-right" onClick={this.handleMinus}>-</Button>
                </CardFooter>
            </>
        )
    }
}