import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Link as Link1,
    Switch,
    NavLink
} from 'react-router-dom';

class HomeArticle extends Component{


    render() {
        return(
            <div className="home__article--container">
                <div>
                    <h1>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <div className="home__article--image"></div>
                </div>
                <div className="home__article--box">
                    <Link1 to="/logowanie">
                    <span className="home__article--box1 box" style={{"display": "flex"}}>ODDAJ RZECZY</span>
                    </Link1>
                    <div className="box__space"></div>
                    <Link1 to="/logowanie">
                    <span className="home__article--box2 box" style={{"display": "flex"}}>ZORGANIZUJ ZBIÓRKĘ</span>
                    </Link1>
                </div>
            </div>
        )
    }
}

export default HomeArticle;