import * as React from "react"
import {Modal, Button} from 'react-bootstrap'


export default function MessageModal() {

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Message Sent
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Share this link, and your password.</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
