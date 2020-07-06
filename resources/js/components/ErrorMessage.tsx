import * as React from 'react'
import { Alert, Container } from 'react-bootstrap'

export default function ErrorMessage (props: { message: string }) {
  return (
    <Container>
      <Alert variant="danger">
        {props.message}
      </Alert>
    </Container>
  )
}
