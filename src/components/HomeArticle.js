import React, {Component} from 'react';
import ReactDOM from "react-dom";


class HomeArticle extends Component{


    render() {
        return(
            <div className="home__article--container">
                <div>
                    <h1>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <div className="home__article--image"></div>
                </div>
                <div className="home__article--box">
                    <div className="home__article--box1 box">ODDAJ RZECZY</div>
                    <div className="home__article--box2 box">ZORGANIZUJ ZBIÓRKĘ</div>
                </div>
            </div>
        )
    }
}

export default HomeArticle;