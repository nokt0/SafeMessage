import * as React from 'react'
import { Card } from 'react-bootstrap'
import { MessageInfo } from './MessageInfo'
import { useLocation } from 'react-router-dom'
import { FetchingStatus, InputGetMessageState, MessageDataState, MessageGettingState, UiDataState } from '../store/types'
import { RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { getMessageThunk } from '../store/thunk'
import PasswordModal from './PasswordModal'

function useQuery () {
  return new URLSearchParams(useLocation().search)
}

export default function Message () {
  const query = useQuery()
  const id = query.get('id')
  const inputGetMessage: InputGetMessageState = useSelector((state: RootState) => state.inputGetMessage)
  const messageData: MessageDataState = useSelector((state: RootState) => state.messageData)
  const uiData: UiDataState = useSelector((state: RootState) => state.uiData)
  const messageGetting: MessageGettingState = useSelector((state: RootState) => state.messageGetting)
  const dispatch = useDispatch()

  function sendPassword (event) {
    event.preventDefault()
    dispatch(getMessageThunk({ id: id, password: inputGetMessage.password }))
  }

  return (
    <div>
      <PasswordModal show={uiData.showPasswordModal} submit={sendPassword}/>
      {messageGetting.status === FetchingStatus.SUCCESS ? (<div>
        <MessageInfo/>
        <Card>
          <Card.Header>
                        Message
          </Card.Header>
          <Card.Body>
            <img src={`data:image/gif;base64,${messageData.img}`} alt="Message"/>
          </Card.Body>
        </Card>
      </div>) : ''}
    </div>
  )
}
