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

function App() {
  return (
    <div className="App">
        <HashRouter>
            <>
                <Route exact path="/" component={Home} />
                {/*<Route path="/about" component={HomeNav} />*/}
                {/*<Route path="/about/us" component={AboutUs} />*/}
                {/*<Route path="/about/company" component={AboutCompany} />*/}

            </>
        </HashRouter>
    </div>
  );
}

export default App;
