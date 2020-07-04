import * as React from "react";
import {Form,Card, Button} from 'react-bootstrap'

export default function MessageInput() {
    return(
        <div>
            <Card className="mt-2">
                <Card.Body>
                    <Form>
                        <Form.Control as="textarea" rows={10} placeholder="Input Mesage"/>
                        <Button className="mt-2">Send</Button>
                    </Form>
                </Card.Body>
            </Card>

        </div>
    )
}
