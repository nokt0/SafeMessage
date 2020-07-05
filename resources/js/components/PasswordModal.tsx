import * as React from "react"
import {Modal, Button, Form} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {inputGetMessageSlice} from "../store/inputGetMessageSlice";

export default function PasswordModal(props: { modal: boolean, setModal: any, submit: any }) {

    const dispatch = useDispatch()

    return (
        <Modal size="lg" onHide={() => props.setModal(false)} centered show={props.modal}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Message Password
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Input Password:</h4>
                <Form onSubmit={() => props.submit()}>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control required onChange={
                        (event) => dispatch(inputGetMessageSlice.actions.setPassword(event.target.value))}
                                  placeholder="password"/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => props.submit()}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}
