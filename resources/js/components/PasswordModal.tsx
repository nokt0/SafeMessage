import * as React from 'react'
import { Button, Card, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { inputGetMessageSlice } from '../store/inputGetMessageSlice'
import { FetchingStatus, MessageGettingState } from '../store/types'
import { RootState } from '../store/store'
import ErrorMessage from './ErrorMessage'

export default function PasswordModal (props: { show: boolean, submit: any }) {
  const dispatch = useDispatch()
  const messageGetting: MessageGettingState = useSelector((state: RootState) => state.messageGetting)

  return (
    <div>
      {messageGetting.status !== FetchingStatus.SUCCESS ? (
        <div>{messageGetting?.errorConst && messageGetting?.errorMsg
          ? (<ErrorMessage message={messageGetting.errorMsg}/>) : ('')}
        <Card>
          <Card.Header>Password</Card.Header>
          <Card.Body>
            <Form onSubmit={(event) => props.submit(event)}>
              <h4>Input Password:</h4>
              <Form.Label>Password:</Form.Label>
              <Form.Row>
                <Col><Form.Control type="password" required onChange={
                  (event) => dispatch(inputGetMessageSlice.actions.setPassword(event.target.value))}
                placeholder="password"/></Col>
                <Col><Button type="submit">Submit</Button></Col>
              </Form.Row>
            </Form>
          </Card.Body>
        </Card>
        </div>) : ('')}
    </div>
  )
}
