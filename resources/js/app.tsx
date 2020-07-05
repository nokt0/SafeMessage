import bootstrap from './bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import * as React from "react";
import MessageMenu from "./components/MessageMenu";
import {Jumbotron} from 'react-bootstrap'
import MessageInput from "./components/MessageInput";
import Message from "./components/Message";


export default function App() {
    return (
        <div>
            <Router>
                <NavigationBar/>
                <Jumbotron className="m-0">
                    <Switch>
                        <Route exact path="/">
                            <MessageMenu/>
                            <MessageInput/>

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
