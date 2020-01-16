import React from 'react';
import logo from './logo.svg';
import './scss/main.scss';
import ReactDOM from "react-dom";
import Home from "./components/Home";
import HomeNav from "./components/HomeNav";

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink
} from 'react-router-dom';
import LoginLayout from "./components/LoginLayout";
import RegisterLayout from "./components/RegisterLayout";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
        <HashRouter>
            <>
                <Route exact path="/" component={Home} />
                <Route path="/logowanie" component={LoginLayout} />
                <Route path="/rejestracja" component={RegisterLayout} />
                <Route path="/wylogowano" component={Logout} />

            </>
        </HashRouter>
    </div>
  );
}

export default App;
