import * as React from "react";
import {Card,Form,Col} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {inputPostMessageSlice} from "../store/inputPostMessageSlice";
import {useState} from "react";

export default function MessageMenu() {
    const dispatch = useDispatch()
    const [dataString,setDataString] = useState('')
    const [timeString,setTimeString] = useState('')

    function createExpires(value: string, part: 'DATE' | 'TIME') {
        switch (part) {
            case "DATE":
                setDataString(value)
                break;
            case "TIME":
                setTimeString(value)
                break;
        }
        if(dataString && timeString){
            dispatch(inputPostMessageSlice.actions.setExpires(`${dataString}T${timeString}:00.000Z`))
        }
    }

    return(
        <Card bg="light">
            <Card.Header>Message settings</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Row >
                        <Col md="3">
                            <Form.Label>Counter:</Form.Label>
                            <Form.Control required type="number" placeholder="number" onChange={event =>
                                dispatch(inputPostMessageSlice.actions.setCounter(parseInt(event.target.value)))
                            }/>
                        </Col>
                        <Col md="3">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control required type="text" placeholder="number" onChange={event =>
                                dispatch(inputPostMessageSlice.actions.setPassword(event.target.value))
                            }/>
                        </Col>
                        <Col md="2">
                            <Form.Label>Expires data:</Form.Label>
                            <Form.Control required type="date" onChange={event => createExpires(event.target.value,'DATE')} />
                        </Col>
                        <Col md="2">
                            <Form.Label>Expires time(UTC):</Form.Label>
                            <Form.Control required type="time" onChange={event => createExpires(event.target.value,'TIME')}/>
                        </Col>

                    </Form.Row>
                </Form>
            </Card.Body>
        </Card>
    )
}