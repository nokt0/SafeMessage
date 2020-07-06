import * as React from "react"
import {Modal, Button, Form} from 'react-bootstrap'
import {InputPostMessageState, MessagePostingState} from "../store/types";
import {RootState} from "../store/store";
import {useSelector,useDispatch} from 'react-redux'
import {uiDataSlice} from "../store/UiDataSlice";

export default function MessageModal(props: { show: boolean }) {
    const messagePosting: MessagePostingState = useSelector((state: RootState) => state.messagePosting)
    const inputPostMessageState: InputPostMessageState = useSelector((state: RootState) => state.inputPostMessage)
    const dispatch = useDispatch()

    return (
        <Modal size="lg" onHide={() => dispatch(uiDataSlice.actions.showLinkModal(false))} centered show={props.show}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Message Sent
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Share link, and your password.</h4>
                <Form>
                    <Form.Label>Link:</Form.Label>
                    <Form.Control value={`${document.location.protocol}//${document.location.host}/#/message?id=${messagePosting.postedId}`} disabled/>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control value={inputPostMessageState.password} disabled/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => dispatch(uiDataSlice.actions.showLinkModal(false))}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
