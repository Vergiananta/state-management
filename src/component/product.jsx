import {Component, Fragment} from "react";
import Counter from "./counter-product/counter_product";



export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: 4
        }
    }
    

    handleCounterChange = (newValue) => {
        this.setState({
            order:newValue
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <p>{this.state.order}</p>
                </div>
                <Counter onCounterChange={(value) => this.handleCounterChange(value)}/>
            </Fragment>
        )
    }
}