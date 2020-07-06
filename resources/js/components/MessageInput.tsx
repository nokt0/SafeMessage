import * as React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { inputPostMessageSlice } from '../store/inputPostMessageSlice'
import { RootState } from '../store/store'
import { UiDataState } from '../store/types'
import MessageModal from './MessageModal'

export default function MessageInput () {
  const dispatch = useDispatch()

  const uiDataState: UiDataState = useSelector((state: RootState) => state.uiData)

  return (
    <div>
      <Card className="mt-2">
        <Card.Body>
          <Form.Control as="textarea" required rows={10} placeholder="Input Message"
            onChange={event => dispatch(inputPostMessageSlice.actions.setMessage(event.target.value))}/>
          <Button className="mt-2" type="submit">
                        Send
          </Button>
        </Card.Body>
      </Card>
      <MessageModal show={uiDataState.showLinkModal}/>
    </div>
  )
}
