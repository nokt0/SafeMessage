import * as React from "react";
import {Card,Form,Col} from 'react-bootstrap'

export default function MessageMenu() {
    return(
        <Card bg="light">
            <Card.Header>Message settings</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Row >
                        <Col md="3">
                            <Form.Label>Counter:</Form.Label>
                            <Form.Control type="number" placeholder="number"/>
                        </Col>
                        <Col md="3">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="text" placeholder="number"/>
                        </Col>
                        <Col md="2">
                            <Form.Label>Expires data:</Form.Label>
                            <Form.Control type="date"/>
                        </Col>
                        <Col md="2">
                            <Form.Label>Expires time:</Form.Label>
                            <Form.Control type="time"/>
                        </Col>

                    </Form.Row>
                </Form>
            </Card.Body>
        </Card>
    )
}
