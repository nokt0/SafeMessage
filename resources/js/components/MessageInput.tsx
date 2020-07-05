import * as React from "react";
import {Form,Card, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {inputPostMessageSlice} from "../store/inputPostMessageSlice";

export default function MessageInput() {
    const dispatch = useDispatch()

    return(
        <div>
            <Card className="mt-2">
                <Card.Body>
                    <Form>
                        <Form.Control as="textarea" rows={10} placeholder="Input Message"
                                      onChange={event => dispatch(inputPostMessageSlice.actions.setMessage(event.target.value))}/>
                        <Button className="mt-2">Send</Button>
                    </Form>
                </Card.Body>
            </Card>

        </div>
    )
}
