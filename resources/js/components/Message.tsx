import * as React from "react"
import {Card} from 'react-bootstrap'
import {MessageInfo} from "./MessageInfo";
import {useLocation} from "react-router-dom";
import {useState} from "react";
import {InputGetMessageState, MessageDataState} from "../store/types";
import {RootState} from "../store/store";
import {useSelector, useDispatch} from 'react-redux'
import {getMessageThunk} from "../store/thunk";
import PasswordModal from "./PasswordModal";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Message() {
    const query = useQuery()
    const id = query.get('id')
    const [passwordModal, setPasswordModal] = useState(true)
    const inputGetMessage: InputGetMessageState = useSelector((state: RootState) => state.inputGetMessage)
    const messageData: MessageDataState = useSelector((state: RootState) => state.messageData)
    const dispatch = useDispatch()

    function sendPassword() {
        setPasswordModal(false);
        dispatch(getMessageThunk({id: id, password: inputGetMessage.password}));
    }

    return (
        <div>
            {passwordModal ?
                (<PasswordModal modal={passwordModal} setModal={setPasswordModal} submit={sendPassword}/>)
                :
                (
                    <div>
                        <MessageInfo/>
                        <Card>
                            <Card.Header>
                                Message
                            </Card.Header>
                            <Card.Body>
                                <img src={`data:image/gif;base64,${messageData.img}`} alt="Message"/>
                            </Card.Body>
                        </Card>
                    </div>
                )}
        </div>
    )

}
