import bootstrap from './bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import * as React from "react";
import MessageMenu from "./components/MessageMenu";
import {Jumbotron} from 'react-bootstrap'
import MessageInput from "./components/MessageInput";


export default function App() {
    return (
        <div>
            <Router>
                <NavigationBar/>
                <Jumbotron>
                    <MessageMenu/>
                    <MessageInput/>
                </Jumbotron>

            </Router>
        </div>
    )
}
