import * as React from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Navbar} from 'react-bootstrap'

export default function NavigationBar() {
    return(
        <Navbar bg="info" variant="dark" expand="md">
            <LinkContainer to="/" exact={true}>
                <Navbar.Brand href="/">
                    SafeMessage
                </Navbar.Brand>
            </LinkContainer>
        </Navbar>
    )
}
