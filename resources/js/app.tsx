import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import * as React from 'react'
import MessageMenu from './components/MessageMenu'
import { Jumbotron } from 'react-bootstrap'
import Message from './components/Message'

export default function App () {
  return (
    <div>
      <Router>
        <NavigationBar/>
        <Jumbotron className="m-0 vh-100">
          <Switch>
            <Route exact path="/">
              <MessageMenu/>
            </Route>
            <Route exact path="/message">
              <Message/>
            </Route>
          </Switch>
        </Jumbotron>
      </Router>
    </div>
  )
}
