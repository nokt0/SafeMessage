import * as React from "react"
import {Card, Form, Col} from 'react-bootstrap'
import {MessageDataState} from "../store/types";
import {RootState} from "../store/store";
import {useSelector} from 'react-redux'

export function MessageInfo() {
    const messageData: MessageDataState = useSelector((state: RootState) => state.messageData)

    function translateTime() {
        const date = new Date(messageData.expires);
        return date.toString()
    }

    return (
        <Card>
            <Card.Header>
                Message Info
            </Card.Header>
            <Card.Body>
                <Form.Row>
                    <Col md="3">
                        <Form.Label>Counter:</Form.Label>
                        <Form.Control value={messageData.counter} disabled/>
                    </Col>
                    <Col md="9">
                        <Form.Label>Expires Data:</Form.Label>
                        <Form.Control value={translateTime()} disabled/>
                    </Col>
                </Form.Row>
            </Card.Body>
        </Card>
    )
}
