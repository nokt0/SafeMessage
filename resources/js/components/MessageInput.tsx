import * as React from "react";
import {Button, Card, Form} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {inputPostMessageSlice} from "../store/inputPostMessageSlice";
import {RootState} from "../store/store";
import {FetchingStatus, InputPostMessageState, MessagePostingState, UiDataState} from "../store/types";
import {postMessageThunk} from "../store/thunk";
import MessageModal from "./MessageModal";
import {uiDataSlice} from "../store/UiDataSlice";

export default function MessageInput() {
    const dispatch = useDispatch()
    const inputPostMessageState: InputPostMessageState = useSelector((state: RootState) => state.inputPostMessage)
    const messagePosting: MessagePostingState = useSelector((state: RootState) => state.messagePosting)
    const uiDataState: UiDataState = useSelector((state: RootState) => state.uiData)

    function submitMessage(event) {
        event.preventDefault()
        dispatch(postMessageThunk(inputPostMessageState))
            .then(() => {
                if (messagePosting.status === FetchingStatus.SUCCESS) {
                    dispatch(uiDataSlice.actions.showLinkModal(true))
                }
            })

    }

    return (
        <div>
            <Card className="mt-2">
                <Card.Body>
                    <Form>
                        <Form.Control as="textarea" required rows={10} placeholder="Input Message"
                                      onChange={event => dispatch(inputPostMessageSlice.actions.setMessage(event.target.value))}/>
                        <Button className="mt-2" onClick={(event) => submitMessage(event)}>
                            Send
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <MessageModal show={uiDataState.showLinkModal}/>
        </div>
    )
}
