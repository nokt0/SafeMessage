import bootstrap from './bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import * as React from "react";
import MessageMenu from "./components/MessageMenu";
import {Jumbotron} from 'react-bootstrap'
import MessageInput from "./components/MessageInput";
import MessageModal from "./components/MessageModal";
import {MessageInfo} from "./components/MessageInfo";


export default function App() {
    return (
        <div>
            <Router>
                <NavigationBar/>
                <Jumbotron className="m-0">
                    <MessageMenu/>
                    <MessageInput/>
                    <MessageModal/>
                    <MessageInfo/>
                </Jumbotron>
            </Router>
        </div>
    )
}
