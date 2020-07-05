import * as React from "react";
import {Form,Card, Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {inputPostMessageSlice} from "../store/inputPostMessageSlice";
import {RootState} from "../store/store";
import {InputPostMessageState} from "../store/types";
import {postMessageThunk} from "../store/thunk";
import MessageModal from "./MessageModal";
import {useState} from "react";

export default function MessageInput() {
    const dispatch = useDispatch()
    const inputPostMessageState: InputPostMessageState = useSelector((state: RootState) => state.inputPostMessage)
    const [show, setShow] = useState(false);

    function submitMessage(event){
        event.preventDefault()
        dispatch(postMessageThunk(inputPostMessageState))
        setShow(true);
    }

    return(
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
            <MessageModal show={show} setShow={setShow}/>
        </div>
    )
}
