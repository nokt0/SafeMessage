import * as React from "react"
import {Card, Form, Col} from 'react-bootstrap'

export function MessageInfo() {
    return (
        <Card>
            <Card.Header>
                Message Info
            </Card.Header>
            <Card.Body>
                <Form.Row>
                    <Col md="3">
                        <Form.Label>Counter:</Form.Label>
                        <Form.Control value="5" disabled/>
                    </Col>
                    <Col md="3">
                        <Form.Label>Expires Data:</Form.Label>
                        <Form.Control value="16:04 20-12-2012" disabled/>
                    </Col>
                </Form.Row>
            </Card.Body>
        </Card>
    )
}
