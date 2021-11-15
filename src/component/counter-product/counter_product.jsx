import { Component } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";
import CounterButton from "./counter_button";

export default class Counter extends Component {

    render() {
        return (
            <Col sm="2" >
                <Card className="shadow">
                    <CardHeader tag="strong">
                        <p>Counter</p>
                    </CardHeader>
                    {/* ditambahkan properti oncounterChange lagi agar data dapat diakses */}
                    <CounterButton onCounterChange={(value) => this.props.onCounterChange(value)}/>
                </Card>
            </Col>
        )
    }
}